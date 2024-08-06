'use client'

import React from 'react'
import Image from "next/image";
import {easeInOut, motion} from "framer-motion";
import DotImage from '@/assets/cerebromesh_inside_dot.png'
import {useInView} from "react-intersection-observer";

/**
 * EvaluationMethodology component
 *
 * This component displays information about the evaluation methodology
 * used in the project, including the approach to training small models
 * and assessing data quality.
 */
const EvaluationMethodology: React.FC = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const [subRef, subInView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const fadeIn = {
    initial: { opacity: 0,y:50 },
    animate: { opacity: inView ? 1 : 0, y: inView ? 0 : 50},
    transition: { duration: 1.5, easeInOut  },
  };

  const subFadeIn = {
    initial: { opacity: 0, y: 20},
    animate: { opacity: subInView ? 1 : 0,  y: subInView ? 0 : 20},
    transition: { duration: 1.5, easeInOut  },
  };

  const description = `In this work, our approach involved training small models and evaluating them on a set of "early-signal" benchmark tasks. This methodology served as a reasonable proxy for assessing the quality of the data utilized to train these models. However, it's crucial to acknowledge the potential caveat surrounding overfitting on the evaluation benchmarks.
    <br/><br/>
    We used this algorithm specifically for benchmarking purposes, emphasizing its role in assessing the performance and quality of the trained models.`;

  return (
    <div className='container mx-auto py-8'>
      <motion.div ref={ref} {...fadeIn} className='bg-secondary-bg rounded-lg lg:p-6 py-16 px-4 space-y-10 flex flex-col justify-center items-center'>
        <motion.p
            ref={subRef}
            {...subFadeIn}
          className='lg:text-2xl md:text-xl text-md text-center !leading-relaxed'
          dangerouslySetInnerHTML={{ __html: description }}
        />
        <motion.div
            {...subFadeIn}
        >
          <Image src={DotImage} alt='Dot Image' width={70} height={70} />
        </motion.div>
      </motion.div>
    </div>
  )
}

export default EvaluationMethodology;
