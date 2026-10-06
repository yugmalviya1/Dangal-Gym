import type { Metadata } from 'next';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingSocials from '@/components/FloatingSocials';
import VideoTestimonials from '@/components/VideoTestimonials';
import Transformation from '@/components/Transformation';
import { BreadcrumbSchema, GMB_DATA } from '@/components/StructuredData';
import { Star, MessageSquareHeart, ChevronRight, ExternalLink } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Member Reviews & Ratings (4.9★) | Dangal Gym Awadhpuri Bhopal',
  description: 'Read authentic Google reviews and feedback from Dangal Gym Awadhpuri members. Rated 4.9 out of 5 stars for equipment quality, personal training, cleanliness, and women\'s safety.',
  keywords: [
    'Dangal Gym Reviews',
    'Best Gym Reviews Awadhpuri',
    'Gym Ratings Bhopal',
    'Dangal Gym Bhopal Feedback',
    'Safe Gym Reviews Bhopal'
  ],
  alternates: {
    canonical: '/reviews',
  },
  openGraph: {
    title: 'Dangal Gym Reviews & Ratings (4.9★) - Awadhpuri Bhopal',
    description: '180+ verified Google reviews from real members training at Dangal Gym Bhopal.',
    url: 'https://dangalgym.xyz/reviews',
    images: [{ url: 'https://dangalgym.xyz/dangal.png', width: 1200, height: 630 }],
  }
};

const allReviews = [
  { 
    name: 'Priya S.', 
    image: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_100,h_100,c_fill,g_face,q_auto,f_auto/v1780628506/WhatsApp_Image_2026-06-03_at_6.44.30_PM_4_pleu2i.jpg', 
    text: "Amazing environment and completely safe for women. The trainers provide tailored guidance and the steam bath is a fantastic recovery bonus. Highly recommend for female fitness enthusiasts!", 
    highlight: "Women Safety & Environment", 
    stars: 5,
    tag: 'Verified Google Review'
  },
  { 
    name: 'Rahul V.', 
    image: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_100,h_100,c_fill,g_face,q_auto,f_auto/v1780628507/WhatsApp_Image_2026-06-03_at_6.44.30_PM_1_asxokk.jpg', 
    text: "The equipments are top-notch and international grade. Spanning three floors, you never have to wait for machines or squat racks even during peak evening hours.", 
    highlight: "Premium Equipments", 
    stars: 5,
    tag: 'Verified Google Review'
  },
  { 
    name: 'Neha K.', 
    image: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_100,h_100,c_fill,g_face,q_auto,f_auto/v1780628506/WhatsApp_Image_2026-06-03_at_6.44.25_PM_v0dtrn.jpg', 
    text: "Joined 6 months ago and had an unbelievable transformation. The trainers are highly supportive, non-intimidating, and the customized diet plans actually work.", 
    highlight: "Great Transformation", 
    stars: 5,
    tag: 'Verified Google Review'
  },
  { 
    name: 'Amit T.', 
    image: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_100,h_100,c_fill,g_face,q_auto,f_auto/v1780628509/WhatsApp_Image_2026-06-03_at_6.44.30_PM_7_znfpmq.jpg', 
    text: "Best gym in Awadhpuri! The hygiene, 100% air-conditioned comfort, and overall vibe is just perfect for serious workouts. Great music and community.", 
    highlight: "Great Environment", 
    stars: 5,
    tag: 'Verified Google Review'
  },
  { 
    name: 'Sneha M.', 
    image: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_100,h_100,c_fill,g_face,q_auto,f_auto/v1780628506/WhatsApp_Image_2026-06-03_at_6.44.30_PM_4_pleu2i.jpg', 
    text: "Felt very secure and comfortable working out here. Very professional staff and great crowd. The Zumba and yoga sessions are so refreshing.", 
    highlight: "Women Comfort", 
    stars: 5,
    tag: 'Verified Google Review'
  },
  { 
    name: 'Vikas J.', 
    image: 'https://res.cloudinary.com/df5q9ujfh/image/upload/w_100,h_100,c_fill,g_face,q_auto,f_auto/v1780628508/WhatsApp_Image_2026-06-03_at_6.44.30_PM_8_mbsl37.jpg', 
    text: "Lost 15kgs in 4 months. The personalized diet plans, equipment variety, and personal accountability from coaches made it completely sustainable.", 
    highlight: "Body Transformation", 
    stars: 5,
    tag: 'Verified Google Review'
  }
];

