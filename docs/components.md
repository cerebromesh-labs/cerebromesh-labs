# Components in CerebroMesh Labs

This document provides an overview of the key components used in the CerebroMesh Labs project. It includes information on their purpose, usage, and customization options.

## Table of Contents

- [Layout Components](#layout-components)
  - [Header](#header)
  - [Footer](#footer)
- [Home Page Components](#home-page-components)
  - [GetStarted](#getstarted)
  - [GoodDataComp](#gooddatacomp)
  - [FinewebRecipe](#finewebrecipe)
  - [TextExtAlgo](#textextalgo)
  - [BaseFilteringAlgorithm](#basefilteringalgorithm)
  - [DeduplicationAlgo](#deduplicationalgo)
  - [QualityFilteringAlgo](#qualityfilteringalgo)
  - [EvaluationMethodology](#evaluationmethodology)
  - [Datasets](#datasets)
  - [Leaderboard](#leaderboard)
- [UI Components](#ui-components)
  - [Toggle](#toggle)
- [Utility Components](#utility-components)
  - [SectionHeader](#sectionheader)

## Layout Components

### Header

**File:** `src/components/layout/Header.tsx`

**Purpose:** Main navigation component for the application.

**Key Features:**
- Responsive design with mobile menu toggle
- Navigation links
- User authentication buttons

**Usage:**
```jsx
import Header from "@/components/layout/Header";

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
```

### Footer

**File:** `src/components/Footer.tsx`

**Purpose:** Provides footer information and links.

**Key Features:**
- Company logo
- Quick links
- Social media links
- Copyright information

**Usage:**
```jsx
import Footer from "@/components/Footer";

function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <Footer />
    </>
  );
}
```

## Home Page Components

### GetStarted

**File:** `src/components/home/GetStarted.tsx`

**Purpose:** Hero section for the home page.

**Key Features:**
- Animated background
- Main headline and description
- Call-to-action button

### GoodDataComp

**File:** `src/components/home/GoodData.tsx`

**Purpose:** Explains the concept of good data in AI training.

**Key Features:**
- Animated content reveal
- Information about data quality

### FinewebRecipe

**File:** `src/components/home/FinewebRecipe.tsx`

**Purpose:** Displays the steps in the FineWeb data preparation algorithm.

**Key Features:**
- Step-by-step process visualization
- Animated content reveal

### TextExtAlgo

**File:** `src/components/home/TextExtAlgo.tsx`

**Purpose:** Visualizes the text extraction algorithm performance.

**Key Features:**
- Line chart using Chart.js
- Performance data visualization

### BaseFilteringAlgorithm

**File:** `src/components/home/BaseFilteringAlogrithm.tsx`

**Purpose:** Explains the base filtering algorithm.

**Key Features:**
- Description of filtering steps
- Key points about the algorithm

### DeduplicationAlgo

**File:** `src/components/home/DeduplicationAlgo.tsx`

**Purpose:** Visualizes the deduplication algorithm performance.

**Key Features:**
- Bar chart using Chart.js
- Explanation of deduplication process

### QualityFilteringAlgo

**File:** `src/components/home/QualityFilteringAlgo.tsx`

**Purpose:** Describes additional quality filtering algorithms.

**Key Features:**
- Detailed explanation of quality filtering steps

### EvaluationMethodology

**File:** `src/components/home/EvaluationMethodology.tsx`

**Purpose:** Explains the evaluation methodology for the project.

**Key Features:**
- Description of evaluation process
- Animated content reveal

### Datasets

**File:** `src/components/home/Datasets.tsx`

**Purpose:** Showcases available AI training datasets.

**Key Features:**
- Slider component using Swiper
- Dataset cards with descriptions

### Leaderboard

**File:** `src/components/home/Leaderboard.tsx`

**Purpose:** Displays the performance leaderboard for miners.

**Key Features:**
- Tabular data display
- Pagination
- Performance visualization using Bubble chart

## UI Components

### Toggle

**File:** `src/components/ui/Toggle.tsx`

**Purpose:** Reusable toggle button component, primarily used for mobile menu.

**Key Features:**
- Animated toggle effect
- Customizable styling

**Usage:**
```jsx
import Toggle from "@/components/ui/Toggle";

function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  return <Toggle clicked={isOpen} onClick={() => setIsOpen(!isOpen)} />;
}
```

## Utility Components

### SectionHeader

**File:** `src/components/home/SectionHeader.tsx`

**Purpose:** Consistent header component for different sections.

**Key Features:**
- Title and description layout
- Animated content reveal

**Usage:**
```jsx
import SectionHeader from "@/components/home/SectionHeader";

function Section() {
  return (
    <SectionHeader
      title="Section Title"
      description="This is the section description."
    />
  );
}
```

## Best Practices for Component Development

1. **Modularity:** Keep components focused on a single responsibility.
2. **Reusability:** Design components to be reusable across different parts of the application.
3. **Props:** Use TypeScript for prop type definitions to ensure type safety.
4. **Styling:** Utilize Tailwind CSS classes for styling, keeping components consistent with the overall design system.
5. **Performance:** Optimize components for performance, using React.memo or useMemo when appropriate.
6. **Accessibility:** Ensure components are accessible, following WCAG guidelines.
7. **Testing:** Write unit tests for components to ensure reliability and ease of maintenance.

By following these guidelines and utilizing the components effectively, you can maintain a consistent, efficient, and scalable architecture for the CerebroMesh Labs project.