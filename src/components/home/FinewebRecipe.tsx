'use client'
import React from 'react'
import SectionHeader from "@/components/home/SectionHeader";
import Image from "next/image";
import {FineWebRecipData} from "@/lib/constants";
import { easeInOut, motion } from 'framer-motion';


export default function FinewebRecipe() {

    return (
        <div className={'container mx-auto py-8'}>
            <div className={'bg-secondary-bg rounded-lg lg:p-6 py-16 px-4 space-y-10'}>
                <SectionHeader title={"The FineWeb Recipe"} description={
                    "The data preparation algorithm involves several key steps to ensure the creation of a high-quality dataset:"}/>

                <div className={'flex flex-col lg:px-40 md:px-20'}>
                    {FineWebRecipData.map((item, index) => (
                        <motion.div
                            initial={{opacity:0,translateY:50}}
                            whileInView={{opacity:1,y:0,translateY:0}}
                            transition={{ duration: 1, easeInOut, delay: .2 }}
                            className={`grid md:grid-cols-2 grid-cols-1`} key={index}>
                            <div>
                                <div
                                    className={'h-full md:w-40 w-full flex flex-col justify-center items-center md:justify-start md:items-start'}>
                                    <Image className={'mx-auto'} src={item.icon} alt={'ICON'}  />
                                    <div
                                        className={`w-[.5px] my-4 h-10 bg-gray-400 mx-auto hidden ${FineWebRecipData.length == index + 1 ? "hidden":"md:block"}`}/>
                                </div>
                            </div>
                            <div
                                className={'md:p-3  my-8 md:mt-0  rounded-lg hover:bg-light-blue-bg cursor-pointer md:max-w-sm md:my-auto flex flex-col justify-center md:justify-start items-center md:items-start text-center md:text-left'}>
                                <h4 className={'text-xl md:text-2xl font-medium'}>{item.title}</h4>
                                <p className={'text-gray-400 mt-4 md:mt-0 text-lg'}>{item.desc}</p>

                            </div>
                            <div
                                className={`w-[.5px] mb-6 h-10 bg-gray-400 mx-auto md:hidden ${FineWebRecipData.length == index + 1 && "hidden"}`}/>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>

    )
}