export default function ReviewsPage() {
  return (
    <div className="min-h-screen bg-brand-dark text-white flex flex-col">
      <BreadcrumbSchema 
        items={[
          { name: 'Home', url: '/' },
          { name: 'Reviews', url: '/reviews' }
        ]} 
      />

      <Navbar />

      <main className="flex-1 pt-28 md:pt-36">
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs uppercase tracking-wider text-gray-500 font-semibold">
            <Link href="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight size={12} />
            <span className="text-brand-red">Member Reviews</span>
          </nav>
        </div>

        {/* Hero & Rating Summary Card */}
        <section className="relative pb-16 pt-4 border-b border-white/5">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-red/10 border border-brand-red/30 text-brand-red text-xs font-bold uppercase tracking-widest mb-6">
                <MessageSquareHeart size={14} /> Real Feedback
              </div>

              <h1 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight leading-none mb-6">
                What Awadhpuri Says About <span className="text-brand-red">Dangal Gym</span>
              </h1>

              <p className="text-gray-300 text-base sm:text-lg font-medium leading-relaxed">
                We believe results speak louder than words. Discover how our community rates our coaches, hygiene, equipment, and training atmosphere.
              </p>
            </div>

            {/* Google Rating Hero Card */}
            <div className="max-w-xl mx-auto p-8 rounded-3xl bg-zinc-900/60 border border-white/10 text-center shadow-2xl">
              <div className="flex items-center justify-center gap-2 mb-3">
                <span className="font-display text-6xl font-black text-white">{GMB_DATA.ratingValue}</span>
                <div className="flex flex-col items-start">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} size={22} fill="currentColor" />)}
                  </div>
                  <span className="text-xs uppercase tracking-wider text-gray-400 font-bold mt-1">Based on {GMB_DATA.reviewCount}+ Google Reviews</span>
                </div>
              </div>

              <p className="text-sm text-gray-300 mb-6 font-medium">
                Consistently ranked as the highest-rated fitness club in Awadhpuri & East Bhopal.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-4">
                <a 
                  href={GMB_DATA.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-brand-red hover:bg-red-700 text-white font-bold text-xs uppercase tracking-widest rounded-full transition-all flex items-center gap-2"
                >
                  <ExternalLink size={14} /> Write a Google Review
                </a>
                <Link 
                  href="/register" 
                  className="px-6 py-3 bg-white/5 hover:bg-white hover:text-black text-white font-bold text-xs uppercase tracking-widest rounded-full border border-white/10 transition-all"
                >
                  Claim 3-Day Pass
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Reviews Grid */}
        <section className="py-20 border-b border-white/5 bg-zinc-950">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {allReviews.map((review, i) => (
                <div key={i} className="bg-zinc-900/40 p-8 rounded-2xl border border-white/5 flex flex-col hover:border-brand-red/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <img src={review.image} alt={review.name} className="w-12 h-12 rounded-full object-cover border border-white/10" />
                      <div>
                        <h3 className="font-bold text-white uppercase text-sm tracking-wide">{review.name}</h3>
                        <div className="flex text-yellow-400 mt-0.5">
                          {[...Array(review.stars)].map((_, s) => <Star key={s} size={12} fill="currentColor" />)}
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-1">
                    &ldquo;{review.text}&rdquo;
                  </p>

                  <div className="flex items-center justify-between pt-4 border-t border-white/5">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-brand-red bg-brand-red/10 px-3 py-1 rounded-full">
                      {review.highlight}
                    </span>
                    <span className="text-[10px] text-gray-500 font-semibold">{review.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Stories */}
        <VideoTestimonials />

        {/* Transformation Showcase */}
        <Transformation />
      </main>

      <Footer />
      <FloatingSocials />
    </div>
  );
}
