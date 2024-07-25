'use client'

import React from 'react'
// import Swiper core and required modules
import { Pagination,Autoplay } from 'swiper/modules';
import GetStartedSingleComp from './GetStartedSingleComp';
import {getStartedSlides} from "@/lib/constants";

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import {motion, easeInOut} from "framer-motion";

export default function GetStarted() {
    return (
        <div className={'mt-20 pt-4 '}>
            <motion.div
                initial={{opacity:0}}
                animate={{opacity:1}}
                transition={{duration:1,ease:easeInOut}}
                className={'container mx-auto'}>

                <Swiper
                    modules={[Pagination, Autoplay]}
                    slidesPerView={1}
                    pagination={{clickable: true,}}
                    autoplay={{delay: 5000}}
                >

                        {getStartedSlides?.map(({title,description,button,buttonHref},_idx)=>(
                            <SwiperSlide key={_idx}>
                            <GetStartedSingleComp
                                title={title}
                                description={description}
                                button={button}
                                buttonHref={buttonHref}
                            />
                            </SwiperSlide>
                        ))}

                </Swiper>
            </motion.div>

        </div>
    )
}
