import type { Metadata, Viewport } from "next";
import { sora, sourceCodePro, inter } from "@/styles/fonts";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cerebromeshlabs.vercel.app"),
  title: "CerebroMesh Labs",
  description: "Cerebromesh Labs provides high-quality, curated datasets to enhance your AI training. Unlock your AI's potential with our expert data.",
  openGraph: {
    title: "CerebroMesh Labs",
    description: "Cerebromesh Labs provides high-quality, curated datasets to enhance your AI training. Unlock your AI's potential with our expert data.",
    type: "website",
    locale: "en_US",
    url: new URL("/", "https://cerebromeshlabs.vercel.app"),
    images: [
      {
        url: "https://cerebromeshlabs.vercel.app/og-image.png",
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
        url: "https://cerebromeshlabs.vercel.app/og-image.png",
        alt: "CerebroMesh Labs Twitter Card Image"
      }
    ]
  },
};

export const viewport: Viewport = {
  themeColor: '#AC6AFF', // Theme color for the website
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} 
                        ${sourceCodePro.variable}
                        ${inter.variable} min-h-[100vh] h-full bg-main-bg text-white`}>
        {children}
      </body>
    </html>
  );
}
