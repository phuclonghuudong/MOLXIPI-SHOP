import { createColumnHelper } from "@tanstack/react-table";
import React from "react";
import { FaUserAlt } from "react-icons/fa";
import { GiPositionMarker } from "react-icons/gi";
import { MdPhoneInTalk } from "react-icons/md";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import FormButton from "../components/FormButton";
import TableOrderItem from "../components/TableOrderItem";
import TextBold from "../components/TextBold";
import TextIcon from "../components/TextIcon";
import TextItalic from "../components/TextItalic";
import TextUpperCaseNoBold from "../components/TextUpperCaseNoBold";

const Account = () => {
  const user = useSelector((state) => state.user);
  const columnHelper = createColumnHelper();

  const column = [
    columnHelper.accessor("order", {
      header: "Đơn hàng",
    }),
    columnHelper.accessor("date", {
      header: "Ngày",
    }),
    columnHelper.accessor("address", {
      header: "Địa chỉ",
    }),
    columnHelper.accessor("", {
      header: "Giá trị",
    }),
    columnHelper.accessor("action", {
      header: "Tình trạng",
    }),
  ];
  return (
    <section className="p-2">
      <div className="grid gap-2 p-2">
        <TextBold title={"Thông tin tài khoản"} />
        <TextItalic title={user?._id ? user?.username : ""} />
      </div>

      <div className="p-2 grid lg:flex lg:flex-grow gap-4">
        <div className="flex-[2]">
          <TextUpperCaseNoBold title={"THÔNG TIN KHÁCH HÀNG"} />
          <div className="grid gap-4 pt-2">
            <TextIcon
              icon={<FaUserAlt />}
              title={"Họ tên"}
              text={user?._id ? user?.username : ""}
            />
            <TextIcon
              icon={<MdPhoneInTalk />}
              title={"Số ĐT"}
              text={user?._id ? user?.phone : ""}
            />
            <TextIcon
              icon={<GiPositionMarker />}
              title={"Địa chỉ"}
              text={user?._id ? user?.address : ""}
            />
            <Link to={"/thanh-vien/thong-tin"}>
              <FormButton title={"Sửa thông tin"} />
            </Link>
          </div>
        </div>

        <div className="flex-[7] ">
          <TextUpperCaseNoBold title={"ĐƠN HÀNG CỦA BẠN"} />
          <div className="pt-4">
            <TableOrderItem columns={column} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;
