'use client'

import React from 'react'
import SectionHeader from "@/components/home/SectionHeader";
import {Bar} from 'react-chartjs-2'
import {registerables,Chart} from 'chart.js';
import {duplicationAlgoData} from "@/lib/constants";
import {easeInOut,motion} from "framer-motion";
Chart.register(...registerables);

export default function DeduplicationAlgo() {
    return (
        <div className={'container mx-auto py-8'}>
            <div className={'bg-secondary-bg rounded-lg lg:p-6 py-16 px-4 space-y-10'}>
              <SectionHeader title={"Deduplication Algorithm"} description={"Deduplication ensures dataset uniqueness by:\n" +
                  "<li>Identifying and removing duplicate entries.</li>\n" +
                  "Why deduplicate?\n" +
                  "<ol><li>Improved Performance: Prevents overfitting, enhancing model generalization.</li>\n" +
                  "<li>Efficiency: Reduces dataset size and computational resources.</li>\n" +
                  "<li>Quality: Maintains diverse, high-quality training data.</li></ol>"}/>
                <motion.div
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{ duration: 1.5, easeInOut, delay: .3 }}
                    className={'mx-auto w-full'}
                >
                <Bar data={{
                    labels: ['Jan', 'Feb', 'Mar', "Apr", "May", "Jun"],
                    datasets: duplicationAlgoData
                }} options={{
                    scales: {
                        y: {
                            beginAtZero: true,
                            stacked: true,
                            ticks:{
                                color:"#FFF"
                            },
                            grid:{
                                color:"#3E3E40"
                            }
                        },
                        x: {
                            stacked:true,
                            ticks:{
                                color:"#FFF"
                            },
                            grid:{
                                color:"#3E3E40"
                            }
                        }
                    },
                    plugins: {
                        legend: {
                            position:"bottom",
                            labels:{
                                color:"#FFF",
                            }
                        },

                    },

                }}/>
                </motion.div>
            </div>
        </div>
    )
}
