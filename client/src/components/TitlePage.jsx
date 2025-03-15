import React from "react";
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";

const TitlePage = ({ title }) => {
  return (
    <div className="w-full h-14 bg-[#f5f5f5] text-sm flex items-center p-4 shadow-md">
      <Link to={"/"} className="hover:text-orange-500">
        Trang chủ
      </Link>
      <span>
        <MdNavigateNext size={18} />
      </span>
      <Link to={""} className="text-orange-500 cursor-pointer">
        {title}
      </Link>
    </div>
  );
};

export default TitlePage;
