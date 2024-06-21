import { Sora, Source_Code_Pro, Inter } from "next/font/google";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], variable: "--font-source-code-pro" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export { sora, sourceCodePro, inter };