import type { Metadata } from "next";

const siteUrl = "https://sakuralabs.in";

export const metadata: Metadata = {
  title: "Careers at Sakura Labs | Digital Marketing Intern & Opportunities",
  description:
    "Join Sakura Labs as a Digital Marketing Intern. Learn Meta Ads, Google Ads, SEO, viral content creation, and work with real client campaigns. PPO & mentorship included.",
  alternates: {
    canonical: "/careers",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${siteUrl}/careers`,
    siteName: "Sakura Labs Careers",
    title: "Careers at Sakura Labs | Digital Marketing Intern (We Are Hiring)",
    description:
      "Join Sakura Labs as a Digital Marketing Intern. Gain hands-on experience in Meta Ads, Google Ads, SEO, and content creation with Pre-Placement Offer (PPO) potential.",
    images: [
      {
        url: "/posts/post 4.png",
        width: 1080,
        height: 1350,
        alt: "Sakura Labs Hiring Digital Marketing Intern Poster",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hiring: Digital Marketing Intern at Sakura Labs",
    description:
      "Build the future of digital marketing with Sakura Labs. Hands-on projects, real client work, and PPO opportunities.",
    images: ["/posts/post 4.png"],
  },
};

const jobPostingJsonLd = {
  "@context": "https://schema.org",
  "@type": "JobPosting",
  title: "Digital Marketing Intern",
  description:
    "Sakura Labs is hiring a Digital Marketing Intern to brainstorm, script, and design viral content for Instagram, YouTube, and LinkedIn; monitor and scale performance ads across Meta & Google Ads; and produce high-impact marketing assets using Canva, CapCut, and Figma.",
  identifier: {
    "@type": "PropertyValue",
    name: "Sakura Labs",
    value: "SL-JOB-DMI-2026",
  },
  datePosted: "2026-10-09",
  validThrough: "2026-12-31",
  employmentType: "INTERN",
  hiringOrganization: {
    "@type": "Organization",
    name: "Sakura Labs",
    sameAs: "https://sakuralabs.in",
    logo: "https://sakuralabs.in/logos/logo-main.png",
  },
  jobLocation: {
    "@type": "Place",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Malappuram",
      addressRegion: "Kerala",
      addressCountry: "IN",
    },
  },
  jobLocationType: "TELECOMMUTE",
  applicantLocationRequirements: {
    "@type": "Country",
    name: "India",
  },
  baseSalary: {
    "@type": "MonetaryAmount",
    currency: "INR",
    value: {
      "@type": "QuantitativeValue",
      minValue: 5000,
      maxValue: 15000,
      unitText: "MONTH",
    },
  },
  skills: [
    "Instagram Marketing",
    "Meta Ads",
    "Google Ads",
    "Canva",
    "CapCut",
    "Figma",
    "Google Analytics",
    "SEO & Content Strategy",
  ],
};

export default function CareersLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jobPostingJsonLd) }}
      />
      {children}
    </>
  );
}
