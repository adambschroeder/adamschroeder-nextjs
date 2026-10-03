import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Adam Schroeder | Software Developer",
  description:
    "Adam Schroeder is a Minnesota-based software developer specializing in frontend, cloud and AI-assisted development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
