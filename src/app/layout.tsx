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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={plexMono.className}>{children}</body>
    </html>
  );
}
