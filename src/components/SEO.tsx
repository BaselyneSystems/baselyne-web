import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  keywords?: string;
  ogImage?: string;
  ogType?: "website" | "article";
  structuredData?: object;
  publishedTime?: string;
  author?: string;
}

const BASE_URL = "https://baselynesystems.com";

export function SEO({
  title,
  description,
  canonical,
  keywords,
  ogImage = `${BASE_URL}/og-image.jpg`,
  ogType = "website",
  structuredData,
  publishedTime,
  author,
}: SEOProps) {
  const fullTitle = title.includes("Baselyne")
    ? title
    : `${title} | Baselyne Systems`;
  const canonicalUrl = canonical || BASE_URL;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {keywords && <meta name="keywords" content={keywords} />}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={ogType} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:site_name" content="Baselyne Systems" />
      <meta property="og:locale" content="en_US" />
      {ogType === "article" && publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}
      {ogType === "article" && author && (
        <meta property="article:author" content={author} />
      )}
      {ogType === "article" && (
        <meta property="article:section" content="Technology" />
      )}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}

// Organization schema - use on all pages
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Baselyne Systems",
  url: "https://baselynesystems.com",
  logo: "https://baselynesystems.com/logo.png",
  description:
    "Physical AI infrastructure firm focused on safer iteration and rollout for autonomy teams.",
  sameAs: ["https://www.linkedin.com/in/achyuthsamudrala/"],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "sales",
    url: "https://baselynesystems.com/contact",
  },
};

// Professional Service schema
export const professionalServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Baselyne Systems",
  url: "https://baselynesystems.com",
  description:
    "Physical AI infrastructure and consulting for industrial robotics teams.",
  priceRange: "$$$",
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Consulting Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Infrastructure Consulting",
          description:
            "Infrastructure strategy and implementation for autonomy teams.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "MLOps Consulting",
          description:
            "Model lifecycle, evaluation, and rollout infrastructure.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Data Infrastructure Consulting",
          description:
            "Data capture, curation, and traceability for physical AI systems.",
        },
      },
    ],
  },
};

// Article schema factory for blog posts
export function articleSchema({
  title,
  description,
  url,
  datePublished,
  keywords,
}: {
  title: string;
  description: string;
  url: string;
  datePublished: string;
  keywords: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: title,
    description,
    url,
    datePublished,
    author: {
      "@type": "Person",
      name: "Achyuth Samudrala",
      url: "https://www.linkedin.com/in/achyuthsamudrala/",
    },
    publisher: {
      "@type": "Organization",
      name: "Baselyne Systems",
      url: "https://baselynesystems.com",
      logo: {
        "@type": "ImageObject",
        url: "https://baselynesystems.com/og-image.jpg",
      },
    },
    image: "https://baselynesystems.com/og-image.jpg",
    keywords,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": url,
    },
  };
}

// Service-specific schemas
export const physicalAIServiceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Physical AI Data Infrastructure",
  provider: {
    "@type": "Organization",
    name: "Baselyne Systems",
    url: "https://baselynesystems.com",
  },
  description:
    "Infrastructure for physical AI teams focused on validation, rollout, and safer updates.",
  serviceType: "Consulting",
  areaServed: "Worldwide",
  url: "https://baselynesystems.com/physical-ai",
};
