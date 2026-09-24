import { GeistMono } from "geist/font/mono";
import { GeistSans } from "geist/font/sans";
import type { Metadata, Viewport } from "next";
import { Instrument_Serif, Petemoss } from "next/font/google";

import { siteConfig } from "@/lib/site.config";

import "./globals.css";
import { Providers } from "./providers";

// Only the italic is ever set: one accent word in running text.
const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: "italic",
  display: "swap",
});

const petemoss = Petemoss({
  variable: "--font-petemoss",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: siteConfig.title,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#fcfcfc" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0f0f" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // The font variables live on the root so the theme's font stacks, which
    // are declared on `:root`, can resolve them.
    <html
      lang={siteConfig.language}
      suppressHydrationWarning
      className={`${GeistSans.variable} ${GeistMono.variable} ${instrumentSerif.variable} ${petemoss.variable}`}
    >
      <head>
        {/* Prevent flash of wrong theme */}
        <script
          // oxlint-disable-next-line react/no-danger -- inline script for theme flash prevention
          dangerouslySetInnerHTML={{
            __html: `try{if(localStorage.getItem('theme')==='dark')document.documentElement.classList.add('dark')}catch(e){}`,
          }}
        />
        {/* Mastodon profile verification (rel=me, IndieWeb-style). Lets
            mastodon.social tick the Portfolio field green on @arthurjdev. */}
        <link rel="me" href={siteConfig.links.mastodon} />
      </head>
      <body className="antialiased">
        <a
          href="#main-content"
          className="bg-fg text-canvas sr-only rounded-full px-4 py-2 text-sm font-medium focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50"
        >
          Skip to main content
        </a>

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
