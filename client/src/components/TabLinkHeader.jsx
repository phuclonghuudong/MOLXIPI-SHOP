import React from "react";
import { Link } from "react-router-dom";

const TabLinkHeader = ({ url, text, onClick, icon: ICON }) => {
  return (
    <Link
      onClick={onClick ? onClick : ""}
      to={url}
      className="hover:text-white duration-500 hover:bg-orange-500 p-2 hover:rounded-md cursor-pointer"
    >
      <div
        className={`${ICON ? "flex items-center justify-center gap-2" : ""}`}
      >
        {ICON && (
          <span>
            <ICON size={20} />
          </span>
        )}
        <p> {text}</p>
      </div>
    </Link>
  );
};

export default TabLinkHeader;
