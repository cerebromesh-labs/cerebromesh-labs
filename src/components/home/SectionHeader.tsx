import React from 'react'
import Image from "next/image";
import DotImage from "@/assets/cerebromesh_inside_dot.png";


export default function SectionHeader({title,description}:{title:string,description:string}){
    return (
        <div className={'lg:space-y-5 space-y-12'}>
            <div className={'flex flex-row gap-1 items-center justify-center lg:justify-start lg:relative'}>
                <div className={'lg:block hidden'}>
                    <Image src={DotImage} alt={"Dot Image"} width={25} height={25}/>
                </div>
                <div className={'lg:relative'}>
                    <h2 className={'lg:text-3xl md:text-2xl text-xl text-center lg:text-left font-bold lg:after:content-[" "]  lg:after:bg-primary lg:after:opacity-35 lg:after:w-full lg:after:h-4 lg:after:absolute lg:after:left-0 lg:after:bottom-0'}>
                        {title}
                    </h2>
                </div>
            </div>
            <p className={'lg:text-xl md:text-lg text-md  lg:text-left text-center'}>
                {description}
            </p>
        </div>
    )
}
