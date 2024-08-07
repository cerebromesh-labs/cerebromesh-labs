'use client'

import React from 'react'
import SectionHeader from "@/components/home/SectionHeader";
import {useInView} from "react-intersection-observer";
import {motion,easeInOut} from "framer-motion";


/**
 * BaseFilteringAlgorithm component
 *
 * This component displays information about the base filtering algorithm
 * used in the data preparation process.
 */
const BaseFilteringAlgorithm: React.FC = () => {
  const description = `Filtering refines datasets by removing harmful content and improving quality. Key steps include:
    <li>URL Filtering: Block unwanted content (e.g., adult material).</li>
    <li>Language Classification: Retain text in the desired language with quality thresholds.</li>
    <li>Quality and Repetition Filters: Eliminate low-quality and repetitive content.</li>
    This process ensures a higher-quality dataset for model training.`;

  return (
    <div className={'container mx-auto py-8'}>
      <div className={'bg-secondary-bg rounded-lg lg:p-6 py-16 px-4 space-y-10'}>
        <SectionHeader
          title="Base Filtering Algorithm"
          description={description}
        />
      </div>
    </div>
  );
}

export default BaseFilteringAlgorithm;
