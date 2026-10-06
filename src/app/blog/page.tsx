import React from 'react';
import type { Metadata } from 'next';
import BlogList from '@/components/BlogList';

export const metadata: Metadata = {
  title: 'Fitness Blog & Workout Guides | Dangal Gym Awadhpuri Bhopal',
  description: 'Read the latest fitness tips, workout routines, and nutritional advice from expert coaches at Dangal Gym Awadhpuri Bhopal.',
  alternates: {
    canonical: '/blog',
  },
};

export default function BlogListPage() {
  return <BlogList />;
}
