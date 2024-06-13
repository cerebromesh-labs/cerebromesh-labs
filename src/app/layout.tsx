import type { Metadata } from "next";
import { sora, sourceCodePro } from "@/styles/fonts";
import "@/styles/globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${sourceCodePro.variable}`}>
        {children}
      </body>
    </html>
  );
}
