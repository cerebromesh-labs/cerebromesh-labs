# CerebroMesh Labs Architecture

This document provides an overview of the architecture and design decisions of the CerebroMesh Labs project, built with Next.js 14 using the App Router.

## Table of Contents

- [Project Structure](#project-structure)
- [Key Components](#key-components)
- [Routing](#routing)
- [State Management](#state-management)
- [Data Fetching](#data-fetching)
- [API Routes](#api-routes)
- [Styling](#styling)
- [Performance Optimizations](#performance-optimizations)
- [Code Organization](#code-organization)

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
├── tailwind.config.js      # Tailwind CSS configuration
├── next.config.js          # Next.js configuration
└── package.json            # Project dependencies and scripts
```

## Key Components

1. **Header**: Located in `src/components/layout/Header.tsx`, manages navigation and branding.
2. **Footer**: Found in `src/components/Footer.tsx`, contains links and copyright information.
3. **Home Page**: The main landing page in `src/app/page.tsx`.
4. **Leaderboard**: Displays miner performance in `src/components/home/Leaderboard.tsx`.
5. **DataSets**: Showcases available datasets in `src/components/home/Datasets.tsx`.

## Routing

CerebroMesh Labs uses Next.js 14's App Router for file-based routing:

- `src/app/page.tsx`: Home page
- `src/app/(routes)/`: Directory for additional routes
- `src/app/layout.tsx`: Root layout component

Dynamic routes and nested layouts can be easily added within the `app` directory.

## State Management

The project primarily uses React's built-in state management with hooks:

- `useState` for component-level state
- `useContext` for sharing state across components when needed

For more complex state management needs, consider implementing Redux or Zustand.

## Data Fetching

Data fetching is handled using Next.js data fetching methods:

- Server Components for server-side rendering
- `useEffect` for client-side data fetching when necessary

Example of server-side data fetching:

```jsx
// In a Server Component
async function getData() {
  const res = await fetch('https://api.example.com/data')
  return res.json()
}

export default async function Page() {
  const data = await getData()
  return <main>{/* Use data */}</main>
}
```

## API Routes

API routes are located in `src/app/api/`. These serverless functions handle backend logic and external API interactions.

Example API route:

```typescript
// src/app/api/revalidate/route.ts
import { NextResponse } from 'next/server';
import { getPosts } from '@/utils/apis';

export async function GET() {
  try {
    const posts = await getPosts();
    return NextResponse.json({ posts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch posts' }, { status: 500 });
  }
}
```

## Styling

CerebroMesh Labs uses a combination of Tailwind CSS and CSS Modules for styling:

- Tailwind CSS for utility-first styling
- CSS Modules for component-specific styles when needed

Global styles are defined in `src/styles/globals.css`.

## Performance Optimizations

1. **Image Optimization**: Using Next.js `Image` component for automatic image optimization.
2. **Font Optimization**: Leveraging `next/font` for efficient font loading and application.
3. **Code Splitting**: Automatic code splitting provided by Next.js.
4. **Lazy Loading**: Using dynamic imports for components that are not immediately needed.

## Code Organization

- **Components**: Reusable UI components are stored in `src/components/`.
- **Utilities**: Helper functions are kept in `src/utils/`.
- **Constants**: Application-wide constants are defined in `src/lib/constants.ts`.
- **Types**: TypeScript types and interfaces are defined close to where they're used or in a separate `types` directory if widely used.

## Best Practices

1. **Server Components**: Utilize Server Components for data fetching and rendering static content.
2. **Client Components**: Use Client Components for interactive elements that require client-side JavaScript.
3. **Modularity**: Keep components small and focused on a single responsibility.
4. **TypeScript**: Leverage TypeScript for type safety and better developer experience.
5. **Testing**: Implement unit tests for utilities and components using Jest and React Testing Library.

By following this architecture, CerebroMesh Labs maintains a scalable, performant, and maintainable codebase. The use of Next.js 14 with the App Router provides a solid foundation for server-side rendering, API routes, and optimized client-side navigation.