import React, { useState } from 'react'

const Hamburger = () => {
  const [hamburger, setHamburger] = useState(false)

  const hamburgerToggleFunc = () => {
    console.log('dd')
    const msFeatures = document.getElementById('msFeatures')
    if (!hamburger) {
      msFeatures.classList.remove('-translate-x-full')
      msFeatures.classList.remove('w-fit')
      setHamburger(true)
    }
    else {
      msFeatures.classList.add('-translate-x-full')
      msFeatures.classList.add('w-full')
      setHamburger(false)

    }
  }
  return (
    <div className='hamburger cursor-pointer lg:hidden' onClick={hamburgerToggleFunc}>
      <div className='line my-1 bg-black h-0.5 w-6'></div>
      <div className='line my-1 bg-black h-0.5 w-6'></div>
      <div className='line my-1 bg-black h-0.5 w-6'></div>
    </div>
  )
}

export default Hamburger