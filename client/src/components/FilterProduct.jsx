import React from "react";

const FilterProduct = () => {
  return (
    <div className=" border rounded h-full p-2">
      {/* filter percent */}
      <div className="border-b-2 p-4 border-slate-100">
        <p className="font-semibold uppercase text-sm pb-3">MỨC GIẢM GIÁ</p>
        <div className="grid gap-4 h-36 overflow-auto scrollbarCustom">
          {new Array(6).fill(null).map((item, index) => {
            return (
              <div className="items-center gap-2 flex  hover:text-orange-500">
                <input
                  type="checkbox"
                  id={`percent` + 20 + index * 10}
                  className="accent-orange-500 peer-checked:blue-500"
                />
                <label
                  htmlFor={`percent` + 20 + index * 10}
                  className="text-xs w-full"
                >
                  {20 + index * 10}%
                </label>
              </div>
            );
          })}
        </div>
      </div>

      {/* filter price */}
      <div className="border-b-2 p-4 border-slate-100">
        <p className="font-semibold uppercase text-sm pb-3">CHỌN MỨC GIÁ</p>
        <div className="grid gap-4 h-36 overflow-auto scrollbarCustom">
          <div className="items-center gap-2 flex  hover:text-orange-500">
            <input
              type="checkbox"
              id={`price-duoi-500`}
              className="accent-orange-500 "
            />
            <label htmlFor="price-duoi-500" className="text-xs w-full">
              Dưới 500.000đ
            </label>
          </div>
          <div className="items-center gap-2 flex  hover:text-orange-500">
            <input
              type="checkbox"
              id={`price-500-1000`}
              className="accent-orange-500 "
            />
            <label htmlFor="price-500-1000" className="text-xs w-full">
              500.000đ - 1 triệu
            </label>
          </div>
          <div className="items-center gap-2 flex  hover:text-orange-500">
            <input
              type="checkbox"
              id={`price-1000-2000`}
              className="accent-orange-500 "
            />
            <label htmlFor="price-1000-2000" className="text-xs w-full">
              1 - 2 triệu
            </label>
          </div>
          <div className="items-center gap-2 flex  hover:text-orange-500">
            <input
              type="checkbox"
              id={`price-2000-3000`}
              className="accent-orange-500 "
            />
            <label htmlFor="price-2000-3000" className="text-xs w-full">
              2 - 3 triệu
            </label>
          </div>
          <div className="items-center gap-2 flex  hover:text-orange-500">
            <input
              type="checkbox"
              id={`price-tren-3000`}
              className="accent-orange-500 "
            />
            <label htmlFor="price-tren-3000" className="text-xs w-full">
              Trên 3 triệu
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterProduct;
