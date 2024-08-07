'use client'

import React from 'react'
import SectionHeader from "@/components/home/SectionHeader";
import {useInView} from "react-intersection-observer";
import {motion,easeInOut} from "framer-motion";

/**
 * QualityFilteringAlgo component
 *
 * This component displays information about the additional quality filtering algorithm
 * used in the data preparation process.
 */
const QualityFilteringAlgo: React.FC = () => {
  const description = `To enhance performance beyond initial filtering, the approach included:
    <ol>
      <li>Benchmark Analysis: Study characteristics and benchmarks of datasets like C4.</li>
      <li>New Filtering Steps: Investigate additional filters to improve quality.</li>
      <li>Refinement: Incorporate effective methods from benchmark datasets.</li>
      <li>Iterative Optimization: Continuously refine the filtering process to exceed benchmark performance.</li>
    </ol>
    This iterative approach aims to surpass existing dataset quality and performance.`;

  return (
    <div className="container mx-auto py-8">
      <div  className="bg-secondary-bg rounded-lg lg:p-6 py-16 px-4 space-y-10">
        <SectionHeader
          title="Additional Quality Filtering Algorithm"
          description={description}
        />
      </div>
    </div>
  )
}

export default QualityFilteringAlgo;
