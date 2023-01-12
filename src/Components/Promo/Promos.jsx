import React from 'react'
import windowsLogo from '../../assets/images/icon-LL-Windows-Logo-80x80.webp'
import surfaceLogo from '../../assets/images/surfacedevices.webp'
import xboxLogo from '../../assets/images/xbox.webp'
const Promos = () => {
    return (
        <div className="promo md:!my-14 space-y-4 flex flex-col md:flex-row md:justify-center mb-3">
            <div className="item flex flex-col items-center lg:mx-6 md:mx-4 space-y-3 mt-5 ">
                <img src={windowsLogo} alt="" />
                <span className="text-[#0067b8] underline cursor-pointer">Choose your Microsoft 365</span>
            </div>
            <div className="item flex flex-col items-center lg:mx-6 md:mx-4 space-y-3">
                <img src={surfaceLogo} alt="" />
                <span className="text-[#0067b8] underline cursor-pointer">Explore Surface Devices</span>
            </div>
            <div className="item flex flex-col items-center lg:mx-6 md:mx-4 space-y-3">
                <img src={xboxLogo} alt="" />
                <span className="text-[#0067b8] underline cursor-pointer">Buy Xbox games</span>
            </div>
            <div className="item flex flex-col items-center lg:mx-6 md:mx-4 space-y-3">
                <img src={windowsLogo} alt="" />
                <span className="text-[#0067b8] underline cursor-pointer">Get Windows 11</span>
            </div>
        </div>
    )
}

export default Promos