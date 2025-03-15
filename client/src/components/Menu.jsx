import React from "react";
import { Link } from "react-router-dom";
import menuList from "../common/menuList";

const Menu = () => {
  return (
    <div className="bg-orange-600 ">
      <div className="container mx-auto ">
        <div className="uppercase justify-between text-slate-50 hidden lg:flex text-center">
          {menuList[0] &&
            menuList?.map((item, index) => {
              return (
                <Link
                  key={"menu-list" + index}
                  to={item?.url}
                  className="hover:text-orange-500 z-10 cursor-pointer p-2 duration-500 w-full hover:bg-white"
                >
                  <p className="text-sm font-semibold">{item?.title}</p>
                </Link>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Menu;
