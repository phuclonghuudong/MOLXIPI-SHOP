import React, { useEffect, useState } from "react";
import createRange from "../utils/createRange";
import getDayList from "../utils/getDayList";

const FormBirthday = ({ label, labelBold, id, name, value, onChange }) => {
  const [select, setSelect] = useState({
    day: "",
    month: "",
    year: "",
  });
  const [listDay, setListDay] = useState([]);

  const handleOnchange = (event) => {
    const { name, value } = event.target;

    setSelect((pre) => {
      return {
        ...pre,
        [name]: value,
      };
    });
  };
  useEffect(() => {
    let check = value.split("-");
    if (value) {
      setSelect({
        day: check[2],
        month: check[1],
        year: check[0],
      });
    }
  }, [value]);

  useEffect(() => {
    setListDay(getDayList(select?.year, select?.month));
  }, [select.year, select.month]);

  useEffect(() => {
    if (Number(select?.day) > listDay?.length) {
      setSelect((pre) => {
        return {
          ...pre,
          day: "",
        };
      });
    }
  }, [select.month]);

  useEffect(() => {
    if (
      Number(select?.year) !== 0 &&
      Number(select?.month) !== 0 &&
      Number(select?.day) !== 0 &&
      Number(select?.day) <= listDay?.length
    ) {
      onChange(
        [select?.year, select?.month, select?.day].filter(Boolean).join("-")
      );
    }
  }, [select.day, select.month, select.year]);

  return (
    <div className="flex flex-row justify-center items-center">
      {label && (
        <div className="flex-[2]">
          <label className={`text-xs py-2 ${labelBold ? "font-semibold" : ""}`}>
            {label ? label : ""}
          </label>
        </div>
      )}
      <div className="flex-[10] flex justify-center items-center">
        <div className="flex-[3] h-10">
          <select
            className="w-full border border-gray-300 h-full p-2 focus:outline-none text-xs"
            id={"year"}
            name={"year"}
            value={select.year}
            onChange={handleOnchange}
          >
            <option value="0">Chọn năm</option>
            {createRange(1990, 2020).map((item, index) => {
              return (
                <option key={item + "year"} value={item}>
                  {item}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex-[3] h-10">
          <select
            className={`w-full border border-gray-300 h-full p-2 focus:outline-none text-xs ${
              !select?.year || Number(select?.year) === 0
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }`}
            id={"month"}
            name={"month"}
            value={select.month}
            onChange={handleOnchange}
            disabled={
              !select?.year || Number(select?.year) === 0 ? true : false
            }
          >
            <option value="0">Chọn tháng</option>
            {new Array(12).fill(null).map((_, index) => {
              return (
                <option key={index + "month"} value={index + 1}>
                  {index + 1}
                </option>
              );
            })}
          </select>
        </div>
        <div className="flex-[3] h-10">
          <select
            className={`w-full border border-gray-300 h-full p-2 focus:outline-none text-xs ${
              !select?.year ||
              Number(select?.year) === 0 ||
              Number(select?.month) === 0 ||
              !select?.month
                ? "cursor-not-allowed"
                : "cursor-pointer"
            }`}
            id={"day"}
            name={"day"}
            value={select.day}
            onChange={handleOnchange}
            disabled={
              !select?.year ||
              Number(select?.year) === 0 ||
              Number(select?.month) === 0 ||
              !select?.month
                ? true
                : false
            }
          >
            <option value="0">Chọn ngày</option>
            {listDay?.map((_, index) => {
              return (
                <option key={index + "day"} value={index + 1}>
                  {index + 1}
                </option>
              );
            })}
          </select>
        </div>
      </div>
    </div>
  );
};

export default FormBirthday;
