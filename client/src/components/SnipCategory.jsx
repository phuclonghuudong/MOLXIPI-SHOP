import React from "react";
import { Link } from "react-router-dom";

const SnipCategory = ({ image, title, slug }) => {
  return (
    <Link
      to={`/${slug}`}
      className="relative group overflow-hidden flex items-center justify-center"
    >
      <div className="group-hover:opacity-30 transition-opacity ">
        <img
          src={image}
          alt={title}
          className="transition-transform  duration-500 group-hover:scale-100 scale-110 "
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300 group-hover:opacity-100 ">
        <div className="lg:w-40 w-32 lg:h-11 h-9 bg-orange-600 transition-transform duration-500 -skew-y-12 text-center items-center justify-center flex opacity-90 ">
          <p className="uppercase text-sm lg:text-lg text-white">{title}</p>
        </div>
      </div>
    </Link>
  );
};

export default SnipCategory;
