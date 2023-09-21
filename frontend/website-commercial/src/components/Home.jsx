import React from 'react'
import Logo from '../recourses/LogoTransparent.svg'

const Home = () =>{
    return(
        <div className='w-2/3 m-auto h-screen flex'>
            <div className='w-1/2 h-full flex align-middle justify-center items-center'>
                <img className='w-96 h-96 m-auto' src={Logo} alt="Sense" />
            </div>
            <div className='w-1/2 h-full flex align-middle justify-start items-center'>
                <div className='flex-col'>
                    <h1 className='pb-20 text-bold text-9xl text-light-white'>
                        Sense
                    </h1>
                    <p className='text-light-white text-4xl'>
                        Sense is a freelance that came up with an idea to help deaf people so that they can feel through vibrations and sensations the rhythm and harmony of any music, style and preference.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Home