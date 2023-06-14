import CustomButton from "@/components/CustomButton";
import Image from "next/image";
import React from "react";

export const metadata = {
   title: "Truyện Tranh demo - Truyen tranh",
};

const TruyenTranh = () => {
   return (
      <div className="comic grid wide">
         <div className="comic__container">
            <h1 className="comic__title">Truyện Tranh demo</h1>
            <div className="comic___timeUpdate">
               [Cập nhật lúc: 2023-06-01 06:38:06]
            </div>
            <div className="comic__infoContainer row">
               <div className="comic__imgContainer l-6">
                  <Image
                     className="comic__img"
                     src="/comic/demo.png"
                     width={220}
                     height={300}
                     sizes="100vw"
                     alt="Picture of the author"
                  />
               </div>
               <div className="comic__info l-6 row">
                  <div className="comic__table row">
                     <div className="comic__tableTitle c-4">Tác giả:</div>
                     <div className="comic__tableContent c-8">Khanh Duy</div>
                     <div className="comic__tableTitle c-4">Tình trạng:</div>
                     <div className="comic__tableContent c-8">
                        Đang cập nhật
                     </div>
                     <div className="comic__tableTitle c-4">Thể loại:</div>
                     <div className="comic__tableContent c-8">Hành động</div>
                     <div className="comic__tableTitle c-4">Lượt xem:</div>
                     <div className="comic__tableContent c-8">100.000</div>
                  </div>
                  <div className="comic__evaluate">
                     <div className="comic__start">*****</div>
                     <div className="comic__conts">
                        <strong>43.234.000</strong> Người theo dõi
                     </div>
                  </div>
                  <div className="comic__button row">
                     <CustomButton>Đọc từ đầu</CustomButton>
                     <CustomButton>Đọc mới nhất</CustomButton>
                  </div>
               </div>
            </div>

            {/* ========= */}

            <div className="comic__chaps">
               <h2 className="comic__chapsTitle">Danh sách chương</h2>
               <hr />
               <div className="comic__table">
                  <div className="commic_tableHeader row">
                     <div className="comic__tableTitle he c-4">
                        <strong>Số chương</strong>
                     </div>
                     <div className="comic__tableContent c-8">
                        <strong>Cập nhật</strong>
                     </div>
                  </div>
                  <div className="commic_tableRow row">
                     <div className="comic__tableTitle he c-4">Chương 3</div>
                     <div className="comic__tableContent c-8">20/10/2023</div>
                  </div>
                  <div className="commic_tableRow row">
                     <div className="comic__tableTitle he c-4">Chương 2</div>
                     <div className="comic__tableContent c-8">20/10/2023</div>
                  </div>
                  <div className="commic_tableRow row">
                     <div className="comic__tableTitle he c-4">Chương 1</div>
                     <div className="comic__tableContent c-8">20/10/2023</div>
                  </div>
               </div>
            </div>

            {/* ======== */}

            <div className="comic__summary">
               <h2 className="comic__summaryTitle">Tóm tắt nội dung</h2>
               <hr />
               <p className="comic__summaryContent">
                  One Piece là câu truyện kể về Luffy và các thuyền viên của
                  mình. Khi còn nhỏ, Luffy ước mơ trở thành Vua Hải Tặc. Cuộc
                  sống của cậu bé thay đổi khi cậu vô tình có được sức mạnh có
                  thể co dãn như cao su, nhưng đổi lại, cậu không bao giờ có thể
                  bơi được nữa. Giờ đây, Luffy cùng những người bạn hải tặc của
                  mình ra khơi tìm kiếm kho báu One Piece, kho báu vĩ đại nhất
                  trên thế giới. Trong One Piece, mỗi nhân vật trong đều mang
                  một nét cá tính đặc sắc kết hợp cùng các tình huống kịch tính,
                  lối dẫn truyện hấp dẫn chứa đầy các bước ngoặt bất ngờ và cũng
                  vô cùng hài hước đã biến One Piece trở thành một trong những
                  bộ truyện nổi tiếng nhất không thể bỏ qua. Hãy đọc One Piece
                  để hòa mình vào một thế giới của những hải tặc rộng lớn, đầy
                  màu sắc, sống động và thú vị, cùng đắm chìm với những nhân vật
                  yêu tự do, trên hành trình đi tìm ước mơ của mình.
               </p>
            </div>
         </div>
      </div>
   );
};

export default TruyenTranh;
