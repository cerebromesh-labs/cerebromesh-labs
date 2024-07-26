'use client'

import React from 'react'
import Logo from '@/assets/logo.png'
import Image from "next/image";
import {Bubble} from 'react-chartjs-2'
import {registerables,Chart} from 'chart.js';
Chart.register(...registerables);

import { FaAngleDoubleLeft,FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from "react-icons/fa";
import {leaderboardBubbleData, leaderboardData as data} from '@/lib/constants'

import {motion,easeInOut} from "framer-motion";

export default function Leaderboard() {
    const dataPerPage = 8
    const pageCount = Math.ceil(data.length / dataPerPage)
    const  [currentPage, setCurrentPage] = React.useState(1)
    const  [currentData, setCurrentData] = React.useState(data.slice(0, dataPerPage));
    const [activeType, setActiveType] = React.useState('leaderboard')

    const _goToFirstPage = () => {
        setCurrentPage(1)
        setCurrentData(data.slice(0, dataPerPage))
    }

    const _goToLastPage = () => {
        setCurrentPage(pageCount)
        setCurrentData(data.slice((pageCount - 1) * dataPerPage, pageCount * dataPerPage))
    }

    const _goToNextPage = () => {
        if (currentPage < pageCount) {
            setCurrentPage(currentPage + 1)
            setCurrentData(data.slice(currentPage * dataPerPage, (currentPage + 1) * dataPerPage))
        }
    }

    const _goToPreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1)
            setCurrentData(data.slice((currentPage - 2) * dataPerPage, (currentPage - 1) * dataPerPage))
        }
    }

    const handleActiveType = (type: string) => {
        setActiveType(type)
    }

    return (
        <div className={'container mx-auto '}>
            <div className={'py-16 flex flex-col justify-center items-center'}>
                <motion.h2
                    initial={{opacity:0}}
                    whileInView={{opacity:1}}
                    transition={{ duration: 1.5, easeInOut, delay: .3 }}
                    className={'md:text-4xl text-2xl font-bold text-center'}>Cerebromesh TTS Subnet Leaderboard</motion.h2>
                <motion.div
                    initial={{opacity:0, translateY:50}}
                    whileInView={{opacity:1,translateY:0}}
                    transition={{ duration: 1.5, easeInOut, delay: .3 }}
                    className={'my-8'}
                ><Image className={'w-96'} src={Logo} alt={'Logo'}/></motion.div>
                <motion.p
                    initial={{opacity:0, translateY:50}}
                    whileInView={{opacity:1,translateY:0}}
                    transition={{ duration: 1.5, easeInOut, delay: .3 }}
                    className={'md:text-2xl text-lg text-center font-Inter leading-loose spacing md:tracking-[8px] tracking-[5px]'}>
                    {"Cerebromesh TTS Subnet is a groundbreaking project that leverages the power of decentralized collaboration to advance the state-of-the-art in open-source Text-to-Speech (TTS) technology. By harnessing the Bittensor blockchain and a unique incentive mechanism, we aim to create the most advanced and accessible TTS models. By leveraging Cerebromesh's user base of over one million individuals, we are devoted to pushing cutting-edge technology to every end-user. The Cerebromesh leaderboard shows miners' daily performance in building the dataset."}
                </motion.p>
            </div>
            <div className={'grid grid-cols-1 md:grid-cols-2 gap-10 justify-center'}>
                <div>
                <motion.div
                    initial={{opacity:0, translateX:-80}}
                    whileInView={{opacity:1,translateX:0}}
                    transition={{ duration: 1.5, easeInOut, delay: .3 }}
                    className={'flex flex-col gap-14 bg-secondary-bg p-6 rounded-lg border border-gray-700 h-fit'}>
                    <div className={'flex flex-col gap-2'}>
                        <h4 className={'text-xl font-bold'}>NEXT REWARD UPDATE </h4>
                        <h3 className={'text-primary  text-3xl font-medium'}>311 blocks (~62 minutes)</h3>
                    </div>
                    <div className={'flex flex-col'}>
                        <h4 className={'text-lg font-bold mb-2'}>PREVIOUS WEEKS</h4>
                        <select className={'bg-transparent text-lg font-medium border border-gray-700 p-2 rounded-md outline-0'} >
                            <option className={'bg-secondary-bg'}>Week 1</option>
                            <option className={'bg-secondary-bg'}>Week 2</option>
                            <option className={'bg-secondary-bg'}>Week 3</option>
                            <option className={'bg-secondary-bg'}>Week 4</option>
                        </select>
                    </div>
                </motion.div>
                </div>
                <motion.div
                    initial={{opacity:0, translateX:80}}
                    whileInView={{opacity:1,translateX:0}}
                    transition={{ duration: 1.5, easeInOut, delay: .3 }}
                    className={'border border-gray-700 rounded-lg  bg-secondary-bg'}>
                    <div className={'border-b border-gray-700 p-4'}>
                        <h4 className={'font-bold text-lg'}>{"DAILY MINER'S PERFORMANCE"}</h4>
                    </div>
                    <div className={'p-8'}>
                        <Bubble
                            options={
                            {
                                plugins: {
                                    legend:{
                                        position:'bottom',
                                    },
                                },
                                responsive:true,
                                maintainAspectRatio:false
                            }
                            }
                            data={
                            {
                                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                                datasets: leaderboardBubbleData
                            }
                        }/>
                    </div>
                </motion.div>
            </div>
            <motion.div
                initial={{opacity:0, translateY:80}}
                whileInView={{opacity:1,translateY:0}}
                transition={{ duration: 1.5, easeInOut, delay: .3 }}
                className={'my-20'}>
                <div className={'flex flex-row '}>
                    <button
                    onClick={() => handleActiveType('leaderboard')}
                        className={`py-2 px-5 ${activeType == 'leaderboard' ? "bg-secondary-bg border border-gray-700 rounded-md" :"cursor-pointer border border-transparent hover:bg-secondary-bg hover:border hover:border-gray-700 hover:rounded-md "}`}>
                        Leaderboard
                    </button>
                    <button
                    onClick={() => handleActiveType('eval_stats')}
                        className={`py-2 px-5 ${activeType == 'eval_stats' ? "bg-secondary-bg border border-gray-700 rounded-md" :"cursor-pointer border border-transparent hover:bg-secondary-bg hover:border hover:border-gray-700 hover:rounded-md "}`}>
                        Evaluation Stats
                    </button>
                </div>
                <div className={'bg-secondary-bg overflow-x-scroll md:overflow-x-hidden'}>
                    <h2 className={'text-2xl font-medium p-9 text-center'}>lit9003code/melotts100(bf30c038, UID=255)
                        ·$3,191.52 (τ10.73)</h2>
                    {/*// Table: Rank, User, Stake, Rewardes earned*/}
                    <table className={'w-full'}>
                        <thead>
                        <tr className={'border-y border-gray-700 py-3'}>
                            <th className={'text-left text-gray-500 font-normal py-3'}>
                                <p className={'ml-6'}>Rank</p>
                            </th>
                            <th className={'text-left text-gray-500 font-normal py-3'}>User</th>
                            <th className={'text-left text-gray-500 font-normal py-3'}>Stake</th>
                            <th className={'text-right text-gray-500 font-normal py-3'}>
                                <p className={'mr-6'}>Rewards earned</p>
                            </th>
                        </tr>
                        </thead>
                        <tbody>
                        {currentData.map((item, index) => (
                            <tr className={'border-y border-gray-700 py-3'} key={index}>
                                <td className={'text-left text-gray-200 font-normal py-3'}>
                                    <p className={'ml-6'}>{item.rank}</p>
                                </td>
                                <td className={'text-left text-gray-200 font-normal py-3'}>{item.user}
                                </td>
                                <td className={'text-left text-gray-200 font-normal py-3'}>{item.stake}</td>
                                <td className={'text-right text-primary font-normal py-3'}>
                                    <p className={'mr-6'}>{item.rewards}</p>
                                </td>
                            </tr>
                        ))}
                        </tbody>

                    </table>
                    <div className={'py-4 flex flex-row gap-4 justify-center items-center'}>
                        <button onClick={_goToFirstPage}><FaAngleDoubleLeft/></button>
                        <button onClick={_goToPreviousPage}><FaAngleLeft/></button>
                        <p>Page {currentPage} of {pageCount}</p>
                        <button onClick={_goToNextPage}><FaAngleRight/></button>
                        <button onClick={_goToLastPage}><FaAngleDoubleRight/></button>
                    </div>
                </div>
            </motion.div>
        </div>
    )
}
