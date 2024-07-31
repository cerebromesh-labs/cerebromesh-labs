'use client'

import React, { useCallback, useRef } from 'react'
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from "swiper/modules";
import {easeInOut, motion} from "framer-motion";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa6";

import DatasetImg1 from '@/assets/data-set-img-1.png'
import StarImg from '@/assets/star.png'
import { datasets } from '@/lib/constants'

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import {useInView} from "react-intersection-observer";

// Types
type SlideComponentProps = {
  title: string;
  desc: string;
  url: string;
}

/**
 * SlideComponent - Renders an individual dataset slide
 */
const SlideComponent: React.FC<SlideComponentProps> = ({ title, desc, url }) => (
  <div className='w-80 space-y-7 bg-secondary-bg hover:bg-[#474D62] transition-all duration-300 rounded-lg overflow-hidden mx-auto group cursor-pointer'>
    <Image src={DatasetImg1} alt='dataset image 1' />
    <div className='px-3 py-4 space-y-6 relative'>
      <h5 className='text-xl font-bold'>{title}</h5>
      <p>{desc}</p>
      <a href={url} className='text-primary uppercase font-bold text-xs flex flex-row gap-2 items-center cursor-pointer'>
        <span>Read More</span>
        <span><FaArrowRight /></span>
      </a>
      <div className='absolute bottom-6 right-6'>
        <Image src={StarImg} alt=' ' />
      </div>
    </div>
  </div>
)

/**
 * Datasets component - Displays a slider of AI training datasets
 */
const Datasets: React.FC = () => {
  const sliderRef = useRef(null);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const [subRef, subInView] = useInView({
    threshold: 0.1,
    triggerOnce: false,
  });

  const fadeIn = {
    initial: { opacity: 0 },
    animate: { opacity: inView ? 1 : 0 },
    transition: { duration: 2, easeInOut  },
  };

  const subFadeIn = {
    initial: { opacity: 0, y: 50},
    animate: { opacity: subInView ? 1 : 0,  y: subInView ? 0 : 50},
    transition: { duration: 2, easeInOut  },
  };

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    // @ts-ignore
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    // @ts-ignore
    sliderRef.current.swiper.slideNext();
  }, []);

  const breakpoints = {
    640: { slidesPerView: 1, spaceBetween: 20 },
    768: { slidesPerView: 2, spaceBetween: 40 },
    1024: { slidesPerView: 3, spaceBetween: 50 },
    1280: { slidesPerView: 4, spaceBetween: 50 },
    1536: { slidesPerView: 5, spaceBetween: 50 },
    2000: { slidesPerView: 6, spaceBetween: 50 },
  }

  return (
    <motion.div ref={ref} {...fadeIn} className='bg-dark-blue-bg'>
      <div className='px-5 py-14'>
        <motion.h1
            {...fadeIn}
          className='lg:text-5xl md:text-4xl text-3xl font-bold text-center leading-relaxed'
        >
          We Provide AI<br />
          Training Datasets.
        </motion.h1>
        <motion.div
            ref={subRef}
            {...subFadeIn}
          className='mt-10'
        >
          <Swiper
            ref={sliderRef}
            modules={[Autoplay, Navigation]}
            navigation={false}
            breakpoints={breakpoints}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000 }}
          >
            {datasets.map((item, index) => (
              <SwiperSlide key={index}>
                <SlideComponent title={item.title} desc={item.desc} url={item.url} />
              </SwiperSlide>
            ))}
          </Swiper>
          <div className='flex flex-row gap-3 justify-center items-center my-8'>
            <div className="prev-arrow cursor-pointer" onClick={handlePrev}>
              <FaChevronLeft size={30} />
            </div>
            <div className="next-arrow cursor-pointer" onClick={handleNext}>
              <FaChevronRight size={30} />
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default Datasets;
