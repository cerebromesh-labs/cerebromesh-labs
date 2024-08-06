'use client'
import React from 'react'
import SectionHeader from "@/components/home/SectionHeader";
import {Line} from 'react-chartjs-2'
import {registerables,Chart} from 'chart.js';
Chart.register(...registerables);


import {motion,easeInOut} from "framer-motion";
import {useInView} from "react-intersection-observer";

export default function TextExtAlgo(){
    const [ref, inView] = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    const [subRef, subInView] = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    const [graphRef, graphInView] = useInView({
        threshold: 0.1,
        triggerOnce: false,
    });

    const fadeIn = {
        initial: { opacity: 0, y:50 },
        animate: { opacity: inView ? 1:0, y: inView ? 0:50 },
        transition: { duration: 1.5, ease: "easeInOut" }
    };

    const subFadeIn = {
        initial: { opacity: 0, y:50 },
        animate: { opacity: subInView ? 1:0, y: subInView ? 0:50 },
        transition: { duration: 1.5, ease: "easeInOut" }
    };

    const graphFadeIn = {
        initial: { opacity: 0, y:50 },
        animate: { opacity: graphInView ? 1:0, y: graphInView ? 0:50 },
        transition: { duration: 1.5, ease: "easeInOut" }
    };

    return (
        <div className={'container mx-auto py-8'}>
            <motion.div ref={ref} {...fadeIn} className={'bg-secondary-bg rounded-lg lg:p-6 py-16 px-4 space-y-10'}>
                <SectionHeader title={'Text Extraction Algorithm'} description={'Text extraction from web crawl data can use either raw HTML with metadata or text-only versions of websites. Specialized open-source libraries significantly improve text quality by removing boilerplate content from raw data, producing a smaller but better dataset for model training. While resource-intensive, this method is preferable for high-quality results. However, budget constraints might make using default text-only data a practical, if lower quality, alternative.'}/>

                <motion.div
                    ref={subRef}
                    {...subFadeIn}
                    className={'md:text-lg text-md my-10 text-center w-full'}>
                    Attempting to further globally dedup worsened perf
                </motion.div>
                <motion.div
                    ref={graphRef}
                    {...graphFadeIn}
                className={'mx-auto w-full'}
                >

                <Line
                    options={{
                        aspectRatio:1.8,
                        plugins: {
                            legend:{
                                position:'bottom',
                                display:true,
                                labels: {
                                    boxWidth: 22,
                                    boxHeight:8,
                                    borderRadius:10,
                                },
                            },
                        },
                        scales: {
                            x: {
                                grid: {
                                    display: true,
                                    color:"#3E3E40",
                                },
                                ticks: {

                                    color: '#FFFFFF',
                                    font: {
                                        size: 12,
                                        weight: 'normal'
                                    },

                                },
                                title: {
                                    display:true,
                                    text:"Training tokens (billions)",
                                    color: '#FFFFFF',
                                    font: {
                                        size: 12,
                                    },
                                    padding: {
                                        top:10,
                                        bottom:10
                                    }
                                }
                            },
                            y: {
                                grid: {
                                    display: true,
                                    color:"#3E3E40"
                                },
                                ticks: {

                                    color: '#FFFFFF',
                                    font: {
                                        size: 12,
                                        weight: 'normal'
                                    }
                                },
                                title: {
                                    display:true,
                                    text:"Aggregate Score",
                                    color: '#FFFFFF',
                                    font: {
                                        size: 12,
                                    },
                                    padding: {
                                        bottom:10
                                    }
                                }
                            }
                        }
                    }}
                    data={
                    {
                        labels: ['5', '10', '15', '20', '25', '30'],
                        datasets: [
                            {
                                label: 'Web 1',
                                fill: false,
                                backgroundColor: '#63ABFD',
                                borderColor: '#63ABFD',
                                borderCapStyle: 'butt',
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: 'miter',
                                pointBorderColor: '#63ABFD',
                                pointBackgroundColor: '#fff',
                                pointBorderWidth: 1,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: '#63ABFD',
                                pointHoverBorderColor: 'rgba(220,220,220,1)',
                                pointHoverBorderWidth: 2,
                                pointRadius: 1,
                                pointHitRadius: 10,
                                data: [.32, .40, .36, .43, .06, .34, .41]
                            },
                            {
                                label: 'Web 2',
                                fill: false,
                                backgroundColor: '#FFA5CB',
                                borderColor: '#FFA5CB',
                                borderCapStyle: 'butt',
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: 'miter',
                                pointBorderColor: '#FFA5CB',
                                pointBackgroundColor: '#fff',
                                pointBorderWidth: 1,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: '#FFA5CB',
                                pointHoverBorderColor: 'rgba(220,220,220,1)',
                                pointHoverBorderWidth: 2,
                                pointRadius: 1,
                                pointHitRadius: 10,
                                data: [.5,.55,.34,.35,.44,.15,.20]
                            },
                            {
                                label: 'Web 3',
                                fill: false,
                                backgroundColor: '#E697FF',
                                borderColor: '#E697FF',
                                borderCapStyle: 'butt',
                                borderDash: [],
                                borderDashOffset: 0.0,
                                borderJoinStyle: 'miter',
                                pointBorderColor: '#E697FF',
                                pointBackgroundColor: '#fff',
                                pointBorderWidth: 1,
                                pointHoverRadius: 5,
                                pointHoverBackgroundColor: '#E697FF',
                                pointHoverBorderColor: 'rgba(220,220,220,1)',
                                pointHoverBorderWidth: 2,
                                pointRadius: 1,
                                pointHitRadius: 10,
                                data: [.23, .04, .63, .34, .6, .43, .14]

                            }
                        ]
                    }
                }/>

                </motion.div>

            </motion.div>
        </div>
    )
}
