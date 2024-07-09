"use client";

// Importing React hooks and router functionality
import { useState } from 'react';
import { useParams } from 'next/navigation';

// Importing functions to control page scroll behavior
import { disablePageScroll, enablePageScroll } from 'scroll-lock';

// Importing navigation constants
import { navigation } from '@/lib/constants';

// Importing UI components
import Toggle from "@/components/ui/Toggle";
import Image from 'next/image';
import { textualLogo } from '@/assets';
// import Button from '../components/Button';

/**
 * Header component that contains navigation and branding.
 */
const Header = () => {
  // Initializing router and state for navigation toggle
  const router = useParams();
  const [openNavigation, setOpenNavigation] = useState(false);


  /**
   * Toggles the navigation menu visibility and page scroll.
   */
  const toggleNavigation = () => {
    const isNavigationOpen = !openNavigation;
    setOpenNavigation(isNavigationOpen);

    // Disabling page scroll when navigation is open
    if (isNavigationOpen) {
      disablePageScroll();
    } else {
      enablePageScroll();
    }
  };

  /**
   * Handles navigation link clicks.
   * Closes the navigation menu and enables page scroll if open.
   */
  const handleClick = () => {
    if (openNavigation) {
      enablePageScroll();
      setOpenNavigation(false);
    }
  };

  return (
    <div className={`fixed top-0 left-0 w-full h-20 flex justify-center items-center bg-main-bg z-50 lg:bg-main-bg lg:backdrop-blur-sm shadow-black/30 shadow-sm ${openNavigation ? 'bg-n-8' : 'bg-n-8/100 backdrop-blur-sm'}`}>
      <div className="flex container mx-auto px-2 py-2 items-center justify-between">
        {/* Logo */}
        <a className="block w-[12rem] xl:mr-8" href="#hero">
          <Image src={textualLogo} alt="CerebroMesh Labs" width={190} height={40} />
        </a>

        {/* Navigation Links */}
        <nav className={`${openNavigation ? 'flex' : 'hidden'} fixed top-[4.8rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent bg-black/90`}>
          <div className="relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row">
            {/* Mapping through navigation items */}
            {navigation.map((item) => (
              <a
                key={item.id}
                href={item.url}
                onClick={handleClick}
                className={`block relative font-Inter font-semibold text-2xl text-white transition-colors hover:text-white/50 ${item.onlyMobile ? 'md:hidden' : ''} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-[15px] ${item.url === router.pathname ? 'z-2 lg:text-white' : 'lg:text-white'} lg:leading-5 lg:hover:text-white/50 xl:px-[22px]`}
              >
                {item.title}
              </a>
            ))}
          </div>

          {/* Hamburger Menu Icon */}
          {/* <HamburgerMenu /> */}
        </nav>

        <div className='max-md:ml-auto flex items-center'>

        {/* New Account Button (Desktop) */}
        <a href="#signup" className="button lg:leading-5 font-Inter text-[15px] font-semibold hidden mr-4 text-white transition-colors hover:text-white/50 md:block">
          New Account
        </a>

        {/* Sign In Button (Desktop) */}
        {/* <Button className="hidden lg:flex" href="#login"> */}
        <a href="#signin" className="button lg:leading-5 font-Inter text-[15px] font-semibold hidden max-lg:mr-8 text-white transition-colors md:block border-2 rounded-full border-white px-5 py-2 hover:bg-white hover:text-black">
            Sign in
        </a>

        {/* </Button> */}

        {/* Hamburger Menu Icon (Mobile) */}
        {/* <Button className="ml-auto lg:hidden" px="px-3" onClick={toggleNavigation}>
          <MenuSvg openNavigation={openNavigation} />
        </Button> */}

        <Toggle onClick={toggleNavigation} clicked={openNavigation} className="lg:hidden" />
        </div>
      </div>
    </div>
  );
};

export default Header;
