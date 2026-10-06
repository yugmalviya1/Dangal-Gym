import React from 'react';
import type { Metadata } from 'next';
import BlogPost from '@/components/BlogPost';

export const metadata: Metadata = {
  title: 'Fitness Article | Dangal Gym Awadhpuri Bhopal',
  description: 'Expert fitness and training insights from Dangal Gym Bhopal.',
};

export default function BlogPostPage() {
  return <BlogPost />;
}
