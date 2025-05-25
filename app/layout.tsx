import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  preload: true,
})

// Smart base URL detection
const getBaseUrl = () => {
  if (process.env.NEXT_PUBLIC_BASE_URL) {
    return process.env.NEXT_PUBLIC_BASE_URL
  }
  if (process.env.NEXT_PUBLIC_VERCEL_URL) {
    return `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  }
  return "https://creatorhub.com"
}

export const metadata: Metadata = {
  metadataBase: new URL(getBaseUrl()),
  title: {
    default: "CreatorHub - Content Creator Analytics Dashboard",
    template: "%s | CreatorHub",
  },
  description:
    "Professional analytics dashboard for content creators. Track your performance across YouTube, Instagram, TikTok, and more with advanced insights and revenue tracking.",
  keywords: [
    "content creator",
    "analytics",
    "dashboard",
    "youtube analytics",
    "instagram insights",
    "social media analytics",
    "creator tools",
    "revenue tracking",
  ],
  authors: [{ name: "CreatorHub Team" }],
  creator: "CreatorHub",
  publisher: "CreatorHub",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "CreatorHub",
    title: "CreatorHub - Content Creator Analytics Dashboard",
    description:
      "Professional analytics dashboard for content creators. Track your performance across YouTube, Instagram, TikTok, and more with advanced insights and revenue tracking.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CreatorHub Dashboard Preview",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@creatorhub",
    creator: "@creatorhub",
    title: "CreatorHub - Content Creator Analytics Dashboard",
    description:
      "Professional analytics dashboard for content creators. Track your performance across YouTube, Instagram, TikTok, and more with advanced insights and revenue tracking.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  alternates: {
    canonical: "/",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Additional SEO meta tags */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="CreatorHub" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebApplication",
              name: "CreatorHub",
              description: "Professional analytics dashboard for content creators",
              url: getBaseUrl(),
              applicationCategory: "BusinessApplication",
              operatingSystem: "Web",
              offers: {
                "@type": "Offer",
                price: "29.00",
                priceCurrency: "USD",
              },
              author: {
                "@type": "Organization",
                name: "CreatorHub",
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
