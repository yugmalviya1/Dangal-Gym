'use client';

import React, { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Calendar, User, ArrowLeft } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingSocials from './FloatingSocials';

interface Blog {
  _id: string;
  title: string;
  content: string;
  coverImage?: string;
  author: string;
  published: boolean;
  createdAt: string;
  updatedAt: string;
}

export default function BlogPost() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchBlog = async () => {
      try {
        const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
        const response = await fetch(`${apiUrl}/blogs/${id}`);
        if (!response.ok) {
          if (response.status === 404) {
            throw new Error('Blog not found');
          }
          throw new Error('Failed to fetch blog');
        }
        const data = await response.json();
        setBlog(data);
      } catch (err: any) {
        console.error('Error fetching blog:', err);
        setError(err.message || 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  if (loading) {
    return (
      <div className="relative min-h-screen bg-brand-dark overflow-hidden flex flex-col">
        <Navbar />
        <div className="flex-1 flex justify-center items-center">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-red"></div>
        </div>
        <Footer />
        <FloatingSocials />
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="relative min-h-screen bg-brand-dark overflow-hidden flex flex-col">
        <Navbar />
        <div className="flex-1 flex flex-col justify-center items-center text-center px-4">
          <h1 className="font-display text-4xl md:text-6xl text-white uppercase mb-6">Oops!</h1>
          <p className="text-gray-400 text-xl mb-8">{error || 'Blog not found'}</p>
          <button 
            onClick={() => router.push('/blog')}
            className="inline-flex items-center gap-2 bg-brand-red text-white px-8 py-4 rounded-full font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all duration-300"
          >
            <ArrowLeft size={20} /> Back to Blog
          </button>
        </div>
        <Footer />
        <FloatingSocials />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen bg-brand-dark overflow-hidden flex flex-col">
      <Navbar />

      <article className="relative pt-32 pb-16 md:pt-40 md:pb-24 flex-1">
        <div className="max-w-[800px] mx-auto px-4 md:px-8">
          
          <Link 
            href="/blog" 
            className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.2em] uppercase text-gray-400 hover:text-brand-red transition-colors mb-12 group"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" /> Back to Articles
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl tracking-wide text-white uppercase mb-8 leading-tight">
              {blog.title}
            </h1>

            <div className="flex items-center gap-6 text-sm font-semibold text-gray-400 mb-12 tracking-wider uppercase border-y border-white/5 py-4">
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-brand-red" />
                {new Date(blog.createdAt).toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                  year: 'numeric'
                })}
              </div>
              <div className="flex items-center gap-2">
                <User size={16} className="text-brand-red" />
                {blog.author}
              </div>
            </div>

            {blog.coverImage && (
              <div className="rounded-2xl overflow-hidden mb-12 border border-white/5 aspect-video relative">
                <img 
                  src={blog.coverImage} 
                  alt={blog.title} 
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Blog Post Content */}
            <div 
              className="prose prose-invert prose-red max-w-none text-gray-300 text-lg leading-relaxed space-y-6"
              dangerouslySetInnerHTML={{ __html: blog.content }}
            />

            {/* Call to Action at End of Post */}
            <div className="mt-16 p-8 bg-zinc-900/40 border border-brand-red/20 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h3 className="font-display text-2xl uppercase tracking-wider text-white mb-2">Ready to Start Your Journey?</h3>
                <p className="text-gray-400 text-sm">Join Dangal Gym today and train with the best coaches in Awadhpuri Bhopal.</p>
              </div>
              <Link 
                href="/register" 
                className="whitespace-nowrap bg-brand-red text-white px-8 py-3.5 rounded-full font-bold tracking-[0.2em] uppercase text-xs hover:bg-white hover:text-black transition-all"
              >
                Claim Free Trial
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      <Footer />
      <FloatingSocials />
    </div>
  );
}
