import React, { useState } from 'react'
import { Player } from '@lottiefiles/react-lottie-player'
import { SplashScreen } from './helpers/Lottie'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Nav, Home, AboutUs, Pricing, ContactUs, Register } from './helpers/Components'

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
                src = {JSON.stringify(SplashScreen)}
                style={{ height: '300px', width: '300px' }}
                
            />
        </div>
        :
        <Router>
            <div id='home' className='bg-background-main w-screen h-screen'>
                <Routes>
                    <Route
                        path='/'
                        element={
                            <>
                                <Nav />
                                <Home />
                                <AboutUs />
                                <Pricing />
                                <ContactUs />
                            </>
                        }
                    />
                    <Route
                        path='/register'
                        element={  <Register /> }
                    />
                </Routes>
            </div>
        </Router>
        
    )
}

export default Main