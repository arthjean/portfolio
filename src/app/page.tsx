import type { Metadata } from "next";
import {
  BiographySection,
  FooterSection,
  HeroSection,
  NavbarSection,
  ProjectsSection,
} from "@/components";
import { getJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site.config";

// ISR configuration - revalidate every 24 hours
export const revalidate = 86400;

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  category: "technology",
  openGraph: {
    type: "website",
    locale: siteConfig.locale,
    url: siteConfig.url,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: `${siteConfig.url}${siteConfig.ogImage}`,
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: [`${siteConfig.url}${siteConfig.ogImage}`],
  },
  alternates: {
    canonical: "/",
    types: {
      "text/plain": "/llms.txt",
    },
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
};

export default function Home() {
  const jsonLd = getJsonLd();

  return (
    <>
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD from static siteConfig, output is JSON.stringify'd and <-escaped
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd.graph).replace(/</g, "\\u003c"),
        }}
      />
      <NavbarSection />

      <main
        id="main-content"
        tabIndex={-1}
        className="min-h-screen outline-none"
      >
        <HeroSection />
        <BiographySection />
        <ProjectsSection />
        <FooterSection />
      </main>
    </>
  );
}
