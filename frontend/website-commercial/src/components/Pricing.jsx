import React from 'react'

const Pricing = () =>{
    return(
        <div className='h-full lg:h-fit flex align-middle justify-start items-center bg-light-white'>
            <div className='w-2/3 m-auto text-background-main'>
                <h1 className='py-32 text-bold text-9xl xl:text-8xl lg:text-center'>Pricing</h1>
                <div className='flex w-full lg:block'>
                    <div className='bg-background-main bg-opacity-80 rounded-3xl w-1/3 h-80 text-light-gray m-auto mr-5 relative lg:w-1/2 lg:text-center lg:m-auto lg:mb-4'>
                        <h1 className='p-8 xl:p-6 text-4xl xl:text-3xl'>59,99€</h1>
                        <p className='p-8 xl:p-6'>
                            The chapest package that includes only the device and 1 year warrenty.
                        </p>
                        <div className='w-full text-right absolute right-4 bottom-4'>
                            <a className='font-bold text-lg xl:text-base' href="_blank">More Info Here</a>
                        </div>
                    </div>
                    <div className='bg-background-main bg-opacity-80 rounded-3xl w-1/3 h-80 text-light-gray m-auto mx-5 relative lg:w-1/2 lg:text-center lg:m-auto lg:mb-4'>
                        <h1 className='p-8 xl:p-6 text-4xl xl:text-3xl'>89,99€</h1>
                        <p className='p-8 xl:p-6'>
                            The premium package that includes three devicess and 2 year warrenty.
                        </p>
                        <div className='w-full text-right absolute right-4 bottom-4'>
                            <a className='font-bold text-lg xl:text-base' href="_blank">More Info Here</a>
                        </div>
                    </div>
                    <div className='bg-background-main bg-opacity-80 rounded-3xl w-1/3 h-80 text-light-gray m-auto ml-5 relative lg:w-1/2 lg:text-center lg:m-auto lg:mb-4'>
                        <h1 className='p-8 xl:p-6 text-4xl xl:text-3xl'>119,99€</h1>
                        <p className='p-8 xl:p-6'>
                            The premium package that includes five devices and 3 year warrenty.
                        </p>
                        <div className='w-full text-right absolute right-4 bottom-4'>
                            <a className='font-bold text-lg xl:text-base' href="_blank">More Info Here</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Pricing