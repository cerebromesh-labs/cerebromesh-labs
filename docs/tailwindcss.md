# Tailwind CSS in CerebroMesh Labs

This document provides a comprehensive guide on how Tailwind CSS is set up and used in the CerebroMesh Labs project.

## Table of Contents

- [Configuration](#configuration)
- [Custom Theme](#custom-theme)
- [Using Tailwind CSS](#using-tailwind-css)
- [Best Practices](#best-practices)
- [Customization](#customization)
- [Plugins](#plugins)
- [Responsive Design](#responsive-design)
- [Dark Mode](#dark-mode)

## Configuration

Tailwind CSS is configured in the `tailwind.config.js` file at the root of the project. Here's an overview of the current configuration:

```javascript
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Sora: ["var(--font-sora)", "sans-serif"],
        SourceCodePro: ["var(--font-source-code-pro)", "monospace"],
        Inter: ["var(--font-inter)", "sans-serif"],
      },
      colors: {
        "main-bg": "#1B1B1B",
        "secondary-bg": "#222328",
        'light-blue-bg': '#464D69',
        'dark-blue-bg': '#1D2336',
        'primary': '#8CA6FF'
      }
    }
  },
  plugins: [],
};

export default config;
```

This configuration sets up the content sources, custom theme extensions, and any plugins used in the project.

## Custom Theme

CerebroMesh Labs extends the default Tailwind theme with custom colors and font families:

### Colors

- `main-bg`: #1B1B1B
- `secondary-bg`: #222328
- `light-blue-bg`: #464D69
- `dark-blue-bg`: #1D2336
- `primary`: #8CA6FF

### Font Families

- `Sora`: Primary font
- `SourceCodePro`: Monospace font for code snippets
- `Inter`: Secondary font

## Using Tailwind CSS

Tailwind CSS classes can be used directly in your JSX to style components. Here are some examples:

```jsx
// Basic usage
<div className="bg-main-bg text-white p-4">
  <h1 className="text-2xl font-Sora font-bold">Welcome to CerebroMesh Labs</h1>
  <p className="mt-2 font-Inter">Innovative AI solutions for data processing.</p>
</div>

// Using custom colors
<button className="bg-primary hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
  Click me
</button>

// Responsive design
<div className="w-full md:w-1/2 lg:w-1/3">
  {/* Content */}
</div>
```

## Best Practices

1. **Use Tailwind's utility classes**: Prefer Tailwind's utility classes over custom CSS when possible.
2. **Group related classes**: Use consistent ordering of classes for better readability.
3. **Extract components**: For repeating patterns, create reusable React components.
4. **Use @apply for complex styles**: In cases where you need to write custom CSS, use `@apply` to leverage Tailwind's utilities.

## Customization

To add new custom styles or modify existing ones:

1. Extend the theme in `tailwind.config.js`:

   ```javascript
   theme: {
     extend: {
       // Add new colors, fonts, etc. here
     }
   }
   ```

2. Use custom classes in your components:

   ```jsx
   <div className="text-custom-color">Custom styled text</div>
   ```

## Plugins

Currently, no additional Tailwind plugins are used in the project. To add a plugin:

1. Install the plugin: `npm install @tailwindcss/forms`
2. Add it to the `plugins` array in `tailwind.config.js`:

   ```javascript
   plugins: [
     require('@tailwindcss/forms'),
     // other plugins...
   ],
   ```

## Responsive Design

Tailwind provides responsive variants that can be used to apply different styles at different breakpoints:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

Example:

```jsx
<div className="text-sm md:text-base lg:text-lg">
  Responsive text size
</div>
```

## Dark Mode

Tailwind CSS supports dark mode out of the box. To enable it:

1. Add `darkMode: 'class'` to your `tailwind.config.js`.
2. Use dark mode variants in your components:

   ```jsx
   <div className="bg-white dark:bg-gray-800 text-black dark:text-white">
     This div adapts to dark mode
   </div>
   ```

3. Toggle the `dark` class on the `<html>` element to switch between modes.

By following these guidelines and utilizing Tailwind CSS effectively, you can maintain consistent, responsive, and easily maintainable styles throughout the CerebroMesh Labs project.