'use client'
import React from 'react'
import SectionHeader from "@/components/home/SectionHeader";

export default function QualityFilteringAlgo() {
    return (
        <div className={'container mx-auto my-14'}>
            <div className={'bg-secondary-bg rounded-lg lg:p-6 py-16 px-4 space-y-10'}>
                <SectionHeader title={"Additional Quality Filtering Algorithm"} description={"To enhance performance beyond initial filtering, the approach included:\n" +
                    "<ol><li>Benchmark Analysis: Study characteristics and benchmarks of datasets like C4.</li>\n" +
                    "<li>New Filtering Steps: Investigate additional filters to improve quality.</li>\n" +
                    "<li>Refinement: Incorporate effective methods from benchmark datasets.</li>\n" +
                    "<li>Iterative Optimization: Continuously refine the filtering process to exceed benchmark performance.</li></ol>\n" +
                    "This iterative approach aims to surpass existing dataset quality and performance."}/>
            </div>
        </div>

    )
}
