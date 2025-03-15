import React from "react";

const TextItalic = ({ title }) => {
  return (
    <div className="">
      <span className="italic"> Xin chào,</span>{" "}
      <span className="text-orange-500 font-semibold">{title}</span>
    </div>
  );
};

export default TextItalic;
