'use client'

import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, registerables } from 'chart.js';
import { motion } from "framer-motion";

import SectionHeader from "@/components/home/SectionHeader";
import { duplicationAlgoData } from "@/lib/constants";

// Register Chart.js components
ChartJS.register(...registerables);

/**
 * DeduplicationAlgo component
 * 
 * This component displays information about the deduplication algorithm
 * and shows a bar chart visualization of the algorithm's performance.
 */
const DeduplicationAlgo: React.FC = () => {
  const description = `Deduplication ensures dataset uniqueness by:
    <li>Identifying and removing duplicate entries.</li>
    Why deduplicate?
    <ol>
      <li>Improved Performance: Prevents overfitting, enhancing model generalization.</li>
      <li>Efficiency: Reduces dataset size and computational resources.</li>
      <li>Quality: Maintains diverse, high-quality training data.</li>
    </ol>`;

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
        stacked: true,
        ticks: { color: "#FFF" },
        grid: { color: "#3E3E40" }
      },
      x: {
        stacked: true,
        ticks: { color: "#FFF" },
        grid: { color: "#3E3E40" }
      }
    },
    plugins: {
      legend: {
        position: "bottom" as const,
        labels: { color: "#FFF" }
      },
    },
  };

  const chartData = {
    labels: ['Jan', 'Feb', 'Mar', "Apr", "May", "Jun"],
    datasets: duplicationAlgoData
  };

  return (
    <div className='container mx-auto py-8'>
      <div className='bg-secondary-bg rounded-lg lg:p-6 py-16 px-4 space-y-10'>
        <SectionHeader 
          title="Deduplication Algorithm" 
          description={description}
        />

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut", delay: 0.3 }}
          className='mx-auto w-full'
        >
          <Bar 
            data={chartData} 
            options={chartOptions} 
          />
        </motion.div>
      </div>
    </div>
  )
}

export default DeduplicationAlgo;