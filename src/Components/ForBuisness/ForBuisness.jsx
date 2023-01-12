import React from 'react'
import forBuisnessImage1 from '../../assets/images/forbuisness1.avif'
import forBuisnessImage2 from '../../assets/images/forBuisness2.webp'
import forBuisnessImage3 from '../../assets/images/forBuiness3.webp'
import forBuisnessImage4 from '../../assets/images/forBuisness4.webp'
const ForBuisness = () => {
    return (
        <>
            <h1 className="text-2xl font-semibold text-black mt-5 mb-3 px-3 lg:px-7">For buisness</h1>
            <div
                className="forBuisness  h-full w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-3 px-3 lg:px-7">

                <div className="forBuisnessItems my-5 ">
                    <img src={forBuisnessImage1} className="w-full cursor-pointer mb-2" alt=""/>
                        <div className="space-y-3 ">
                            <button className="px-2 py-1 text-black bg-[#ffb900] font-semibold">New</button>
                            <h1 className="deviceTitle text-2xl font-semibold mb-3">Surface for Buisness Family</h1>
                            <p className="mb-4"> Surface for Business devices enable work on your team's terms with flexibility,
                                built-in security and the power they need to succeed.
                            </p>
                            <button className="px-3 py-2 bg-[#0067b8] text-white font-semibold cursor-pointer">Shop now</button>
                        </div>
                </div>
                <div className="forBuisnessItems my-5 ">

                    <img src={forBuisnessImage2} className="w-full cursor-pointer" alt=""/>
                        <div className="space-y-3 mt-5 md:mt-14">

                            <h1 className="deviceTitle text-2xl font-semibold mb-3">Get Microsoft Teams for free</h1>
                            <p className="mb-4"> Online meetings, chat and shared cloud storage – all in one place.
                            </p>
                            <button className="px-3 py-2 bg-[#0067b8] text-white font-semibold cursor-pointer">Sign up for free</button>
                        </div>
                </div>
                <div className="forBuisnessItems my-5 ">

                    <img src={forBuisnessImage3} className="w-full cursor-pointer" alt=""/>
                        <div className="space-y-3 mt-5 md:mt-14">

                            <h1 className="deviceTitle text-2xl font-semibold mb-3">
                                Welcome to your Windows 365Cloud PC
                            </h1>
                            <p className="mb-4"> Securely stream your Windows experience from the Microsoft cloud to any device.
                            </p>
                            <button className="px-3 py-2 bg-[#0067b8] text-white font-semibold cursor-pointer">Get it today</button>
                        </div>
                </div>
                <div className="forBuisnessItems my-5">

                    <img src={forBuisnessImage4} className="w-full cursor-pointer" alt=""/>
                        <div className="space-y-3 mt-5 md:mt-14">

                            <h1 className="deviceTitle text-2xl font-semibold mb-3">Thrive in a hybrid world</h1>
                            <p className="mb-4"> Discover tools, resources and strategies to help your employees succeed in the new
                                world of flexible work. r
                            </p>
                            <button className="px-3 py-2 bg-[#0067b8] text-white font-semibold cursor-pointer">Shop now</button>
                        </div>
                </div>
            </div>
        </>
    )
}

export default ForBuisness