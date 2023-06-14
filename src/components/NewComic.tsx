import React from 'react'
import './NewComic.scss'
import CardComic from './CardComic'

const NewComic = () => {
  return (
    <div className='grid wide newcomic'>
        <div className="newcomic__container">
            <h2 className="newcomic__title">Truyện mới cập nhật</h2>
            <div className="newcomic__items row">
                <div className="newcomic__item lx-25 l-3 m-4 c-6">
                    <CardComic/>
                </div>
                <div className="newcomic__item lx-25 l-3 m-4 c-6">
                    <CardComic/>
                </div>
                <div className="newcomic__item lx-25 l-3 m-4 c-6">
                    <CardComic/>
                </div>
                <div className="newcomic__item lx-25 l-3 m-4 c-6">
                    <CardComic/>
                </div>
                <div className="newcomic__item lx-25 l-3 m-4 c-6">
                    <CardComic/>
                </div>
                
            </div>

        </div>
    </div>
  )
}

export default NewComic