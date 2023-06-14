import Image from 'next/image'
import React from 'react'
import './Navbar.scss'

const page = () => {
  return (
    <div className='navbar'>
        <div className='navbar__container row grid wide'>
            <div className="navbar__logo l-4 c-12">
              {/* <Image/

              > */}
              truyentranh.blog
            </div>
            <div className="navbar__items l-8 c-12">
              <div className="navbar__item">Home</div>
              <div className="navbar__item">About</div>
            </div>
        </div>
    </div>
  )
}

export default page