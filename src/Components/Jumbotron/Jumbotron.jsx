import React from 'react'
import JumbotronMobileImage from '../../assets/images/halfImg.avif'
import JumbotronLaptopImage from '../../assets/images/halfImage.avif'
const Jumbotron = () => {
    return (
        <div className='flex flex-col w-full'>
            <div className="left lg:relative ">
                <img src={JumbotronMobileImage} className="lg:hidden w-full" />
                <img src={JumbotronLaptopImage} className="hidden lg:block r" alt="" />
              
                <div className="hidden lg:block lg:absolute bottom-[25%] left-[10%]">
                    <div className="flex flex-col p-4">
                        <h1 className="text-3xl font-semibold mb-4">Microsoft 365</h1>
                        <p className="mb-4">
                            Everything you need to achieve more in less time
                        </p>
                        <div className="space-x-4">

                            <button className="px-1 py-2 bg-[#0067b8] text-white mb-4 w-32">For one person</button>

                            <a className="text-black hover:underline hover:underline-offset-8 cursor-pointer font-semibold">For
                                up to six people <span>></span></a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="right lg:hidden" >
                <div className="flex flex-col p-4">
                    <h1 className="text-3xl font-semibold mb-4">Microsoft 365</h1>
                    <p className="mb-4">
                        Everything you need to achieve more in less time
                    </p>
                    <div className="space-x-4">

                        <button className="px-1 py-2 bg-[#0067b8] text-white mb-4 w-32">For one person</button>

                        <a className="text-black hover:underline hover:underline-offset-8 cursor-pointer font-semibold">For
                            up to six people <span> ></span></a>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Jumbotron