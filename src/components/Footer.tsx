'use client'
import React from 'react'
import Logo from '@/assets/textualLogo.png'
import Image from "next/image";


export default function Footer() {
    return (
        <footer className="bg-[#272727] text-whitee body-font">
            <div
                className="container px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                        <Image src={Logo} alt={'Logo'} width={200} height={50}/>
                    </a>

                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 mt-8 md:mt-0  w-full">
                    <div className={'flex flex-col justify-center items-center md:justify-start md:items-start'}>
                        <h2 className="font-medium tracking-widest text-xl text-gray-400 mb-3">LET'S CONNECT</h2>
                        <nav className="flex flex-col gap-3 mb-10 list-none text-center md:text-left">
                            <li>
                                <a className="text-xl font-medium cursor-pointer">Contact Me</a>
                            </li>
                            <li>
                                <a className="text-xl font-medium  cursor-pointer">Discord</a>
                            </li>
                            <li>
                                <a className="text-xl font-medium  cursor-pointer">YouTube</a>
                            </li>
                            <li>
                                <a className="text-xl font-medium  cursor-pointer">Twtter</a>
                            </li>
                            <li>
                                <a className="text-xl font-medium  cursor-pointer">Email</a>
                            </li>
                        </nav>
                    </div>
                    <div className={'flex flex-col justify-center items-center md:justify-start md:items-start'}>
                        <h2 className="font-medium tracking-widest text-xl text-gray-400 mb-3">TERMS & POLICIES</h2>
                        <nav className="flex flex-col gap-3 mb-10 list-none text-center md:text-left">
                            <li>
                                <a className="text-xl font-medium  cursor-pointer">Terms of use</a>
                            </li>
                            <li>
                                <a className="text-xl font-medium  cursor-pointer">Privacy Policy</a>
                            </li>

                        </nav>
                    </div>
                    <div className={'flex flex-col justify-center items-center md:justify-start md:items-start'}>
                        <h2 className="font-medium tracking-widest text-xl text-gray-400 mb-3">EXPLORE</h2>
                        <nav className="flex flex-col gap-3 mb-10 list-none text-center md:text-left">
                            <li>
                                <a className="text-xl font-medium  cursor-pointer">huggingface.co</a>
                            </li>

                        </nav>
                    </div>
                </div>

            </div>
            <p className={'text-center pb-10 text-lg'}>Copyright © 2024 All Rights Reserved.</p>
        </footer>
    )
}
