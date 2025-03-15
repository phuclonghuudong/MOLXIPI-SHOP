import React from "react";

const TextIcon = ({ icon, title, text }) => {
  return (
    <div className="flex justify-start items-center gap-2 text-sm cursor-text">
      <span className="text-orange-600 text-md">{icon}</span>
      <p className="font-bold text-slate-800">{title}:</p>
      <p className="text-ellipsis">{text}</p>
    </div>
  );
};

export default TextIcon;
