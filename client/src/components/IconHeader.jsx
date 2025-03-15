import React, { useState } from "react";
import toast from "react-hot-toast";
import { BiSolidBinoculars } from "react-icons/bi";
import { FaCartArrowDown, FaUser } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { IoLogInOutline } from "react-icons/io5";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import IMG_NONE_CART from "../assets/empty-cart.webp";
import SummaryApi from "../common/SummaryApi";
import { logout } from "../store/userSlice";
import Axios from "../utils/Axios";
import AxiosToastError from "../utils/AxiosToast";
import TabLinkHeader from "./TabLinkHeader";

const IconHeader = () => {
  const [loading, setLoading] = useState(false);
  const [openTab, setOpenTab] = useState(false);
  const [openTabId, setOpenTabId] = useState();
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      setLoading(true);
      const response = await Axios({
        ...SummaryApi.logout,
      });

      const { data: responseData } = response;

      if (responseData?.success) {
        toast.success(responseData?.message);
        dispatch(logout());
        localStorage.clear();
        setOpenTab(false);
      }
    } catch (error) {
      AxiosToastError(error);
    } finally {
      setLoading(false);
    }
  };

  const TitleIcon = ({ Id, openTabX, iconTitle: ICON, title, quantity }) => {
    return (
      <div
        onMouseEnter={() => {
          setOpenTab(openTabX);
          setOpenTabId(Id);
        }}
        className="w-full h-full flex flex-col justify-center items-center cursor-pointer gap-2 group"
      >
        <div
          className={` p-2 md:border rounded-full hover:text-orange-900 hover:border-orange-900 duration-300 ${
            quantity ? "relative" : ""
          } ${
            openTab === true && openTabId === Id
              ? "text-orange-900 border-orange-900"
              : "text-orange-600 border-slate-200"
          }`}
        >
          {quantity && (
            <div
              className={`absolute rounded-full bg-orange-600 text-white text-xs ${
                Number(quantity) > 9 ? "h-5 w-5" : "h-4 w-4"
              } items-center text-center justify-center flex top-0 -right-2`}
            >
              <span>{quantity}</span>
            </div>
          )}
          <ICON size={20} />
        </div>
        <p
          className={`text-xs hidden xl:block  font-semibold group-hover:text-orange-500 duration-500 ${
            openTab === true && openTabId === Id
              ? "text-orange-900 "
              : "text-slate-600 "
          }}`}
        >
          {title}
        </p>
      </div>
    );
  };

  return (
    <div className="w-40 lg:w-52 h-full">
      <div className="w-full h-full flex items-center justify-center md:gap-1">
        <div
          onMouseLeave={() => setOpenTab(false)}
          onMouseEnter={() => {
            setOpenTabId("TC");
          }}
          className=" w-32 h-full "
        >
          <div className="w-full h-full flex flex-col justify-center items-center cursor-pointer gap-2 group">
            <TitleIcon
              Id="TC"
              openTabX={true}
              iconTitle={BiSolidBinoculars}
              title="TRA CỨU"
            />
          </div>
          <div className="block h-full w-full text-xs lg:text-sm ">
            {openTab && openTabId === "TC" && (
              <div
                onMouseLeave={() => setOpenTab(false)}
                className=" bg-white shadow-lg border z-10 absolute h-full uppercase"
              >
                <div className="grid h-full items-center font-semibold text-center">
                  <TabLinkHeader
                    url={"/kiem-tra-don-hang"}
                    text="KIỂM TRA ĐƠN HÀNG"
                  />
                  <TabLinkHeader
                    url={"/kiem-tra-bao-hanh"}
                    text="KIỂM TRA BẢO HÀNH"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <div
          onMouseLeave={() => setOpenTab(false)}
          onMouseEnter={() => {
            setOpenTabId("TK");
          }}
          className=" w-32 h-full "
        >
          <div className="w-full h-full flex flex-col justify-center items-center cursor-pointer gap-2 group">
            <TitleIcon
              Id="TK"
              openTabX={true}
              iconTitle={FaUser}
              title={"TÀI KHOẢN"}
            />
          </div>
          <div className="block h-full w-full text-xs lg:text-sm">
            {openTab && openTabId === "TK" && (
              <div
                onMouseLeave={() => {
                  setOpenTab(false);
                }}
                className="bg-white shadow-lg border z-0 absolute h-full  uppercase right-12 "
              >
                <div className="grid h-full items-center font-semibold text-center">
                  {user?._id?.length > 0 ? (
                    <>
                      <TabLinkHeader url={"/thanh-vien"} text="TRANG CÁ NHÂN" />
                      <TabLinkHeader
                        onClick={handleLogout}
                        text={`${loading ? "......" : "Thoát"}`}
                      />
                    </>
                  ) : (
                    <>
                      <TabLinkHeader
                        url={"/thanh-vien/dang-nhap"}
                        icon={IoLogInOutline}
                        text="ĐĂNG NHẬP"
                      />
                      <TabLinkHeader
                        url={"/thanh-vien/dang-ky"}
                        icon={FaUserPlus}
                        text="ĐĂNG KÝ"
                      />
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

        <div
          onMouseLeave={() => setOpenTab(false)}
          onMouseEnter={() => {
            setOpenTabId("GH");
          }}
          className="w-32 h-full "
        >
          <div className="w-full h-full flex flex-col justify-center items-center cursor-pointer gap-2 group">
            <TitleIcon
              Id="GH"
              openTabX={true}
              iconTitle={FaCartArrowDown}
              title="GIỎ HÀNG"
              quantity={2}
            />
          </div>
          <div className="block h-full w-full text-xs lg:text-sm ">
            {openTab && openTabId === "GH" && (
              <div
                onMouseLeave={() => setOpenTab(false)}
                className=" bg-white right-10 shadow-lg border z-10 absolute uppercase w-40 h-40 lg:w-60 items-center justify-center flex"
              >
                <Link
                  to={"/gio-hang"}
                  className="grid items-center font-semibold"
                >
                  <div className="text-center items-center p-4">
                    <img src={IMG_NONE_CART} className="object-scale-down" />
                    <p>Không có sản phẩm</p>
                  </div>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default IconHeader;
