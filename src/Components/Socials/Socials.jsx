import React from 'react'
import FacebookLogo from '../../assets/images/Facebook 2x.avif'
import TwitterLogo from '../../assets/images/Twitter 2x.webp'
import YouTubeLogo from '../../assets/images/YouTube 2x.webp'
const Socials = () => {
    return (
        <>
            <div className="px-3 socialmedia flex justify-between items-center space-x-2 sm:justify-start lg:px-7">
                <span className="text-lg sm:text-xl md:text-2xl">Follow Microsoft</span>
                <img src={FacebookLogo} className="w-9 cursor-pointer" alt="" />
                <img src={TwitterLogo} className="w-9 cursor-pointer" alt="" />
                <img src={YouTubeLogo} className="w-9 cursor-pointer" alt="" />
            </div>
            <div className="flex flex-col px-3 my-3 md:items-end">

                <button className="px-2 py-3 text-black bg-[#d9d9d9] cursor-pointer hover:bg-white hover:shadow-xl"><span><i
                    className="fa-solid fa-arrow-up"></i></span> Back on top</button>
            </div>
        </>
    )
}

export default Socials