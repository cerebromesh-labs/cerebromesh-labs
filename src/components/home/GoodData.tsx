import React from 'react'
import DotImage from '@/assets/cerebromesh_inside_dot.png'
import Image from "next/image";
import SectionHeader from "@/components/home/SectionHeader";

export default function GoodDataComp(){
    return (
        <div className={'container mx-auto my-14'}>
            <div className={'bg-secondary-bg rounded-lg lg:p-6 py-16 px-4'}>
                <SectionHeader title={"Understanding Good Data"} description={'Good data" is pivotal for training large-scale models, yet its quality can be ambiguous and context-specific. Human evaluation may miss subtle flaws. An effective approach involves training models on trusted datasets and evaluating new data with metrics like perplexity. This method ensures data reliability for algorithm training. '}/>
            </div>
        </div>
    )
}
