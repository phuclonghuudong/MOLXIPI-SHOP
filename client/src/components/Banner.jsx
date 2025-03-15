import React from "react";
import { AiFillLike } from "react-icons/ai";
import { BsCurrencyExchange } from "react-icons/bs";
import { FaShippingFast } from "react-icons/fa";
import { HiBanknotes } from "react-icons/hi2";
import BANNER01 from "../assets/banner01.webp";
import BANNER02 from "../assets/banner02.webp";
import BANNER03 from "../assets/banner03.webp";
import BANNER04 from "../assets/banner04.webp";
import BANNER05 from "../assets/banner05.webp";
import BANNER06 from "../assets/banner06.webp";

import Slider from "react-slick";

const Banner = () => {
  const listBanner = [
    BANNER01,
    BANNER02,
    BANNER03,
    BANNER04,
    BANNER05,
    BANNER06,
  ];
  const settings = {
    // dots: true,
    infinite: true,
    speed: 500,
    autoplaySpeed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings}>
        {listBanner.map((item, index) => {
          return (
            <img
              key={"bannerImage" + index}
              className="w-full h-full object-scale-down"
              alt={"banner" + index}
              src={item}
            />
          );
        })}
      </Slider>

      <div className="p-4 grid grid-cols-2 lg:flex justify-around items-center gap-3 lg:text-xs text-xs xl:text-base">
        <div className="bg-white rounded p-4 grid lg:flex shadow animate-pulse text-orange-600  text-center items-center justify-items-center lg:justify-between w-full">
          <div className="w-10">
            <FaShippingFast size={30} />
          </div>
          <div className="w-full">
            <p>
              Vận chuyển <span className="font-semibold">TOÀN QUỐC</span>
            </p>
            <p>Thanh toán khi nhận hàng</p>
          </div>
        </div>

        <div className="bg-white rounded p-4 grid lg:flex shadow animate-pulse text-orange-600  text-center items-center justify-items-center lg:justify-between w-full">
          <div className="w-10">
            <AiFillLike size={30} />
          </div>
          <div className="w-full ">
            <p className="font-semibold">Bảo đảm chất lượng</p>
            <p>Sản phẩm đảm bảo chất lượng</p>
          </div>
        </div>

        <div className="bg-white rounded p-4 grid lg:flex shadow animate-pulse text-orange-600  text-center items-center justify-items-center lg:justify-between w-full">
          <div className="w-10">
            <HiBanknotes size={30} />
          </div>
          <div className="w-full">
            <p>
              Tiến hành <span className="font-semibold">THANH TOÁN</span>
            </p>
            <p>
              Với nhiều <span className="font-semibold">PHƯƠNG THỨC</span>
            </p>
          </div>
        </div>

        <div className="bg-white rounded p-4 grid lg:flex shadow animate-pulse text-orange-600  text-center items-center justify-items-center lg:justify-between w-full">
          <div className="w-10">
            <BsCurrencyExchange size={30} />
          </div>
          <div className="w-full">
            <p className="font-semibold">Đổi sản phẩm mới</p>
            <p>nếu sản phẩm lỗi</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
