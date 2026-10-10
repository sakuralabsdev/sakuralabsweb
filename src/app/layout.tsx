import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import "./scrollbar.css";
import "./marquee.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sakura Labs | sakuralabs.in",
  description: "Sakura Labs - Official Gaming Showcase (www.sakuralabs.in)",
  keywords: ["Sakura Labs", "sakuralabs.in", "Nintendo Switch", "Gaming", "Games"],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
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
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
