'use client'
import React from 'react'
import Image from "next/image";
import DotImage from '@/assets/cerebromesh_inside_dot.png'

export default function EvaluationMethodology(){
    return(
        <div className={'container mx-auto my-14'}>
            <div className={'bg-secondary-bg rounded-lg lg:p-6 py-16 px-4 space-y-10 flex flex-col justify-center items-center'}>
                <p className={'lg:text-2xl md:text-xl text-md  text-center !leading-relaxed'}>
                    In this work, our approach involved training small models and evaluating them on a set of "early-signal" benchmark tasks. This methodology served as a reasonable proxy for assessing the quality of the data utilized to train these models. However, it's crucial to acknowledge the potential caveat surrounding overfitting on the evaluation benchmarks.
<br/><br/>
                    We used this algorithm specifically for benchmarking purposes, emphasizing its role in assessing the performance and quality of the trained models.
                </p>
                <Image src={DotImage} alt={'Dot Image'} width={70} height={70}/>
            </div>
        </div>
    )
}
