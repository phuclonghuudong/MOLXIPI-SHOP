import React from "react";
import NoCart from "../assets/empty-cart.webp";
import TitlePage from "../components/TitlePage";

const Cart = () => {
  return (
    <section className="bg-white">
      <div className="">
        <TitlePage title="Giỏ hàng" />
      </div>
      <div className="p-4">
        <div className="p-4 bg-[#f5f5f5] rounded shadow-md font-semibold">
          <p>GIỎ HÀNG CỦA BẠN</p>
        </div>

        <div className="justify-center grid items-center text-center">
          <img src={NoCart} className="w-96 h-full object-scale-down" />
          <p>Không có sản phẩm nào trong giỏ hàng</p>
        </div>
      </div>
    </section>
  );
};

export default Cart;
