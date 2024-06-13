import { Sora, Source_Code_Pro } from "next/font/google";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], variable: "--font-source-code-pro" });

export { sora, sourceCodePro };