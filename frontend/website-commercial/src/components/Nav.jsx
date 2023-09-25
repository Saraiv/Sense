import React, { useState, useEffect } from 'react'
import { Logo, LogoDark, Account, AccountDark } from './helpers/Images'
import { Sling as Hamburger } from 'hamburger-react'
import Scrolling from './hooks/Scroll'
import Scroll from 'react-scroll'
const ScrollLink = Scroll.Link

const Nav = () => {

    const [isOpen, setOpen] = useState(false)
    const [blockScroll, allowScroll] = Scrolling()
    isOpen ? blockScroll() : allowScroll()

    const [isScrolled, setIsScrolled] = useState(false)
    useEffect (() => {
        const handleScroll = () => {
            window.scrollY >= window.innerHeight ? setIsScrolled(true) : setIsScrolled(false)
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    return (
        <nav className='w-full h-24 fixed backdrop-blur-sm'>
            <div className='w-2/3 m-auto flex'>
                <div className={!isScrolled ? 'w-2/3 xl:w-3/4 flex text-light-gray text-center lg:hidden' : 'w-2/3 xl:w-3/4 flex text-background-main text-center lg:hidden'}>
                    <ScrollLink smooth={true} to='home' className='w-24 h-24 cursor-pointer'>
                    {
                        !isScrolled ?
                            <img className='m-auto w-full h-full' src={Logo} alt="Sense" />
                        :
                            <img className='m-auto w-full h-full' src={LogoDark} alt="Sense" />
                    }
                    </ScrollLink>
                    <div className='w-full flex align-middle'>
                        <ScrollLink smooth={true} spy={true} activeClass='active' to='home' className='m-auto text-xl cursor-pointer'>Home</ScrollLink>
                        <ScrollLink smooth={true} spy={true} activeClass='active' to='aboutus' className='m-auto text-xl cursor-pointer'>About Us</ScrollLink>
                        <ScrollLink smooth={true} spy={true} activeClass='active' to='pricing' className='m-auto text-xl cursor-pointer'>Pricing</ScrollLink>
                        <ScrollLink smooth={true} spy={true} activeClass='active' to='contactus' className='m-auto text-xl cursor-pointer'>Contact Us</ScrollLink>
                    </div>
                </div>
                <div className='w-1/3 xl:w-1/4 justify-end flex lg:hidden'>
                    {
                        !isScrolled ?
                            <img className='w-12 h-12 my-auto ml-auto' src={Account} alt="Account" />
                        :
                            <img className='w-12 h-12 my-auto ml-auto' src={AccountDark} alt="Account" />
                    }
                    
                </div>
                <div className='hidden lg:ml-auto lg:block lg:align-middle lg:text-right lg:justify-end lg:mt-8'>
                    {isOpen ?
                        <div className='lg:overflow-hidden'>
                            <div className='lg:z-50'>
                                <Hamburger 
                                    toggled={isOpen}
                                    toggle={setOpen}
                                    color='#0B1A24'
                                />
                            </div>
                            <div className='lg:-z-50 lg:m-0 lg:block lg:absolute lg:right-0 lg:top-0 lg:w-screen lg:h-screen lg:bg-light-gray lg:text-background-main'>
                                <div className='lg:m-auto lg:w-1/2 lg:h-full lg:flex lg:align-middle lg:justify-center lg:items-center'>
                                    <div className='lg:block lg:w-full lg:h-fit lg:text-center'>
                                        <ScrollLink smooth={true} to='home' className='lg:block lg:m-auto lg:text-3xl lg:w-full lg:my-8'>Home</ScrollLink>
                                        <ScrollLink smooth={true} to='aboutus' className='lg:block lg:m-auto lg:text-3xl lg:w-full lg:my-8'>About Us</ScrollLink>
                                        <ScrollLink smooth={true} to='pricing' className='lg:block lg:m-auto lg:text-3xl lg:w-full lg:my-8'>Pricing</ScrollLink>
                                        <ScrollLink smooth={true} to='contactus' className='lg:block lg:m-auto lg:text-3xl lg:w-full lg:my-8'>Contact Us</ScrollLink>
                                    </div>
                                </div>
                                
                            </div>
                        </div>
                    :
                        <Hamburger 
                            toggled={isOpen}
                            toggle={setOpen}
                            color='#CCDCF0'
                            className='lg:z-50'
                        />
                    }
                </div>
            </div>
        </nav>
    )
}

export default Nav