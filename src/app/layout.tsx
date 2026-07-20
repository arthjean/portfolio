import { GeistMono } from "geist/font/mono";
import { GeistPixelCircle, GeistPixelGrid } from "geist/font/pixel";
import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";
import { Hanken_Grotesk } from "next/font/google";
import { siteConfig } from "@/lib/site.config";
import "./globals.css";
import { Providers } from "./providers";

const hankenGrotesk = Hanken_Grotesk({
  variable: "--font-hanken-grotesk",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f1ebe8" },
    { media: "(prefers-color-scheme: dark)", color: "#0c173f" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={siteConfig.language} suppressHydrationWarning>
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          // biome-ignore lint/security/noDangerouslySetInnerHtml: inline script for theme flash prevention
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}`,
          }}
        />
        {/* Mastodon profile verification (rel=me, IndieWeb-style). Lets
            mastodon.social tick the Portfolio field green on @arthurjdev. */}
        <link rel="me" href="https://mastodon.social/@arthurjdev" />
      </head>
      <body
        className={`${GeistSans.variable} ${GeistMono.variable} ${GeistPixelGrid.variable} ${GeistPixelCircle.variable} ${hankenGrotesk.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
        >
          Skip to main content
        </a>

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
