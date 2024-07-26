'use client'

import React from 'react'


import StarFieldGif from '@/assets/Starfield.gif'
import Image from "next/image";
import { FaChevronRight } from "react-icons/fa";


export default function GetStarted() {
    return (
        <div className={'w-full h-[100vh] relative'}>
            <Image className={'absolute w-full h-full -z-20'} src={StarFieldGif} alt={'Star Field Gif'}/>
            <div className={'z-20 text-white flex flex-col justify-center items-center w-full h-full gap-6 px-4'}>
                <h1 className={'lg:text-8xl md:text-7xl text-5xl font-medium text-center'}>Refined <span className={'text-primary'}>AI</span> Datasets</h1>
                <p className={'lg:text-2xl md:text-xl text-lg italic max-w-screen-md text-center '}>Cerebromesh Labs provides high-quality, curated datasets to enhance your AI training. We use the algorithm of <a href={'#'} className={'text-primary'}>huggingface.co</a></p>
                <button  className={'bg-primary px-8 py-2 text-main-bg rounded-md text-lg font-semibold flex flex-row justify-center items-center gap-1'}>Get Started <FaChevronRight/></button>
            </div>
        </div>
    )
}
