import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  url?: string;
  image?: string;
  schema?: string;
}

const SEO: React.FC<SEOProps> = ({ 
  title = "Dangal Gym - Best Gym in Awadhpuri | Fitness Centre in Bhopal",
  description = "Join Dangal Gym, the best gym in Awadhpuri, Bhopal. We offer Personal Training, Yoga Classes, Zumba, and Aerobics to help you become unstoppable.",
  keywords = "Best Gym in Awadhpuri, Fitness Center, Gym in Awadhpuri, Gym in Bhopal, Yoga Classes, Zumba, Aerobics, Personal Training, Gym Near Me, Dangal Gym",
  url = "https://dangalgym.com",
  image = "https://dangalgym.com/dangal.png",
  schema
}) => {
  return (
    <Helmet>
      {/* Primary Meta Tags */}
      <title>{title}</title>
      <meta name="title" content={title} />
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content={url} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={image} />

      {/* Canonical Link */}
      <link rel="canonical" href={url} />

      {/* Schema.org JSON-LD */}
      {schema && (
        <script type="application/ld+json">
          {schema}
        </script>
      )}
    </Helmet>
  );
};

export default SEO;
