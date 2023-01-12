import React from 'react'
import laptopXbox from '../../assets/images/laptopXbox.jpeg'
import mobileXbox from '../../assets/images/gldn-XSS-Hero-Xbox-Series-S_VP2-859x540.jpeg'

const Product = () => {
    return (
        <div className="grid-cols-1 space-y-8">
            <img src={laptopXbox} className="px-3 hidden lg:block lg:py-5 lg:px-7 w-full cursor-pointer" alt="" />
            <img src={mobileXbox}
                className="lg:hidden px-3  lg:px-7 w-full cursor-pointer" alt="" />
            <div className="px-4 lg:px-8">

                <h1 className="deviceTitle text-2xl font-semibold mb-3">Xbox Series S</h1>
                <p className="mb-4"> Next-gen performance in the smallest Xbox ever
                </p>
                <button className="px-3 py-2 bg-[#0067b8] text-white font-semibold cursor-pointer">Shop now</button>
            </div>
        </div>
    )
}

export default Product