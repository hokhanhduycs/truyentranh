import React from "react";
import "./CustomButton.scss";

const CustomButton = ({ children, ...attr }: { children: React.ReactNode }) => {
   return (
      <button className="customButton" {...attr}>
         {children}
      </button>
   );
};

export default CustomButton;
