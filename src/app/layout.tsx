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
    default: "Sakura Labs | Digital Agency - Web, App Development & Marketing",
    template: "%s | Sakura Labs",
  },
  description:
    "Sakura Labs (sakuralabs.in) is a premier digital agency specializing in high-performance Web Development, Mobile Apps, Ads, and Digital Marketing.",
  keywords: [
    "Sakura Labs",
    "sakuralabs.in",
    "Digital Agency India",
    "Web Development",
    "Mobile App Development",
    "React Nextjs Developer",
    "Performance Ads Agency",
    "Meta Ads Specialist",
    "Google Ads Management",
    "Digital Marketing Agency",
    "UI UX Design Studio",
  ],
  authors: [{ name: "Sakura Labs", url: siteUrl }],
  creator: "Sakura Labs",
  publisher: "Sakura Labs",
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
    title: "Sakura Labs | Digital Agency - Web, App Development & Marketing",
    description:
      "We engineer high-performance web applications, mobile apps, and data-driven marketing campaigns that scale brands and generate measurable results.",
    images: [
      {
        url: "/logos/logo-main.png",
        width: 800,
        height: 800,
        alt: "Sakura Labs Emblem Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sakura Labs | Digital Agency - Web, App Development & Marketing",
    description:
      "We engineer high-performance web applications, mobile apps, and data-driven marketing campaigns that scale brands.",
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
      description: "Full-service digital agency: Web Development, Mobile Apps, Ads & Digital Marketing",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
    },
    {
      "@type": ["ProfessionalService", "Organization"],
      "@id": `${siteUrl}/#organization`,
      name: "Sakura Labs",
      url: siteUrl,
      logo: `${siteUrl}/logos/logo-main.png`,
      image: `${siteUrl}/logos/logo-main.png`,
      description:
        "Sakura Labs is a premier full-service digital agency engineering modern web applications, mobile apps, performance advertising campaigns, and ROI-driven marketing.",
      email: "sakuralabs.dev@gmail.com",
      telephone: "+91-8714244119",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Malappuram",
        addressRegion: "Kerala",
        addressCountry: "IN",
      },
      sameAs: [
        "https://www.instagram.com/sakuralabs/",
        "https://www.linkedin.com/company/sakuralabs",
      ],
      priceRange: "$$",
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
          name: "What services does Sakura Labs specialize in?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We are a full-service digital agency specializing in custom Web Development, iOS & Android Mobile App Development, Performance Ads (Meta & Google Ads), Data-Driven Digital Marketing & SEO, and high-converting UI/UX Brand Design.",
          },
        },
        {
          "@type": "Question",
          name: "How does the project collaboration process work?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "We operate in close, agile sprints. From discovery and technical architecture to design and production-grade deployment, you have direct communication with our engineers and marketing strategists with regular milestone demos.",
          },
        },
        {
          "@type": "Question",
          name: "What are your typical project timelines?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Timelines depend on scope. Focused web builds or ad campaign setups typically launch within 1–2 weeks, while comprehensive web applications and full-scale mobile app platforms range from 3 to 6 weeks.",
          },
        },
        {
          "@type": "Question",
          name: "Do you work with startups, businesses, or global clients?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Yes! We partner with early-stage startups seeking rapid product launches as well as growing companies looking to scale their digital presence, user acquisition, and online revenue worldwide.",
          },
        },
        {
          "@type": "Question",
          name: "How do we get started on a project together?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Simply send us a message via our Contact form, WhatsApp (+91 87142 44119), or email us at sakuralabs.dev@gmail.com. We will review your goals and get back to you within hours.",
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
