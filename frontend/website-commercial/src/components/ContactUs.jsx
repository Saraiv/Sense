import React from 'react'
import Logo from '../recourses/LogoTransparent.svg'

const ContactUs = () =>{
    return(
        <div className=' h-2/5 bg-background-main w-full'>
            <div className='w-2/3 h-2/3 m-auto flex'>
                <div className='w-1/3 pt-5 block h-fit text-light-white'>
                    <img className='w-40 h-40' src={Logo} alt="Sense" />
                    <div className='block w-full px-7 pt-3'>
                        <h1 className='font-bold text-sm'>SENSE INFO</h1>
                        <div className='w-fit'>
                            <a className='block text-xs' href="#AboutUs">About Us</a>
                            <a className='block text-xs' href="#Pricing">Princing</a>
                        </div>
                    </div>
                </div>
                <div className='w-2/3 pt-12 flex h-fit text-light-white'>
                    <div className='block w-full'>
                        <h1 className='font-bold'>Contact Us</h1>
                        <div className='flex pt-3 w-full text-background-main font-bold'>
                            <input className='p-1' type='text' placeholder='Name' />
                            <input className='ml-5 p-1 w-full' type='email' placeholder='Email' />
                        </div>
                        <div className='block pt-5 w-full h-full text-background-main font-bold relative'>
                            <textarea className='w-full h-full p-2 overflow-hidden' placeholder='Description' />
                            <div className='w-1/5 bg-light-white border-solid bolder-light-white absolute bottom-0 right-0'>
                                <button className='w-full text-background-main p-2'>
                                    Send
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='w-2/3 h-1/3 block m-auto pt-16 pl-7'>
                <p className='w-full text-sm text-light-white'>
                    © 2023-2023 Todos os direitos reservados Sense
                </p>
            </div>
        </div>
    )
}

export default ContactUs