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
  description = "Join Dangal Gym, the best gym in Awadhpuri, Bhopal. Get fit, build strength, and become unstoppable at the top fitness centre near me.",
  keywords = "Best Gym in Awadhpuri, Gym in Awadhpuri, Best Gym in Bhopal, Gym Near Me, Fitness Centre in Bhopal, Dangal Gym, Fitness",
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
