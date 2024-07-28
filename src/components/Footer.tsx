'use client'

import React from 'react'
import Image from "next/image";
import Logo from '@/assets/textualLogo.png'

// Define the structure for footer section links
type FooterSectionProps = {
  title: string;
  links: string[];
}

/**
 * FooterSection component for rendering a section of footer links.
 */
const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => (
  <div className={'flex flex-col justify-center items-center md:justify-start md:items-start'}>
    <h2 className="font-medium tracking-widest text-xl text-gray-400 mb-3">{title}</h2>
    <nav className="flex flex-col gap-3 mb-10 list-none text-center md:text-left">
      {links.map((link, index) => (
        <li key={index}>
          <a className="text-xl font-medium cursor-pointer">{link}</a>
        </li>
      ))}
    </nav>
  </div>
)

/**
 * Footer component containing links and copyright information.
 */
const Footer: React.FC = () => {
  return (
    <footer className="bg-[#272727] text-whitee body-font">
      <div className="container px-5 py-20 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <Image src={Logo} alt={'Logo'} width={200} height={50}/>
          </a>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 mt-8 md:mt-0  w-full">
          <FooterSection 
            title="LET'S CONNECT" 
            links={["Contact Me", "Discord", "YouTube", "Twitter", "Email"]} 
          />
          <FooterSection 
            title="TERMS & POLICIES" 
            links={["Terms of use", "Privacy Policy"]} 
          />
          <FooterSection 
            title="EXPLORE" 
            links={["huggingface.co"]} 
          />
        </div>
      </div>
      <p className={'text-center pb-10 text-lg'}>Copyright © 2024 All Rights Reserved.</p>
    </footer>
  )
}

export default Footer;