import React, { useState } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import SplashScreenLottie from '../lottie/SplashScreen.json'
import Nav from './Nav'
import Home from './Home'
import AboutUs from './AboutUs'
import Pricing from './Pricing'
import ContactUs from './ContactUs'

const Main = () => {
    const [completed, setCompleted] = useState(false)

    return (
        !completed ? 
        <div className='bg-background-main flex align-middle justify-center h-screen items-center'>
            <Player 
                onEvent={ e => {
                    if(e === 'complete') setCompleted(true)
                }}
                ref = {this}
                autoplay = {true}
                loop = {false}
                src = {JSON.stringify(SplashScreenLottie)}
                style={{ height: '300px', width: '300px' }}
                
            />
        </div>
        :
        <div className='bg-background-main w-screen h-screen'>
            <Nav />
            <Home />
            <AboutUs />
            <Pricing />
            <ContactUs />
        </div>
    )
}

export default Main