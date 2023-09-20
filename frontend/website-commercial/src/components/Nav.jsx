import React from 'react'
import Logo from '../recourses/LogoTransparent.svg'
import Account from '../recourses/Account.svg'

const Nav = () => {
    return (
        <nav className='m-auto w-2/3 h-24 flex'>
            <div className='w-2/3 flex text-light-white text-center'>
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
            <div className='w-1/3 justify-end flex'>
                <img className='w-12 h-12 my-auto ml-auto' src={Account} alt="Account" />
            </div>
        </nav>
    )
}

export default Nav