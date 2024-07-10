'use client'
import React from 'react'
import SectionHeader from "@/components/home/SectionHeader";

export default function BaseFilteringAlgorithm() {
    return (
        <div className={'container mx-auto my-14'}>
            <div className={'bg-secondary-bg rounded-lg lg:p-6 py-16 px-4 space-y-10'}>
                <SectionHeader title={"Base Filtering Algorithm"} description={"Filtering refines datasets by removing harmful content and improving quality. Key steps include:\n" +
                    "<li>URL Filtering: Block unwanted content (e.g., adult material).</li>\n" +
                    "<li>Language Classification: Retain text in the desired language with quality thresholds.</li>\n" +
                    "<li>Quality and Repetition Filters: Eliminate low-quality and repetitive content.</li>\n" +
                    "This process ensures a higher-quality dataset for model training."}/>
            </div>
        </div>

    )
}
