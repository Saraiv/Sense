import React, { useState } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import SplashScreenLottie from '../lottie/SplashScreen.json'

const SplashScreen = () => {
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
            <div className='m-auto w-2/3 h-screen'>
                <h1 className=' font-bold text-5xl text-light-white'> Hello World!</h1>
            </div>
        </div>
    )
}

export default SplashScreen