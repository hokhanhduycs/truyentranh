import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import React from "react";

export const metadata = {
   title: "Truyện Tranh demo [Chap 1] - Truyen tranh",
};
const Chap = () => {
   return (
      <div className="grid wide chap">
         <div className="chap__container">
            <div className="chap__server">
               <CustomButton>Server 1</CustomButton>
               <CustomButton>Server 2</CustomButton>
            </div>
            <div className="chap__controlerContainer row">
               <div className="chap_contrlerHome">Home</div>
               <div className="chap_contrlerChaps">Chaps</div>
               <div className="chap_contrler row">
                  <CustomButton>Press</CustomButton>
                  <input type="text" value="Chap 1" />
                  <CustomButton>Next</CustomButton>
               </div>
            </div>
            <div className="chap__content">
               <Image src="/chaps/1.png" width={800} height={800} alt="img 1" />
               <Image src="/chaps/2.png" width={800} height={800} alt="img 2" />
               <Image src="/chaps/3.png" width={800} height={800} alt="img 3" />
               <Image src="/chaps/4.png" width={800} height={800} alt="img 4" />
               <Image src="/chaps/5.png" width={800} height={800} alt="img 5" />
               <Image src="/chaps/6.png" width={800} height={800} alt="img 6" />
               <Image src="/chaps/7.png" width={800} height={800} alt="img 7" />
               <Image src="/chaps/8.png" width={800} height={800} alt="img 8" />
               <Image src="/chaps/9.png" width={800} height={800} alt="img 9" />
               <Image
                  src="/chaps/10.png"
                  width={800}
                  height={800}
                  alt="img 10"
               />
               <Image
                  src="/chaps/11.png"
                  width={800}
                  height={800}
                  alt="img 11"
               />
               <Image
                  src="/chaps/12.png"
                  width={800}
                  height={800}
                  alt="img 12"
               />
               <Image
                  src="/chaps/13.png"
                  width={800}
                  height={800}
                  alt="img 13"
               />
               <Image
                  src="/chaps/14.png"
                  width={800}
                  height={800}
                  alt="img 14"
               />
               <Image
                  src="/chaps/15.png"
                  width={800}
                  height={800}
                  alt="img 15"
               />
            </div>
         </div>
      </div>
   );
};

export default Chap;
