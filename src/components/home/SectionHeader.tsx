import React from 'react'
import Image from "next/image";
import DotImage from "@/assets/cerebromesh_inside_dot.png";
import { easeInOut, motion } from 'framer-motion';

export default function SectionHeader({title,description}:{title:string,description:string}){
    return (
        <div className={'lg:space-y-5 space-y-12'}>
            <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{ duration: 1.5, easeInOut, delay: .3 }}
                className={'flex flex-row gap-1 items-center justify-center lg:justify-start lg:relative'}>
                <div className={'lg:block hidden'}>
                    <Image src={DotImage} alt={"Dot Image"} width={25} height={25}/>
                </div>
                <div className={'lg:relative'}>
                    <h2 className={'lg:text-3xl md:text-2xl text-xl text-center lg:text-left font-bold lg:after:content-[" "]  lg:after:bg-primary lg:after:opacity-35 lg:after:w-full lg:after:h-4 lg:after:absolute lg:after:left-0 lg:after:bottom-0'}>
                        {title}
                    </h2>
                </div>
            </motion.div>
            <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{ duration: 1.5, easeInOut, delay: .3 }}
                className={'lg:text-2xl md:text-xl text-md  lg:text-left text-center !leading-relaxed'}
                dangerouslySetInnerHTML={{__html:description}}/>
        </div>
    )
}
