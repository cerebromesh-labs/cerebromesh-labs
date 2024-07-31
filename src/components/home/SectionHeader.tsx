import React from 'react'
import Image from "next/image";
import {motion,easeInOut} from 'framer-motion';
import { useInView } from "react-intersection-observer";
import DotImage from "@/assets/cerebromesh_inside_dot.png";

type SectionHeaderProps = {
  title: string;
  description: string;
}

/**
 * SectionHeader component
 *
 * This component renders a consistent header for different sections,
 * including a title, description, and decorative elements.
 */
const SectionHeader: React.FC<SectionHeaderProps> = ({ title, description }) => {
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
        initial: { opacity: 0, y: 20},
        animate: { opacity: subInView ? 1 : 0,  y: subInView ? 0 : 20},
        transition: { duration: 2, easeInOut  },
    };

    return (
    <div className="lg:space-y-5 space-y-12">
      <motion.div
          ref={ref}
          {...fadeIn}
        className="flex flex-row gap-1 items-center justify-center lg:justify-start lg:relative"
      >
        <div className="lg:block hidden">
          <Image src={DotImage} alt="Decorative Dot" width={25} height={25} />
        </div>
        <div className="lg:relative">
          <h2 className="lg:text-3xl md:text-2xl text-xl text-center lg:text-left font-bold lg:after:content-[' ']  lg:after:bg-primary lg:after:opacity-35 lg:after:w-full lg:after:h-4 lg:after:absolute lg:after:left-0 lg:after:bottom-0">
            {title}
          </h2>
        </div>
      </motion.div>
      <motion.div
          ref={subRef}
          {...subFadeIn}
        className="lg:text-2xl md:text-xl text-md lg:text-left text-center !leading-relaxed"
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  )
}

export default SectionHeader;
