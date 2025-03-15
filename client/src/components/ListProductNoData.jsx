import React from "react";

const ListProductNoData = () => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5  justify-center items-center gap-4 ">
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
  );
};

export default ListProductNoData;
