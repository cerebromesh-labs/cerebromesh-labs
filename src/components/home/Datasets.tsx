'use client'

import React, {useCallback, useRef} from 'react'
import Image from "next/image";
import DatasetImg1 from '@/assets/data-set-img-1.png'
import StarImg from '@/assets/star.png'
import { FaArrowRight } from "react-icons/fa6";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";


import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {Autoplay, Navigation, Pagination} from "swiper/modules";

import {motion, easeInOut} from "framer-motion";


export default function Datasets() {
    const sliderRef = useRef(null);

    const handlePrev = useCallback(() => {
        if (!sliderRef.current) return;
        //@ts-ignore
        sliderRef.current.swiper.slidePrev();
    }, []);

    const handleNext = useCallback(() => {
        if (!sliderRef.current) return;
        //@ts-ignore
        sliderRef.current.swiper.slideNext();
    }, []);

    const breakpoints = {
        640: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        768: {
            slidesPerView: 2,
            spaceBetween: 40
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 50
        },
        1280: {
            slidesPerView: 4,
            spaceBetween: 50
        },
        1536: {
            slidesPerView: 5,
            spaceBetween: 50
        },
        2000: {
            slidesPerView: 6,
            spaceBetween: 50
        },
    }

    return (
        <div className={'bg-dark-blue-bg '}>
            <div className={'px-5 py-14'}>
                <motion.h1
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{ duration: 1.5, easeInOut, delay: .3 }}
                    className={'lg:text-5xl md:text-4xl text-3xl font-bold text-center leading-relaxed'}>
                    We Provide AI<br/>
                    Training Datasets.
                </motion.h1>
                <motion.div
                    initial={{opacity:0, translateY:50}}
                    whileInView={{opacity:1,translateY:0}}
                    transition={{ duration: 1.5, easeInOut, delay: .3 }}
                    className={'mt-10'}>

                    <Swiper
                        ref={sliderRef}
                        modules={[Autoplay, Navigation]}
                        navigation={false}
                        breakpoints={breakpoints}
                        pagination={{clickable: true}}
                        autoplay={{delay: 5000}}
                    >
                        {[1, 2, 3, 4, 5, 6].map((item, index) => (
                            <SwiperSlide key={index}>
                                <SlideComponent/>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className={'flex flex-row gap-3 justify-center items-center my-8'}>
                        <div className="prev-arrow cursor-pointer" onClick={handlePrev}>
                            <FaChevronLeft size={30}/>
                        </div>
                        <div className="next-arrow cursor-pointer" onClick={handleNext}>
                            <FaChevronRight size={30}/>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}


function SlideComponent(){
    return (
        <div
            className={'w-80 space-y-7 bg-secondary-bg hover:bg-[#474D62] transition-all duration-300 rounded-lg overflow-hidden mx-auto group cursor-pointer'}>
            <Image src={DatasetImg1} alt={'dataset image 1'}/>
            <div className={'px-3 py-4 space-y-6 relative'}>
                <h5 className={'text-xl font-bold'}>AI Training Datasets</h5>
                <p>Explore our comprehensive collection
                    of datasets tailored for machine
                    learning models.</p>
                <div
                    className={'text-primary uppercase font-bold text-xs flex flex-row gap-2 items-center cursor-pointer'}>
                    <span>Read More</span>
                    <span><FaArrowRight/></span>
                </div>
                <div className={'absolute bottom-6 right-6'}><Image
                    src={StarImg} alt={' '}/></div>
            </div>
        </div>
    )
}
