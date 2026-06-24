import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Calendar, User, ArrowRight } from 'lucide-react';
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

export default function BlogList() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Scroll to top on mount
    window.scrollTo(0, 0);

    const fetchBlogs = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3001/api';
        const response = await fetch(`${apiUrl}/blogs`);
        if (!response.ok) {
          throw new Error('Failed to fetch blogs');
        }
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Error fetching blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="relative min-h-screen bg-brand-dark overflow-hidden flex flex-col">
      <Helmet>
        <title>Blog | Dangal Gym - Expert Fitness Tips & Insights</title>
        <meta name="description" content="Read the latest fitness tips, workout guides, and nutritional advice from the experts at Dangal Gym." />
      </Helmet>

      <Navbar />

      {/* Hero Section for Blog */}
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 px-4 md:px-12 flex-1">
        <div className="max-w-[1400px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl tracking-wider text-white uppercase mb-6">
              Fitness <span className="text-brand-red">Insights</span>
            </h1>
            <p className="text-gray-400 text-lg md:text-xl">
              Elevate your training with expert advice, workout routines, and nutritional guidance.
            </p>
          </motion.div>

          {loading ? (
            <div className="flex justify-center items-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-red"></div>
            </div>
          ) : blogs.length === 0 ? (
            <div className="text-center py-20 text-gray-500 text-xl">
              <p>No blogs available at the moment. Check back soon!</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs.map((blog, index) => (
                <motion.div
                  key={blog._id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group flex flex-col bg-white/5 border border-white/5 rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
                >
                  <Link to={`/blog/${blog._id}`} className="block relative aspect-video overflow-hidden bg-black/50">
                    {blog.coverImage ? (
                      <img 
                        src={blog.coverImage} 
                        alt={blog.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-zinc-900">
                        <img src="/dangal.png" alt="Dangal" className="h-8 opacity-20" />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-dark to-transparent opacity-60"></div>
                  </Link>

                  <div className="p-6 md:p-8 flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-xs text-gray-400 mb-4 uppercase tracking-wider font-bold">
                      <div className="flex items-center gap-1.5">
                        <Calendar size={14} className="text-brand-red" />
                        {new Date(blog.createdAt).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <User size={14} className="text-brand-red" />
                        {blog.author}
                      </div>
                    </div>

                    <Link to={`/blog/${blog._id}`}>
                      <h2 className="text-xl md:text-2xl font-display uppercase tracking-wide text-white mb-4 group-hover:text-brand-red transition-colors line-clamp-2">
                        {blog.title}
                      </h2>
                    </Link>

                    {/* Strip HTML tags for the snippet */}
                    <p className="text-gray-400 line-clamp-3 mb-6 flex-1">
                      {blog.content.replace(/<[^>]+>/g, '')}
                    </p>

                    <Link 
                      to={`/blog/${blog._id}`}
                      className="inline-flex items-center gap-2 text-sm font-bold tracking-[0.2em] uppercase text-white hover:text-brand-red transition-colors mt-auto"
                    >
                      Read More <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
      <FloatingSocials />
    </div>
  );
}
