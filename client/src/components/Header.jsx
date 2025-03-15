import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";
import { FaMapLocationDot, FaUserAstronaut } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

import { Link } from "react-router-dom";
import LOGO from "../assets/logo.svg";
import IconHeader from "./IconHeader";
import MenuMobile from "./MenuMobile";

const InputSearch = ({ close }) => {
  return (
    <div className=" flex justify-center items-center p-2 border rounded gap-2">
      <div className="flex justify-between items-center w-full border-r border-slate-300">
        <input
          type="text"
          className="w-full h-full outline-none rounded text-sm"
          placeholder="Tìm kiếm sản phẩm"
          autoFocus
        ></input>
        <button className="pr-2 hover:text-orange-600 duration-500">
          <CiSearch size={20} />{" "}
        </button>
      </div>

      <span className="hover:text-red-600 duration-500" onClick={close}>
        <IoClose size={20} />
      </span>
    </div>
  );
};

const Header = () => {
  const [openSearchInput, setOpenSearchInput] = useState(false);
  const [openMobileMenu, setOpenMobileMenu] = useState(false);
  return (
    <header className="h-25 lg:h-20 lg:shadow-md sticky top-0 z-50 flex flex-col justify-center bg-yellow-50 lg:bg-white p-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="block lg:hidden ">
          <button
            onClick={() => setOpenMobileMenu((pre) => !pre)}
            className="hover:text-orange-500 "
          >
            <IoMdMenu size={25} />
          </button>
          <button
            onClick={() => setOpenSearchInput((pre) => !pre)}
            className="hover:text-orange-500"
          >
            <CiSearch size={25} className="" />
          </button>
        </div>

        <Link to={"/"} className="pr-4">
          <img src={LOGO} className="lg:w-20 lg:h-20 w-12 h-12" />
        </Link>

        <div className="hidden lg:flex w-full p-2">
          <div className=" w-full h-full p-1 border-b border-slate-300 flex justify-between gap-4">
            <div className="flex justify-center items-center gap-2">
              <p className="text-orange-600">
                <FaUserAstronaut size={18} />
              </p>
              <p className="text-xs xl:text-sm font-semibold">
                HOTLINE:{" "}
                <span className="hover:text-slate-700 text-red-600 xl:text-lg text-sm">
                  <span>0123456789</span> | <span>0987654321</span>
                </span>
              </p>
            </div>

            <div className="flex justify-center items-center gap-2">
              <p className="text-orange-600">
                <FaMapLocationDot size={18} />
              </p>
              <p className="xl:text-sm text-xs font-semibold">
                HỆ THỐNG CỬA HÀNG
              </p>
            </div>

            <div className="flex justify-center items-center gap-2">
              <div className="bg-slate-100 flex justify-center items-center w-full h-full p-1 rounded-md group focus-within:border-orange-500 overflow-hidden border">
                <input
                  className="bg-transparent outline-none text-xs ml-2 lg:w-40 xl:w-72"
                  placeholder="Tìm kiếm sản phẩm...."
                />
                <button className=" mr-2 group-focus-within:text-orange-500">
                  <CiSearch size={20} className="" />
                </button>
              </div>
            </div>
          </div>
        </div>

        <IconHeader />
      </div>

      {openSearchInput && (
        <div className="block lg:hidden p-2">
          <InputSearch close={() => setOpenSearchInput(false)} />
        </div>
      )}
      {openMobileMenu && <MenuMobile close={() => setOpenMobileMenu(false)} />}
    </header>
  );
};

export default Header;
