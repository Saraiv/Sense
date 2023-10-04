import React from 'react'

const Home = () =>{
    return(
        <div className='w-2/3 m-auto h-screen flex'>
            <div className='w-2/3 lg:w-full lg:text-center h-full flex align-middle justify-start items-center m-auto'>
                <div className='block w-full align-middle items-center text-center m-auto'>
                    <h1 className='pb-20 text-bold text-9xl xl:text-8xl text-light-gray'>
                        Become a user
                    </h1>
                    <input className='p-2 w-full mt-12' type='text' placeholder='Name' />
                    <input className='p-2 w-full mt-12' type='password' placeholder='Password' />
                    <input className='p-2 w-full mt-12' type='password' placeholder='Verify Password' />
                    <input className='p-2 w-full mt-12' type='email' placeholder='Email' />
                    <input className='p-2 w-full mt-12' type='text' placeholder='Location' />
                    <div className='flex m-auto align-middle justify-center text-center'>
                        <a className='p-3 mt-12 w-32 bg-light-white mx-4' href='/'>Go back</a>
                        <button className='p-3 mt-12 w-32 bg-light-white mx-4'>Register</button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default Home