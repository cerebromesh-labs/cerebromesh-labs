
'use client'

import React from 'react'
import DotImage from '@/assets/cerebromesh_inside_dot.png'
import Image from "next/image";
import SectionHeader from "@/components/home/SectionHeader";

import { easeInOut, motion } from 'framer-motion';

const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: .5, easeInOut }
};

const fadeInParagraph = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { duration: 2, easeInOut, delay: 0.5 }
};

export default function GoodDataComp(){
    return (
        <div className={'container mx-auto py-8 '}>
            <motion.div {...fadeIn}  className={'bg-secondary-bg rounded-lg lg:p-6 py-16 px-4'}>
                <SectionHeader title={"Understanding Good Data"} description={'Good data" is pivotal for training large-scale models, yet its quality can be ambiguous and context-specific. Human evaluation may miss subtle flaws. An effective approach involves training models on trusted datasets and evaluating new data with metrics like perplexity. This method ensures data reliability for algorithm training. '}/>
            </motion.div>
        </div>
    )
}
