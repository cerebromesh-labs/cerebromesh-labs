'use client'

import React from 'react'
import { motion } from 'framer-motion';
import SectionHeader from "@/components/home/SectionHeader";
import {useInView} from "react-intersection-observer";

/**
 * GoodDataComp component
 *
 * This component displays information about understanding good data
 * in the context of training large-scale models.
 */
const GoodDataComp: React.FC = () => {

  const description = 'Good data" is pivotal for training large-scale models, yet its quality can be ambiguous and context-specific. Human evaluation may miss subtle flaws. An effective approach involves training models on trusted datasets and evaluating new data with metrics like perplexity. This method ensures data reliability for algorithm training.';

  return (
    <div className='container mx-auto py-8'>
      <div className='bg-secondary-bg rounded-lg lg:p-6 py-16 px-4'>
        <SectionHeader
          title="Understanding Good Data"
          description={description}
        />
      </div>
    </div>
  )
}

export default GoodDataComp;
