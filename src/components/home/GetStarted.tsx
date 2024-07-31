'use client'

import React from 'react'
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { TypewriterEffect } from "../ui/TypewriterEffect";

import StarFieldGif from '@/assets/Starfield.gif'

/**
 * GetStarted component
 *
 * This component renders the hero section of the website, including a background image,
 * main heading, description, and a call-to-action button.
 */
const GetStarted: React.FC = () => {
    const words = [
        {
            text: 'Refined ',
            className: 'text-white dark:text-white lg:text-8xl md:text-7xl text-5xl font-medium '
        },
        {
            text: 'AI ',
            className: 'text-primary dark:text-primary lg:text-8xl md:text-7xl text-5xl font-medium '
        },
        {
            text: 'Datasets',
            className: 'text-white dark:text-white lg:text-8xl md:text-7xl text-5xl font-medium '
        }
    ];

    return (
    <div className="w-full h-[100vh] relative">
      <Image
        className="absolute w-full h-full -z-20"
        src={StarFieldGif}
        alt="Star Field Background"
      />
        <div className="z-20 text-white flex flex-col justify-center items-center w-full h-full gap-6 px-4">
            <h1 className="lg:text-8xl md:text-7xl text-5xl font-medium text-center text-primary">
                {/*Refined <span className="text-primary">AI</span> Datasets*/}
                <TypewriterEffect words={words} />
            </h1>
            <p className="lg:text-2xl md:text-xl text-lg max-w-screen-md text-center">
                Cerebromesh Labs provides high-quality, curated datasets to enhance your AI training.
                We use the algorithm of <a href="#" className="text-primary italic">huggingface.co</a>
            </p>
            <div className={'flex  flex-col-reverse md:flex-row gap-3'}>
                <button
                    className="bg-primary px-8 py-2 hover:opacity-80 transition-all duration-300 text-main-bg rounded-full text-lg font-semibold flex flex-row justify-center items-center gap-1">
                    Get Started
                </button>
                <button
                    className="bg-transparent px-8 py-2 rounded-full text-white text-lg font-semibold flex flex-row justify-center items-center gap-1 hover:gap-3 transition-all duration-300">
                    <span>Learn More</span> <FaArrowRightLong/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default GetStarted;
