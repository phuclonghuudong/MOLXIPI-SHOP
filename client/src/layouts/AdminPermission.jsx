import React from "react";
import LOGO from "../assets/logo_lien_he.png";

const AdminPermission = ({ children }) => {
  return (
    <>
      <div className="justify-center items-center grid bg-red-100 h-full">
        <p className="text-red-500 p-4 font-semibold text-4xl">
          Do not have permission
        </p>
        <img src={LOGO} className="w-46" />
      </div>
    </>
  );
};

export default AdminPermission;
