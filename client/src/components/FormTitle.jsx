import React from "react";

const FormTitle = ({ title }) => {
  return (
    <div className="font-bold text-orange-500 uppercase text-center grid items-center justify-center gap-2 text-xl p-4 ">
      <p>{title}</p>
      <div className="bg-slate-200 h-1 w-full items-center justify-center text-center flex rounded">
        <div className="bg-orange-500 h-full w-14 rounded"></div>
      </div>
    </div>
  );
};

export default FormTitle;
