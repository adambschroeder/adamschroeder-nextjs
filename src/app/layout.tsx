import type { Metadata } from "next";
import { IBM_Plex_Mono } from "next/font/google";
import { siteUrl } from "@/src/data/site";
import "./globals.css";

const plexMono = IBM_Plex_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
});

const title = "Adam Schroeder | Software Developer";
const description =
  "Adam Schroeder is a Minnesota-based software developer specializing in frontend, cloud and AI-assisted development.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  alternates: { canonical: "/" },
  openGraph: {
    title,
    description,
    url: "/",
    siteName: "Adam Schroeder",
    type: "website",
    images: [
      {
        url: "/headshot2.jpg",
        width: 1835,
        height: 1834,
        alt: "Adam Schroeder headshot",
      },
    ],
  },
  twitter: {
    card: "summary",
    title,
    description,
    images: ["/headshot2.jpg"],
  },
};

// schema.org Person structured data so search engines can link this site to my other profiles
const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Adam Schroeder",
  jobTitle: "Software Developer",
  description,
  url: siteUrl,
  image: `${siteUrl}/headshot2.jpg`,
  address: {
    "@type": "PostalAddress",
    addressRegion: "MN",
    addressCountry: "US",
  },
  sameAs: [
    "https://www.linkedin.com/in/adam-schroeder/",
    "https://ramblinfool.com/",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plexMono.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personJsonLd).replace(/</g, "\\u003c"),
          }}
        />
        {children}
      </body>
    </html>
  );
}
