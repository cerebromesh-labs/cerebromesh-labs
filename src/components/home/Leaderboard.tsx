'use client'

import React from 'react'
import Logo from '@/assets/logo.png'
import Image from "next/image";
import {Bubble} from 'react-chartjs-2'
import {registerables,Chart} from 'chart.js';
Chart.register(...registerables);

import { FaAngleDoubleLeft,FaAngleLeft, FaAngleRight, FaAngleDoubleRight } from "react-icons/fa";
import {leaderboardData as data} from '@/lib/constants'

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
        <div className={'container mx-auto'}>
            <div className={'py-16 flex flex-col justify-center items-center'}>
                <h2 className={'text-4xl font-bold'}>Cerebromesh TTS Subnet Leaderboard</h2>
                <Image className={'w-96'} src={Logo} alt={'Logo'}/>
                <p className={'text-2xl text-center'}>
                    Cerebromesh TTS Subnet is a groundbreaking project that leverages the power of decentralized collaboration to advance the state-of-the-art in open-source Text-to-Speech (TTS) technology. By harnessing the Bittensor blockchain and a unique incentive mechanism, we aim to create the most advanced and accessible TTS models. By leveraging Cerebromesh's user base of over one million individuals, we are devoted to pushing cutting-edge technology to every end-user. The Cerebromesh leaderboard shows miners' daily performance in building the dataset.
                </p>
            </div>
            <div className={'grid grid-cols-1 md:grid-cols-2 gap-10 justify-center'}>
                <div>
                <div className={'flex flex-col gap-14 bg-secondary-bg p-6 rounded-lg border border-gray-700 h-fit'}>
                    <div className={'flex flex-col gap-2'}>
                        <h4 className={'text-xl font-bold'}>NEXT REWARD UPDATE </h4>
                        <h3 className={'text-primary  text-3xl font-medium'}>311 blocks (~62 minutes)</h3>
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
                </div>
                </div>
                <div className={'border border-gray-700 rounded-lg  bg-secondary-bg'}>
                    <div className={'border-b border-gray-700 p-4'}>
                        <h4 className={'font-bold text-lg'}>DAILY MINER'S PERFORMANCE</h4>
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
                            }
                            }
                            data={
                            {
                                labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],

                                datasets: [
                                    {
                                        label: 'Miner 1',
                                        data: [
                                            {x: 1, y: 2, r: 1},
                                            {x: 2, y: 3, r: .5},
                                            {x: 3, y: 4, r: .8},
                                            {x: 4, y: 5, r: 2},
                                            {x: 5, y: 6, r: 1.5},
                                            {x: 6, y: 7, r: .4},
                                            {x: 7, y: 8, r: .9},
                                        ],
                                        backgroundColor: '#165BAA',
                                        borderColor: '#165BAA',
                                    },
                                    {
                                        label: 'Miner 2',
                                        data: [
                                            {x: 4, y: 2, r: 1},
                                            {x: 6, y: 3, r: 2},
                                            {x: 8, y: 4, r: 1},
                                            {x: 2, y: 5, r: 2},
                                            {x: 4, y: 6, r: 1},
                                            {x: 7, y: 7, r: 1},
                                            {x: 7, y: 8, r: 2},
                                        ],
                                        backgroundColor: '#A155B9',
                                        borderColor: '#A155B9',
                                    },
                                    {
                                        label: 'Miner 3',
                                        data: [
                                            {x: 8, y: 2, r: 1},
                                            {x: 5, y: 3, r: 2},
                                            {x: 5, y: 4, r: 1},
                                            {x: 7, y: 5, r: 1},
                                            {x: 5, y: 6, r: 2},
                                            {x: 2, y: 7, r: 1},
                                            {x: 3, y: 8, r: 1},
                                        ],
                                        backgroundColor: '#F765A3',
                                        borderColor: '#F765A3',
                                    },
                                ]
                            }
                        }/>
                    </div>
                </div>
            </div>
            <div className={'my-20'}>
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
                            <tr className={'border-y border-gray-700 py-3'}>
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


            </div>
        </div>
    )
}
