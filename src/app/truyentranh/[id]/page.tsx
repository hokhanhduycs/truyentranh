import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: 'Truyện Tranh demo [chap 1] - Truyen tranh',
}

const TruyenTranh = () => {
  return (
    <div className='comic grid wide'>
      <div className="comic__container">
        <h1 className="comic__title">Truyện Tranh demo</h1>
        <div className="comic___timeUpdate">[Cập nhật lúc: 2023-06-01 06:38:06]</div>
        <div className="comic__infoContainer row">
          <div className="comic__imgContainer l-6">
            <Image
              className='comic__img'
              src="/comic/demo.png"
              width={270}
              height={350}
              sizes="100vw"
              alt="Picture of the author"
              />
          </div>
          <div className="comic__info l-6 row">

            <div className="c-4"></div>
            <div className="c-8"></div>

            
          </div>

        </div>


      </div>
    </div>
  )
}

export default TruyenTranh