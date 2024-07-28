# Fonts in CerebroMesh Labs

This document explains how to use and manage custom fonts in the CerebroMesh Labs project. We use a combination of Google Fonts and local fonts to achieve the desired typography throughout the application.

## Table of Contents

- [Font Setup](#font-setup)
- [Using Fonts in the Project](#using-fonts-in-the-project)
- [Adding New Fonts](#adding-new-fonts)
- [Font Optimization](#font-optimization)

## Font Setup

CerebroMesh Labs uses Next.js 14's built-in font optimization features to load and apply custom fonts efficiently. The fonts are set up in the `src/styles/fonts.ts` file.

### Current Font Configuration

```typescript
// src/styles/fonts.ts
import { Sora, Source_Code_Pro, Inter } from "next/font/google";

const sora = Sora({ subsets: ["latin"], variable: "--font-sora" });
const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], variable: "--font-source-code-pro" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export { sora, sourceCodePro, inter };
```

This configuration imports three Google Fonts: Sora, Source Code Pro, and Inter. Each font is assigned a CSS variable that can be used throughout the project.

## Using Fonts in the Project

### 1. Applying Fonts Globally

The fonts are applied globally in the root layout file (`src/app/layout.tsx`):

```tsx
import { sora, sourceCodePro, inter } from "@/styles/fonts";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${sora.variable} ${sourceCodePro.variable} ${inter.variable}`}>
        {children}
      </body>
    </html>
  );
}
```

### 2. Using Fonts with Tailwind CSS

The fonts are configured in the Tailwind CSS configuration file (`tailwind.config.js`) to be easily used with utility classes:

```javascript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        Sora: ["var(--font-sora)", "sans-serif"],
        SourceCodePro: ["var(--font-source-code-pro)", "monospace"],
        Inter: ["var(--font-inter)", "sans-serif"],
      },
    },
  },
  // ... other configurations
};
```

### 3. Applying Fonts in Components

You can now use these fonts in your components using Tailwind CSS classes:

```jsx
<h1 className="font-Sora text-2xl">Welcome to CerebroMesh Labs</h1>
<p className="font-Inter">This is a paragraph using the Inter font.</p>
<code className="font-SourceCodePro">console.log("Hello, World!");</code>
```

## Adding New Fonts

To add a new font to the project:

1. Import the font in `src/styles/fonts.ts`:

   ```typescript
   import { NewFont } from "next/font/google";

   const newFont = NewFont({ subsets: ["latin"], variable: "--font-new-font" });

   export { newFont };
   ```

2. Add the font to the global layout in `src/app/layout.tsx`.

3. Update the Tailwind configuration in `tailwind.config.js`:

   ```javascript
   fontFamily: {
     // ... existing fonts
     NewFont: ["var(--font-new-font)", "sans-serif"],
   },
   ```

4. Use the new font in your components:

   ```jsx
   <div className="font-NewFont">Text using the new font</div>
   ```

## Font Optimization

Next.js automatically optimizes fonts when using the `next/font` module:

- Fonts are downloaded at build time and self-hosted with other static assets.
- Font files are preloaded and preconnected automatically.
- No layout shift as Next.js inlines font CSS at build time.

These optimizations ensure that custom fonts do not impact performance negatively.

## Best Practices

1. **Limit Font Variations**: Use a limited number of font weights and styles to keep the bundle size small.
2. **Use Variable Fonts**: When possible, use variable fonts for more flexibility with fewer file loads.
3. **Fallback Fonts**: Always provide appropriate fallback fonts in your font stacks.
4. **Font Subsetting**: Use font subsetting to include only the characters you need, reducing file size.

By following these guidelines, you can maintain consistent typography across the CerebroMesh Labs project while ensuring optimal performance.
