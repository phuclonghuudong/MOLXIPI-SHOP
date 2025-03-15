import React from "react";
import FilterProduct from "../components/FilterProduct";
import TitlePage from "../components/TitlePage";

const SaleOff = () => {
  return (
    <section className="bg-white">
      <div className="">
        <TitlePage title="Sale off" />
      </div>

      <div className="grid grid-flow-col-dense grid-cols-5 p-4 gap-4">
        <div className="hidden lg:block lg:col-span-1">
          <FilterProduct />
        </div>

        <div className="col-span-5 lg:col-span-4 grid gap-4">
          <div className="p-4 bg-[#f5f5f5] rounded shadow-md font-semibold text-sm">
            <p>SẢN PHẨM THANH LÝ</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4  justify-center items-center gap-4 ">
            {new Array(10).fill(null).map((c, index) => {
              return (
                <div
                  key={index + "loadingCategory"}
                  className="bg-white rounded p-2 w-full h-full grid gap-2 shadow animate-pulse"
                >
                  <div className="bg-blue-200 min-h-24 rounded"></div>
                  <div className="bg-blue-200 h-8 rounded"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* <div className="p-2">
        <ListProductNoData />
      </div> */}
    </section>
  );
};

export default SaleOff;
