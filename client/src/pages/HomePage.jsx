import React, { useState } from "react";
import Banner from "../components/Banner";
import FormTitle from "../components/FormTitle";
import ListProductNoData from "../components/ListProductNoData";
import SnipCategory from "../components/SnipCategory";
import useWindowSize from "../utils/ScreenSize";

const HomePage = () => {
  const [loading, setLoading] = useState(false);
  const { width, height } = useWindowSize();
  return (
    <div className="bg-white w-full h-full">
      <Banner />

      <div className="p-2">
        <FormTitle title="Sản phẩm" />
        {/* No Data */}
        {loading && (
          <div className="p-2">
            <div
              className={`grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:flex justify-between items-center gap-2`}
            >
              {new Array(
                width > 1024
                  ? 6
                  : width > 769
                  ? 5
                  : width > 530
                  ? 4
                  : width > 426
                  ? 3
                  : width > 360
                  ? 3
                  : 3
              )
                .fill(null)
                .map((c, index) => {
                  return (
                    <div
                      key={index + "loadingCategory"}
                      className="bg-white rounded p-2 w-full h-full grid gap-2 shadow animate-pulse"
                    >
                      <div className="bg-blue-200 h-8 rounded"></div>
                    </div>
                  );
                })}
            </div>

            <div className="pt-2">
              <ListProductNoData />
            </div>
          </div>
        )}
        {/* No Data */}
      </div>

      <div className="p-2">
        <FormTitle title="Sản phẩm cầu lông" />
        <div className="p-2 grid grid-cols-2 gap-3 md:grid-cols-4 lg:grid-cols-5">
          <SnipCategory slug={"1"} image={"1"} title={"1"} />
        </div>
        {/* No Data */}
        {loading && (
          <div className="p-2">
            <div className="pt-2">
              <ListProductNoData />
            </div>
          </div>
        )}
        {/* No Data */}
      </div>

      <div className="p-2">
        <FormTitle title="Tin tức mới" />
        <div className="p-2 grid grid-cols-2 gap-2 md:grid-cols-4 lg:grid-cols-5"></div>
        {/* No Data */}
        {loading && (
          <div className="p-2">
            <div className="pt-2">
              <ListProductNoData />
            </div>
          </div>
        )}
        {/* No Data */}
      </div>
    </div>
  );
};

export default HomePage;
