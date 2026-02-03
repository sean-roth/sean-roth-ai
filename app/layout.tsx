import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sean Roth | AI Engineer",
  description: "AI engineer and technical consultant. Chat with Claude about my work and experience.",
  openGraph: {
    title: "Sean Roth | AI Engineer",
    description: "AI engineer and technical consultant. Chat with Claude about my work and experience.",
    type: "website",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Sean Roth",
  jobTitle: "AI Engineer",
  description:
    "I build practical AI applications — tools that ship and solve real problems, not research projects or demos. My path here is non-linear: screenwriting MA, 8,500+ ESL classes taught, now shipping products with computer vision and LLMs.",
  url: "https://seanroth.ai",
  sameAs: ["https://github.com/sean-roth"],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Denver",
    addressRegion: "CO",
    addressCountry: "US",
  },
  knowsAbout: [
    "Agent Systems",
    "MCP Protocol",
    "Large Language Models",
    "Prompt Engineering",
    "RAG Patterns",
    "Full-Stack Development",
    "Python",
    "TypeScript",
    "React",
    "Laravel",
    "Computer Vision",
    "SAM",
    "Image Segmentation",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
