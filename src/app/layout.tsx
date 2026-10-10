import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./scrollbar.css";
import "./marquee.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const siteUrl = "https://sakuralabs.in";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Sakura Labs | Premier Web Development, Web Design, GEO & AEO Agency",
    template: "%s | Sakura Labs",
  },
  description:
    "Sakura Labs (sakuralabs.in) is an elite digital engineering studio offering custom Web Development, UI/UX Web Design, Mobile Apps, GEO (Generative Engine Optimization), AEO, and Performance Marketing. Serving Kozhikode, Malappuram, Kochi, Thrissur, Bengaluru, Delhi, Indore, Nellore, UAE, Saudi Arabia, Paris & worldwide.",
  keywords: [
    // Core Web Development & Web Design
    "Web Development Agency",
    "Web Design Company",
    "Custom Web Development",
    "Bespoke Website Design",
    "UI UX Design Studio",
    "Next.js Web Development",
    "React Developers",
    "Full Stack Web Development",
    "E-commerce Website Development",
    "Responsive Web Design",
    "High Performance Web Applications",
    "Modern Web Design",
    "Corporate Website Design",
    "Landing Page Design & Optimization",
    "Frontend Engineering",
    "CMS Development",

    // GEO & AEO (Generative & Answer Engine Optimization)
    "Generative Engine Optimization",
    "GEO Agency",
    "Answer Engine Optimization",
    "AEO Services",
    "AI Search Optimization",
    "ChatGPT Optimization Agency",
    "Perplexity AI SEO",
    "Google AI Overviews Optimization",
    "Search Engine Optimization SEO",
    "Technical SEO",
    "Entity SEO & Schema Architecture",

    // Regional - Kerala Locations
    "Web Development Kozhikode",
    "Web Design Kozhikode",
    "Website Designers Calicut",
    "Web Development Malappuram",
    "Web Design Malappuram",
    "Web Development Thrissur",
    "Web Design Thrissur",
    "Web Development Kochi",
    "Web Design Kochi",
    "Web Development Ernakulam",
    "Web Design Ernakulam",
    "Best Web Agency in Kerala",
    "Digital Marketing Agency Kozhikode",
    "Website Makers Kerala",

    // Regional - India Metros & Cities
    "Web Development Bengaluru",
    "Web Design Bangalore",
    "Web Agency Bengaluru",
    "Web Development Delhi",
    "Website Design Delhi NCR",
    "Web Development Indore",
    "Web Design Indore",
    "Web Development Nellore",
    "Web Design Nellore",
    "Web Development Mumbai",
    "Web Development Hyderabad",
    "Top Digital Agency India",

    // International Locations (UAE, Saudi Arabia, Paris France, Global)
    "Web Development UAE",
    "Web Design Dubai",
    "Website Design Agency Dubai",
    "Web Development Abu Dhabi",
    "Web Design Sharjah",
    "Web Development Saudi Arabia",
    "Web Design Riyadh",
    "Web Developers Jeddah",
    "Digital Agency Middle East",
    "Web Design Paris",
    "Web Development Paris",
    "Agence Web Paris France",
    "Web Design Agency Europe",
    "Global Digital Agency",

    // Other Services
    "Mobile App Development",
    "iOS App Development",
    "Android App Development",
    "React Native App Development",
    "Flutter App Developers",
    "Performance Marketing Agency",
    "Meta Ads Management",
    "Google Ads Specialist",
    "Brand Identity Design",
    "Logo Design & Branding",
    "Software Development Company",
    "Sakura Labs",
    "sakuralabs.in",
  ],
  authors: [{ name: "Sakura Labs", url: siteUrl }],
  creator: "Sakura Labs",
  publisher: "Sakura Labs",
  category: "technology",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Sakura Labs",
    title: "Sakura Labs | Web Development, Web Design, GEO & AEO Agency",
    description:
      "We engineer high-performance web applications, modern web design, mobile apps, GEO/AEO, and data-driven marketing campaigns across Kerala, India, UAE, Saudi Arabia, France, and worldwide.",
    images: [
      {
        url: "/logos/logo-main.png",
        width: 800,
        height: 800,
        alt: "Sakura Labs - Premier Web Development & Design Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sakura Labs | Web Development, Web Design & Digital Innovation",
    description:
      "Premier digital agency crafting high-performance web applications, UI/UX design, mobile apps, and GEO/AEO search dominance.",
    images: ["/logos/logo-main.png"],
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
  icons: {
    icon: "/favicon.ico",
    apple: "/logos/logo-main.png",
  },
};

const jsonLdData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Sakura Labs",
      description:
        "Premier digital agency offering Web Development, Web Design, Mobile Apps, GEO (Generative Engine Optimization), AEO, and Performance Marketing.",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": ["ProfessionalService", "Organization"],
      "@id": `${siteUrl}/#organization`,
      name: "Sakura Labs",
      alternateName: ["Sakura Labs Studio", "sakuralabs.in"],
      url: siteUrl,
      logo: `${siteUrl}/logos/logo-main.png`,
      image: `${siteUrl}/logos/logo-main.png`,
      description:
        "Sakura Labs is an elite digital engineering agency specializing in custom Web Development, UI/UX Web Design, Mobile App Development, Generative Engine Optimization (GEO), Answer Engine Optimization (AEO), and high-ROI Performance Advertising. Operating locally in Kerala & major Indian hubs, and globally across UAE, Saudi Arabia, and France.",
      slogan: "Accelerated Growth & High-Performance Digital Products",
      email: "sakuralabs.dev@gmail.com",
      telephone: "+91-8714244119",
      priceRange: "$$",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Malappuram",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
      areaServed: [
        { "@type": "City", name: "Kozhikode" },
        { "@type": "City", name: "Malappuram" },
        { "@type": "City", name: "Thrissur" },
        { "@type": "City", name: "Kochi" },
        { "@type": "City", name: "Ernakulam" },
        { "@type": "City", name: "Kannur" },
        { "@type": "City", name: "Thiruvananthapuram" },
        { "@type": "AdministrativeArea", name: "Kerala" },
        { "@type": "City", name: "Bengaluru" },
        { "@type": "City", name: "Delhi" },
        { "@type": "City", name: "Indore" },
        { "@type": "City", name: "Nellore" },
        { "@type": "City", name: "Mumbai" },
        { "@type": "City", name: "Hyderabad" },
        { "@type": "Country", name: "India" },
        { "@type": "City", name: "Dubai" },
        { "@type": "City", name: "Abu Dhabi" },
        { "@type": "Country", name: "United Arab Emirates" },
        { "@type": "City", name: "Riyadh" },
        { "@type": "City", name: "Jeddah" },
        { "@type": "Country", name: "Saudi Arabia" },
        { "@type": "City", name: "Paris" },
        { "@type": "Country", name: "France" },
        { "@type": "AdministrativeArea", name: "Worldwide" },
      ],
      knowsAbout: [
        "Web Development",
        "Web Design",
        "UI/UX Design",
        "Next.js",
        "React",
        "TypeScript",
        "Generative Engine Optimization (GEO)",
        "Answer Engine Optimization (AEO)",
        "Search Engine Optimization (SEO)",
        "Mobile App Development",
        "iOS & Android Engineering",
        "Meta Ads",
        "Google Ads",
        "Performance Marketing",
        "Brand Identity Systems",
        "E-Commerce Solutions",
      ],
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Sakura Labs Digital Services",
        itemListElement: [
          {
            "@type": "Service",
            name: "Web Development",
            serviceType: "Custom Web Application & Website Development",
            description:
              "High-performance, scalable web development using Next.js, React, Node.js, and modern full-stack architectures. Built for extreme speed, security, SEO, and maximum conversion rates.",
          },
          {
            "@type": "Service",
            name: "Web Design & UI/UX Experience",
            serviceType: "Digital Product Design & Website Design",
            description:
              "Bespoke, conversion-focused UI/UX design, design systems, and responsive web layouts crafted to elevate brand equity and user engagement.",
          },
          {
            "@type": "Service",
            name: "GEO (Generative Engine Optimization) & AEO (Answer Engine Optimization)",
            serviceType: "AI Search & Answer Engine Optimization",
            description:
              "Strategic optimization ensuring your brand and website are recommended, cited, and summarized by AI answer engines including ChatGPT, Perplexity, Google Gemini, and Claude.",
          },
          {
            "@type": "Service",
            name: "Mobile App Development",
            serviceType: "iOS & Android Mobile Applications",
            description:
              "Native and cross-platform mobile apps engineered for fluid performance, high retention, and seamless app store launches.",
          },
          {
            "@type": "Service",
            name: "Performance Advertising",
            serviceType: "Paid Media Buying & Ads Management",
            description:
              "Data-backed Meta Ads and Google Ads campaigns configured for laser-targeted customer acquisition, reduced CPA, and elevated ROAS.",
          },
          {
            "@type": "Service",
            name: "Brand & Visual Identity Systems",
            serviceType: "Branding & Creative Direction",
            description:
              "Comprehensive visual identity creation, logos, typography, style guides, and creative digital assets that position your business as a market leader.",
          },
        ],
      },
      sameAs: [
        "https://www.instagram.com/sakuralabs/",
        "https://www.linkedin.com/company/sakuralabsofficial/",
      ],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          opens: "09:00",
          closes: "19:00",
        },
      ],
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "What web development and web design services does Sakura Labs provide?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Sakura Labs specializes in custom high-performance Web Development (Next.js, React, Full-Stack applications) and conversion-focused Web Design (UI/UX, responsive mobile-first websites, design systems, e-commerce, and high-converting landing pages). We build ultra-fast, modern websites tailored for brands in Kerala, across India, and worldwide.",
          },
        },
        {
          "@type": "Question",
          name: "Which locations does Sakura Labs serve for web development and design?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We proudly serve clients locally in Kozhikode, Malappuram, Thrissur, Kochi, Ernakulam, Kannur, and across Kerala; nationally across Bengaluru, Delhi NCR, Indore, Nellore, Mumbai, and Hyderabad; and internationally across the UAE (Dubai, Abu Dhabi), Saudi Arabia (Riyadh, Jeddah), France (Paris), and globally.",
          },
        },
        {
          "@type": "Question",
          name: "What is GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization)?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "GEO (Generative Engine Optimization) and AEO (Answer Engine Optimization) are modern search optimization disciplines designed to ensure your website and brand are prominently cited, featured, and recommended by AI-powered search tools such as ChatGPT, Perplexity AI, Google Gemini, and Google AI Overviews. Sakura Labs structures content, entity schemas, and semantic data to dominate both traditional Google Search and AI answer engines.",
          },
        },
        {
          "@type": "Question",
          name: "What other digital services does Sakura Labs provide besides web development?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "In addition to web development and design, Sakura Labs delivers native & cross-platform Mobile App Development (iOS & Android), Performance Ads management (Meta Ads & Google Ads), Full-Funnel Digital Marketing, Technical & Local SEO, and comprehensive Brand & UI/UX Design systems.",
          },
        },
        {
          "@type": "Question",
          name: "How does Sakura Labs handle collaboration for international and out-of-state clients?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We operate with modern agile remote sprints, regular milestone video walkthroughs, transparent Slack/WhatsApp communication, and dedicated account managers. Whether you are in Bengaluru, Dubai, Riyadh, Paris, or Kozhikode, our delivery cycles are synchronized to your time zone.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} min-h-screen antialiased`}
    >
      <head>
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-06C90DPJGR"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-06C90DPJGR');
          `}
        </Script>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdData) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
