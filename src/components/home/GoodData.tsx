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
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const fadeIn = {
    initial: { opacity: 0,y:50 },
    animate: { opacity: inView ? 1:0,y:inView ? 0:50},
    transition: { duration: 1.5, ease: "easeInOut" }
  };


  const description = 'Good data" is pivotal for training large-scale models, yet its quality can be ambiguous and context-specific. Human evaluation may miss subtle flaws. An effective approach involves training models on trusted datasets and evaluating new data with metrics like perplexity. This method ensures data reliability for algorithm training.';

  return (
    <div className='container mx-auto py-8'>
      <motion.div ref={ref} {...fadeIn} className='bg-secondary-bg rounded-lg lg:p-6 py-16 px-4'>
        <SectionHeader
          title="Understanding Good Data"
          description={description}
        />
      </motion.div>
    </div>
  )
}

export default GoodDataComp;
