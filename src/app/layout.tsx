import type { Metadata, Viewport } from "next";
import { sora, sourceCodePro, inter } from "@/styles/fonts";
import "@/styles/globals.css";

// Metadata for the application
export const metadata: Metadata = {
  metadataBase: new URL("https://cerebromesh-labs.vercel.app"),
  title: "CerebroMesh Labs",
  description: "Cerebromesh Labs provides high-quality, curated datasets to enhance your AI training. Unlock your AI's potential with our expert data.",
  openGraph: {
    title: "CerebroMesh Labs",
    description: "Cerebromesh Labs provides high-quality, curated datasets to enhance your AI training. Unlock your AI's potential with our expert data.",
    type: "website",
    locale: "en_US",
    url: new URL("/", "https://cerebromesh-labs.vercel.app"),
    images: [
      {
        url: "https://cerebromesh-labs.vercel.app/og-image.gif",
        width: 1784,
        height: 892,
        alt: "CerebroMesh Labs Open Graph Image"
      }
    ]
  },
  twitter: {
    creator: "@CerebromeshLabs",
    site: "@CerebromeshLabs",
    card: "summary_large_image",
    images: [
      {
        url: "https://cerebromesh-labs.vercel.app/og-image.gif",
        alt: "CerebroMesh Labs Twitter Card Image"
      }
    ]
  },
};

// Viewport configuration
export const viewport: Viewport = {
  themeColor: '#8ca4fb', // Theme color for the website
}

// Root layout component
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`
        ${sora.variable} 
        ${sourceCodePro.variable}
        ${inter.variable} 
        min-h-screen 
        bg-main-bg 
        text-white
      `}>
        {children}
      </body>
    </html>
  );
}