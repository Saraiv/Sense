import React, { useState, useEffect } from 'react'
import { Logo, LogoDark } from './helpers/Images'
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
            setIsScrolled(window.scrollY >= window.innerHeight)
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    })

    const handleClickHamburger = () => {
        isOpen ? setOpen(false) : setOpen(true)
    }

    return (
        <nav className='w-full h-24 fixed backdrop-blur-sm z-50'>
            <div className='w-2/3 m-auto flex'>
                <div className={!isScrolled ? 'w-full xl:w-3/4 flex text-light-gray text-center lg:hidden' : 'w-full xl:w-3/4 flex text-background-main text-center lg:hidden'}>
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
                        <a href="/register" className='m-auto text-xl cursor-pointer'>Register</a>
                        <a href="/login" className='m-auto text-xl cursor-pointer'>Login</a>
                    </div>
                </div>
                    
                </div>
                <div className='hidden lg:ml-auto lg:block lg:align-middle lg:text-right lg:justify-end lg:mt-8'>
                    {isOpen ?
                        <div className='lg:overflow-hidden'>
                            {
                                !isScrolled ?
                                    <div className='lg:z-50'>
                                        <Hamburger 
                                            toggled={isOpen}
                                            toggle={setOpen}
                                            color='#0B1A24'
                                        />
                                    </div>
                                :
                                    <div className='lg:z-50'>
                                        <Hamburger 
                                            toggled={isOpen}
                                            toggle={setOpen}
                                            color='#CCDCF0'
                                        />
                                    </div>
                            }
                            <div className='lg:-z-50 lg:m-0 lg:block lg:absolute lg:right-0 lg:top-0 lg:w-screen lg:h-screen lg:bg-light-gray lg:text-background-main'>
                                <div className='lg:m-auto lg:w-1/2 lg:h-full lg:flex lg:align-middle lg:justify-center lg:items-center'>
                                    <div className='lg:block lg:w-full lg:h-fit lg:text-center'>
                                        <ScrollLink smooth={true} spy={true} activeClass='active' to='home' className='lg:block lg:m-auto lg:text-3xl lg:w-full lg:my-8 cursor-pointer' onClick={handleClickHamburger}>Home</ScrollLink>
                                        <ScrollLink smooth={true} spy={true} activeClass='active' to='aboutus' className='lg:block lg:m-auto lg:text-3xl lg:w-full lg:my-8 cursor-pointer' onClick={handleClickHamburger}>About Us</ScrollLink>
                                        <ScrollLink smooth={true} spy={true} activeClass='active' to='pricing' className='lg:block lg:m-auto lg:text-3xl lg:w-full lg:my-8 cursor-pointer' onClick={handleClickHamburger}>Pricing</ScrollLink>
                                        <ScrollLink smooth={true} spy={true} activeClass='active' to='contactus' className='lg:block lg:m-auto lg:text-3xl lg:w-full lg:my-8 cursor-pointer' onClick={handleClickHamburger}>Contact Us</ScrollLink>
                                        <a href="/register" className='lg:block lg:m-auto lg:text-3xl lg:w-full lg:my-8 cursor-pointer'>Register</a>
                                        <a href="/login" className='lg:block lg:m-auto lg:text-3xl lg:w-full lg:my-8 cursor-pointer'>Login</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    :
                        isScrolled ?
                            <div className='lg:z-50'>
                                <Hamburger 
                                    toggled={isOpen}
                                    toggle={setOpen}
                                    color='#0B1A24'
                                />
                            </div>
                        :
                            <div className='lg:z-50'>
                                <Hamburger 
                                    toggled={isOpen}
                                    toggle={setOpen}
                                    color='#CCDCF0'
                                />
                            </div>
                    }
                </div>
        </nav>
    )
}

export default Nav