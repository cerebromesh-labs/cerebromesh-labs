'use client'

import React from 'react'
import SectionHeader from "@/components/home/SectionHeader";
import {Bar} from 'react-chartjs-2'
import {registerables,Chart} from 'chart.js';
Chart.register(...registerables);

export default function DeduplicationAlgo() {
    return (
        <div className={'container mx-auto my-14'}>
            <div className={'bg-secondary-bg rounded-lg lg:p-6 py-16 px-4 space-y-10'}>
              <SectionHeader title={"Deduplication Algorithm"} description={"Deduplication ensures dataset uniqueness by:\n" +
                  "<li>Identifying and removing duplicate entries.</li>\n" +
                  "Why deduplicate?\n" +
                  "<ol><li>Improved Performance: Prevents overfitting, enhancing model generalization.</li>\n" +
                  "<li>Efficiency: Reduces dataset size and computational resources.</li>\n" +
                  "<li>Quality: Maintains diverse, high-quality training data.</li></ol>"}/>
                <Bar data={{
                    labels: ['Jan', 'Feb', 'Mar', "Apr", "May", "Jun"],
                    datasets: [
                        {
                            label: 'Web 1',
                            data: [100, -80, 70, 60, -50, 40],
                            backgroundColor: [
                                '#165BAA',
                                '#165BAA',
                                '#165BAA',
                            ],
                            borderColor: [
                                '#165BAA',
                                '#165BAA',
                                '#165BAA',
                            ],
                            borderWidth: 1,
                        },
                        {
                            label: 'Web 2',
                            data: [-90, 70, 90, 20, -10, 40],
                            backgroundColor: [
                                '#A155B9',
                                '#A155B9',
                                '#A155B9',
                            ],
                            borderColor: [
                                '#A155B9',
                                '#A155B9',
                                '#A155B9',
                            ],
                            borderWidth: 1,

                        },
                        {
                            label: 'Web 3',
                            data: [90, 70, 60, 20, 10, 40],
                            backgroundColor: [
                                '#F765A3',
                                '#F765A3',
                                '#F765A3',
                            ],
                            borderColor: [
                                '#F765A3',
                                '#F765A3',
                                '#F765A3',
                            ],
                            borderWidth: 1,

                        }
                    ],
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
                    }
                }}/>
            </div>
        </div>
    )
}
