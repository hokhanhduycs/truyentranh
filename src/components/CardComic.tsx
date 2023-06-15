import Image from "next/image";
import React from "react";
import "./CardComic.scss";

const CardComic = () => {
   return (
      <div className="cardcomic">
         <div className="cardcomic__container">
            <div className="cardcomic__barner">
               <Image
                  className="cardcomic__img"
                  src="/comic/demo.png"
                  width={200}
                  height={250}
                  sizes="100vw"
                  alt="Picture of the author"
               />
               <div className="cardcomic__tag">
                  <h3 className="cardcomic__title">Truyen tranh demo</h3>
               </div>
            </div>
            <div className="cardcomic__chaps">
               <p className="cardcomic__chap">Chap 3</p>
               <p className="cardcomic__chap">Chap 2</p>
               <p className="cardcomic__chap">Chap 1</p>
            </div>
         </div>
      </div>
   );
};

export default CardComic;
