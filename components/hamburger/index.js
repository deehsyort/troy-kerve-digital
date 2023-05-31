"use client" // This is a client component
import { useState, useEffect } from 'react'
import Link from 'next/link'
import Heading from '../heading'
import Nav from '../navigation'

/**
 * HamburgerMenu component.
 * @component
 * @returns {JSX.Element} The rendered HamburgerMenu component.
 */
const HamburgerMenu = () => {
    /**
     * State for the menu open/closed status.
     * @type {boolean}
     */
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
    /**
     * Event listener for the Escape key to close the menu.
     * @param {KeyboardEvent} event - The keydown event object.
     */
      const handleEscapeKey = (event) => {
        if (event.key === 'Escape') {
          setIsOpen(false);
        }
      }
  
      if (isOpen) {
        document.addEventListener('keydown', handleEscapeKey);
      }
  
      return () => {
        document.removeEventListener('keydown', handleEscapeKey);
      }
    }, [isOpen])
  
    /**
     * Toggles the menu open/closed status.
     */
    const toggleMenu = () => {
      setIsOpen(!isOpen)
    }

    return (
        <div className="cursor-pointer flex justify-between items-center gap-3 text-marble-title">
            <p>Let's Talk</p>
            <button 
                onClick={toggleMenu}
                className="w-hamburger h-hamburger flex flex-col items-start justify-evenly"
                aria-label="Menu"
                aria-expanded={toggleMenu}
                aria-controls="menu-mobile"
            >
                <hr className="h-hamburger-bar bg-marble-title rounded-xs origin-left transition-all w-full"/>
                <hr className="h-hamburger-bar bg-marble-title rounded-xs origin-left transition-all w-3/4"/>
            </button>
            {isOpen && (
                <div className="fixed inset-0 flex flex-col items-center justify-center bg-menu-overlay">
                    <div className='flex justify-between items-center h-nav absolute top-0 z-10 bg-menu-overlay w-full p-mobile-x md:p-tablet-x lg:p-desktop-x'>
                        <Heading className='text-white' as="h1">marble</Heading>
                        <Nav className='text-white'/>
                        <span className="flex gap-5 mr-2 sm:mr-3 lg:mr-0">
                            <p className='text-white'>Let's Talk</p>
                            <button onClick={toggleMenu} className='cursor-pointer'>
                                <svg width="20" height="19" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <line x1="1.69146" y1="0.837838" x2="18.662" y2="17.8084" stroke="white" strokeWidth="1.5"/>
                                    <line x1="1.33783" y1="17.8083" x2="18.3084" y2="0.837734" stroke="white" strokeWidth="1.5"/>
                                </svg>
                            </button>
                        </span>
                    </div>
                    <ul className="font-playfair text-menu-link-mobile md:text-menu-link-tablet lg:text-menu-link text-white text-center mb-menu-mobile md:mb-menu-tablet lg:mb-menu h-big-links md:h-big-links-tablet lg:h-big-links-desktop overflow-y-auto scrollbar">
                        <li>
                            <Link className='hover:text-marble-pink' href=''>Work</Link>
                        </li>                        
                        <li>
                            <Link className='hover:text-marble-pink' href=''>Expertise</Link>
                        </li>
                        <li>
                            <Link className='hover:text-marble-pink' href=''>People</Link>
                        </li>
                        <li>
                            <Link className='hover:text-marble-pink' href=''>Articles</Link>
                        </li>
                    </ul>
                    <ul className='lg:flex text-center gap-6 justify-evenly font-ivy text-white text-menu-footer w-footer-links mb-footer-links mb-footer-links-mobile md:mb-footer-links-tablet lg:mb-footer-links-desktop'>
                        <li className='mb-4 lg:mb-0'>
                            <Link className="hover:text-marble-pink" href=''>Our Story</Link>
                        </li>
                        <span className='hidden lg:block text-marble-pink'>/</span>
                        <li className='mb-4 lg:mb-0'>
                            <Link className="hover:text-marble-pink" href=''>Planet & Sustainability</Link>
                        </li>
                        <span className='hidden lg:block text-marble-pink'>/</span>
                        <li className='mb-4 lg:mb-0'>
                            <Link className="hover:text-marble-pink" href=''>Careers</Link>
                        </li>
                        <span className='hidden lg:block text-marble-pink'>/</span>
                        <li className='mb-4 lg:mb-0'>
                            <Link className="hover:text-marble-pink" href=''>Contact</Link>
                        </li>
                    </ul>
                    <div className='lg:flex gap-6 text-offwhite text-menu-footer-company font-inter text-center'>
                        <p>Part of The Marble Group</p>
                        <p>Marble Production</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default HamburgerMenu;