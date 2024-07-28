markdown
# Usage Guide for CerebroMesh Labs

This document provides detailed instructions on how to use various features of the CerebroMesh Labs project, built with Next.js 14 (App Router), Tailwind CSS, and Framer Motion.

## Table of Contents

- [Running the Project](#running-the-project)
- [Project Structure](#project-structure)
- [Using Tailwind CSS](#using-tailwind-css)
- [Working with Components](#working-with-components)
- [Using Framer Motion](#using-framer-motion)
- [Data Visualization with Chart.js](#data-visualization-with-chartjs)
- [Using Swiper for Sliders](#using-swiper-for-sliders)
- [Global Styles](#global-styles)
- [Deployment](#deployment)

## Running the Project

To get started with CerebroMesh Labs, ensure you have Node.js and npm (or yarn) installed on your machine. Follow these steps to run the project locally:

1. **Install Dependencies**

   Navigate to the project directory and install the dependencies:

   ```sh
   npm install
   # or
   yarn install
   ```

2. **Run the Development Server**

   Start the development server:

   ```sh
   npm run dev
   # or
   yarn dev
   ```

   Open your browser and visit `http://localhost:3000` to view the application.

## Project Structure

The CerebroMesh Labs project follows this structure:

```plaintext
.
├── src
│   ├── app                 # Application core files (App Router)
│   │   ├── api             # API routes
│   │   ├── (routes)        # Page routes
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Home page
│   ├── components          # Reusable UI components
│   ├── lib                 # Library functions and constants
│   ├── styles              # Global styles
│   └── utils               # Utility functions
├── public                  # Static assets
└── README.md
```

## Using Tailwind CSS

Tailwind CSS is integrated into the project for rapid UI development. Here's an example of how to use Tailwind classes:

```jsx
export default function ExampleComponent() {
  return (
    <div className="p-4 bg-secondary-bg rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-white">Welcome to CerebroMesh Labs</h1>
      <p className="mt-2 text-gray-300">Leveraging AI for advanced data processing.</p>
    </div>
  );
}
```

## Working with Components

Create reusable components in the `src/components` directory. Here's an example of a button component:

```jsx
// src/components/Button.tsx
export default function Button({ children, onClick }) {
  return (
    <button 
      className="px-4 py-2 bg-primary text-white rounded hover:bg-blue-700 transition-colors"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
```

## Using Framer Motion

Framer Motion is used for animations. Here's an example of a simple animation:

```jsx
import { motion } from 'framer-motion';

export default function AnimatedComponent() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="p-4 bg-light-blue-bg rounded-lg"
    >
      <h2 className="text-white">Animated Content</h2>
    </motion.div>
  );
}
```

## Data Visualization with Chart.js

Use Chart.js and react-chartjs-2 for data visualization. Here's a basic example:

```jsx
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function BarChart({ data }) {
  return <Bar data={data} />;
}
```

## Using Swiper for Sliders

Implement sliders using Swiper. Here's a basic example:

```jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function Slider({ items }) {
  return (
    <Swiper spaceBetween={50} slidesPerView={3}>
      {items.map((item, index) => (
        <SwiperSlide key={index}>{item}</SwiperSlide>
      ))}
    </Swiper>
  );
}
```

## Global Styles

Global styles are defined in `src/styles/globals.css`. This file includes Tailwind directives:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Custom global styles go here */
```

## Deployment

To deploy CerebroMesh Labs:

1. Push your code to a Git repository.
2. Sign up or log in to [Vercel](https://vercel.com/).
3. Import your project from the Git repository.
4. Follow the prompts to deploy.

Vercel will automatically detect the Next.js configuration and handle the build and deployment process.

For more detailed deployment instructions, refer to the [Deployment Guide](deployment.md).