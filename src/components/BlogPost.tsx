import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
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
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [blog, setBlog] = useState<Blog | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const fetchBlog = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';
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
        <Helmet>
          <title>Blog Not Found | Dangal Gym</title>
        </Helmet>
        <Navbar />
        <div className="flex-1 flex flex-col justify-center items-center text-center px-4">
          <h1 className="font-display text-4xl md:text-6xl text-white uppercase mb-6">Oops!</h1>
          <p className="text-gray-400 text-xl mb-8">{error || 'Blog not found'}</p>
          <button 
            onClick={() => navigate('/blog')}
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

  // Create a plain text description for SEO
  const description = blog.content.replace(/<[^>]+>/g, '').substring(0, 150) + '...';

  return (
    <div className="relative min-h-screen bg-brand-dark overflow-hidden flex flex-col">
      <Helmet>
        <title>{blog.title} | Dangal Gym Blog</title>
        <meta name="description" content={description} />
        {blog.coverImage && <meta property="og:image" content={blog.coverImage} />}
      </Helmet>

      <Navbar />

      <article className="relative pt-32 pb-16 md:pt-40 md:pb-24 flex-1">
        <div className="max-w-[800px] mx-auto px-4 md:px-8">
          
          <Link 
            to="/blog" 
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

            <div className="flex flex-wrap items-center gap-6 text-sm text-gray-400 mb-12 uppercase tracking-wider font-bold border-b border-white/10 pb-8">
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
          </motion.div>

          {blog.coverImage && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="w-full aspect-video md:aspect-[21/9] bg-zinc-900 rounded-2xl overflow-hidden mb-12 border border-white/10"
            >
              <img 
                src={blog.coverImage} 
                alt={blog.title} 
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="prose prose-invert prose-lg max-w-none 
              prose-headings:font-display prose-headings:uppercase prose-headings:tracking-wide
              prose-h2:text-3xl prose-h2:mt-12 prose-h2:mb-6
              prose-h3:text-2xl prose-h3:mt-8 prose-h3:mb-4
              prose-p:text-gray-300 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-brand-red hover:prose-a:text-white prose-a:transition-colors
              prose-strong:text-white prose-strong:font-bold
              prose-ul:text-gray-300 prose-ul:list-disc prose-ul:pl-6
              prose-ol:text-gray-300 prose-ol:list-decimal prose-ol:pl-6
              prose-li:mb-2
              prose-blockquote:border-l-brand-red prose-blockquote:bg-white/5 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      </article>

      <Footer />
      <FloatingSocials />
    </div>
  );
}
