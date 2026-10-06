import React, { Suspense } from 'react';
import type { Metadata } from 'next';
import Register from '@/components/Register';

export const metadata: Metadata = {
  title: 'Register & Join Dangal Gym | Membership in Awadhpuri Bhopal',
  description: 'Register online at Dangal Gym Awadhpuri Bhopal. Select your membership plan, claim exclusive discounts, and unlock your 3-day free trial.',
  alternates: {
    canonical: '/register',
  },
};

export default function RegisterPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-brand-dark flex items-center justify-center text-white">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-brand-red"></div>
      </div>
    }>
      <Register />
    </Suspense>
  );
}
