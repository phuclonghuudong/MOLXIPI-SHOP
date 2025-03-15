import React from "react";
import LOGO_FOOTER from "../assets/bct.webp";

const Footer = () => {
  return (
    <footer className="border-t bg-orange-600">
      <div className="container mx-auto p-4 text-center">
        <div className="w-full h-full items-center justify-center grid text-white lg:text-md text-sm gap-1">
          <p>Công ty TNHH MOLXIPI SPORTS</p>
          <p>Địa chỉ: Long Hựu Đông, Huyện Cần Đước, Tỉnh Long An</p>
          <p>Email: info@molxipi.com</p>
          <div className="w-full h-full items-center justify-center flex">
            <img src={LOGO_FOOTER} className="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
