"use client"

import Head from "next/head"
import { useRouter } from "next/router"

interface SEOProps {
  title?: string
  description?: string
  keywords?: string
  image?: string
  url?: string
  type?: "website" | "article" | "profile"
  author?: string
  publishedTime?: string
  modifiedTime?: string
  noIndex?: boolean
  canonical?: string
}

const defaultSEO = {
  title: "CreatorHub - Content Creator Analytics Dashboard",
  description:
    "Professional analytics dashboard for content creators. Track your performance across YouTube, Instagram, TikTok, and more with advanced insights and revenue tracking.",
  keywords:
    "content creator, analytics, dashboard, youtube analytics, instagram insights, social media analytics, creator tools, revenue tracking",
  image: "/og-image.jpg",
  type: "website" as const,
  author: "CreatorHub Team",
}

export default function SEO({
  title,
  description = defaultSEO.description,
  keywords = defaultSEO.keywords,
  image = defaultSEO.image,
  url,
  type = defaultSEO.type,
  author = defaultSEO.author,
  publishedTime,
  modifiedTime,
  noIndex = false,
  canonical,
}: SEOProps) {
  const router = useRouter()

  // Smart URL detection with fallbacks
  const getBaseUrl = () => {
    // 1. Use environment variable if set
    if (process.env.NEXT_PUBLIC_BASE_URL) {
      return process.env.NEXT_PUBLIC_BASE_URL
    }

    // 2. Use Vercel URL if available
    if (process.env.NEXT_PUBLIC_VERCEL_URL) {
      return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
    }

    // 3. Fallback for development
    if (typeof window !== "undefined") {
      return window.location.origin
    }

    // 4. Default fallback
    return "https://creatorhub.com"
  }

  const baseUrl = getBaseUrl()
  const fullTitle = title ? `${title} | CreatorHub` : defaultSEO.title
  const fullUrl = url || `${baseUrl}${router.asPath}`
  const fullImage = image.startsWith("http") ? image : `${baseUrl}${image}`

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: "CreatorHub",
    description: description,
    url: baseUrl,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Web",
    offers: {
      "@type": "Offer",
      price: "29.00",
      priceCurrency: "USD",
      priceValidUntil: "2024-12-31",
    },
    author: {
      "@type": "Organization",
      name: "CreatorHub",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "CreatorHub",
      logo: {
        "@type": "ImageObject",
        url: `${baseUrl}/logo.png`,
      },
    },
  }

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content={noIndex ? "noindex,nofollow" : "index,follow"} />

      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      {!canonical && <link rel="canonical" href={fullUrl} />}

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={fullImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content="CreatorHub" />
      <meta property="og:locale" content="en_US" />

      {/* Article specific tags */}
      {type === "article" && publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {type === "article" && modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {type === "article" && author && <meta property="article:author" content={author} />}

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@creatorhub" />
      <meta name="twitter:creator" content="@creatorhub" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImage} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#3b82f6" />
      <meta name="msapplication-TileColor" content="#3b82f6" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      <meta name="apple-mobile-web-app-title" content="CreatorHub" />

      {/* Favicon and Icons */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Preconnect to external domains */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
    </Head>
  )
}
