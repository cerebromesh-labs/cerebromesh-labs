'use client'

import React from 'react'
import Image from "next/image";
import { motion } from 'framer-motion';

import SectionHeader from "@/components/home/SectionHeader";
import { FineWebRecipData } from "@/lib/constants";

type RecipeItemProps = {
  item: {
    title: string;
    desc: string;
    icon: string;
  };
  index: number;
  isLast: boolean;
};

/**
 * RecipeItem component
 * 
 * Renders an individual item in the FineWeb recipe list.
 */
const RecipeItem: React.FC<RecipeItemProps> = ({ item, index, isLast }) => (
  <motion.div
    initial={{ opacity: 0, translateY: 50 }}
    whileInView={{ opacity: 1, y: 0, translateY: 0 }}
    transition={{ duration: 1, ease: "easeInOut", delay: 0.2 }}
    className="grid md:grid-cols-2 grid-cols-1"
  >
    <div>
      <div className="h-full md:w-40 w-full flex flex-col justify-center items-center md:justify-start md:items-start">
        <Image className="mx-auto" src={item.icon} alt="ICON" />
        <div className={`w-[.5px] my-4 h-10 bg-gray-400 mx-auto hidden ${isLast ? "hidden" : "md:block"}`} />
      </div>
    </div>
    <div className="md:p-3 my-8 md:mt-0 rounded-lg hover:bg-light-blue-bg cursor-pointer md:max-w-sm md:my-auto flex flex-col justify-center md:justify-start items-center md:items-start text-center md:text-left">
      <h4 className="text-xl md:text-2xl font-medium">{item.title}</h4>
      <p className="text-gray-400 mt-4 md:mt-0 text-lg">{item.desc}</p>
    </div>
    <div className={`w-[.5px] mb-6 h-10 bg-gray-400 mx-auto md:hidden ${isLast && "hidden"}`} />
  </motion.div>
);

/**
 * FinewebRecipe component
 * 
 * Displays the steps involved in the FineWeb data preparation algorithm.
 */
const FinewebRecipe: React.FC = () => {
  return (
    <div className="container mx-auto py-8">
      <div className="bg-secondary-bg rounded-lg lg:p-6 py-16 px-4 space-y-10">
        <SectionHeader
          title="The FineWeb Recipe"
          description="The data preparation algorithm involves several key steps to ensure the creation of a high-quality dataset:"
        />

        <div className="flex flex-col lg:px-40 md:px-20">
          {FineWebRecipData.map((item, index) => (
            <RecipeItem
              key={index}
              item={item}
              index={index}
              isLast={index === FineWebRecipData.length - 1}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FinewebRecipe;