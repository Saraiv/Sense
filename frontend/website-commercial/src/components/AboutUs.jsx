import React from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import Waves from '../lottie/Waves.json'

const AboutUs = () =>{
    return(
        <div className='h-full flex align-middle justify-start items-center bg-light-white'>
            <div className='w-2/3 m-auto text-background-main'>
                <h1 className='text-bold text-9xl py-32'>About Us</h1>
                <p className='text-4xl'>
                    Sense is a freelance that came up with an idea to help deaf people so that they can feel through vibrations and sensations the rhythm and harmony of any music, style and preference.
                </p>
                <Player
                    ref = {this}
                    autoplay = {true}
                    loop = {true}
                    src = {JSON.stringify(Waves)}
                    style={{ height: '400px', width: '400px' }}
                    
                />
            </div>
        </div>
    )
}

export default AboutUs