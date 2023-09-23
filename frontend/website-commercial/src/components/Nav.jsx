import React, { useState } from 'react'
import { Logo, Account } from './helpers/Images'
import { Sling as Hamburger } from 'hamburger-react'
import Scroll from './hooks/Scroll'

const Nav = () => {
    const [isOpen, setOpen] = useState(false)
    const [blockScroll, allowScroll] = Scroll()
    isOpen ? blockScroll() : allowScroll()
    return (
        <nav className='w-full h-24 fixed'>
            <div className='w-2/3 m-auto flex'>
                <div className='w-2/3 xl:w-3/4 flex text-light-gray text-center lg:hidden'>
                    <a className='w-24 h-24' href="#home">
                        <img className='m-auto w-full h-full' src={Logo} alt="Sense" />
                    </a>
                    <div className='w-full flex align-middle'>
                        <a className='m-auto text-xl' href="#home">Home</a>
                        <a className='m-auto text-xl' href="#aboutus">About Us</a>
                        <a className='m-auto text-xl' href="#pricing">Pricing</a>
                        <a className='m-auto text-xl' href="#contactus">Contact Us</a>
                    </div>
                </div>
                <div className='w-1/3 xl:w-1/4 justify-end flex lg:hidden'>
                    <img className='w-12 h-12 my-auto ml-auto' src={Account} alt="Account" />
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
                                        <a className='lg:block lg:m-auto lg:text-3xl lg:w-full lg:my-8' href="#home">Home</a>
                                        <a className='lg:block lg:m-auto lg:text-3xl lg:w-full lg:my-8' href="#aboutus">About Us</a>
                                        <a className='lg:block lg:m-auto lg:text-3xl lg:w-full lg:my-8' href="#pricing">Pricing</a>
                                        <a className='lg:block lg:m-auto lg:text-3xl lg:w-full lg:my-8' href="#contactus">Contact Us</a>
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