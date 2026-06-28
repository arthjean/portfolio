import {
  FooterSection,
  HeroSection,
  NavbarSection,
  ProjectsSection,
} from "@/components";
import { getJsonLd } from "@/lib/json-ld";
import { siteConfig } from "@/lib/site.config";

// ISR configuration - revalidate every 24 hours
export const revalidate = 86400;

// SEO metadata
export const metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  openGraph: {
    type: "website",
    locale: "en_US",
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
      {/* Structured JSON-LD data */}
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD from static siteConfig, output is JSON.stringify'd + <-escaped
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd.person).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD from static siteConfig, output is JSON.stringify'd + <-escaped
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd.website).replace(/</g, "\\u003c"),
        }}
      />
      <NavbarSection />

      <main
        id="main-content"
        tabIndex={-1}
        className="min-h-screen outline-none"
      >
        <HeroSection />
        <ProjectsSection />
        <FooterSection />
      </main>
    </>
  );
}
