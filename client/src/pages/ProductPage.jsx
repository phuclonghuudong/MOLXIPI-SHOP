import React from "react";
import ListProductNoData from "../components/ListProductNoData";
import TitlePage from "../components/TitlePage";

const ProductPage = () => {
  return (
    <section className="bg-white">
      <div className="">
        <TitlePage title="Tất cả sản phẩm" />
      </div>
      <div className="h-10 p-4">
        <p className="font-semibold uppercase ">Tất cả sản phẩm</p>
      </div>

      <div className="p-2">
        <ListProductNoData />
      </div>
    </section>
  );
};

export default ProductPage;
