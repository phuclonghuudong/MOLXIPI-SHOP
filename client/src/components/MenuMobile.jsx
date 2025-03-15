import React from "react";
import { IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";
import menuList from "../common/menuList.js";
const MenuMobile = ({ close }) => {
  return (
    <div className="lg:hidden block  fixed top-0 bottom-0 right-0 left-0 z-50 w-full h-full bg-white ">
      <div className="flex justify-center items-center bg-orange-600 p-1 text-center">
        <div className="w-full text-xs text-white font-semibold">
          DANH MỤC SẢN PHẨM
        </div>
        <button onClick={close} className="hover:text-black">
          <IoClose size={25} />
        </button>
      </div>

      <div className="px-4 py-2 gap-2 grid justify-start uppercase">
        {menuList[0] &&
          menuList.map((item, index) => {
            return (
              <Link
                key={"menu-list-mobile" + index}
                onClick={close}
                to={item?.url}
                className="hover:text-orange-500 cursor-pointer duration-300"
              >
                <p className="text-xs ">{item?.title}</p>
              </Link>
            );
          })}
      </div>
    </div>
  );
};

export default MenuMobile;
