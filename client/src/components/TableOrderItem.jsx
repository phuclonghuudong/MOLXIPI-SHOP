import {
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import React from "react";

const TableOrderItem = ({ data, columns }) => {
  const table = useReactTable({
    data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="text-md">
      <table className="w-full py-0 px-0 border-collapse">
        <thead className="bg-orange-600 text-white  ">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {/* <th>Sr.No</th> */}
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="border font-normal p-1">
                  {header.isPlaceholder
                    ? null
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        {data && data[0] ? (
          ""
        ) : (
          <tbody className="border h-20 text-center items-center">
            <tr className="font-normal">
              <th colSpan={5}>
                <p>Không có đơn hàng nào.</p>
              </th>
            </tr>
          </tbody>
        )}
        {/* <tbody>
          {table.getRowModel().rows.map((row, index) => (
            <tr key={row.id}>
              <td className="border px-2 py-0 ">{index + 1}</td>
              {row.getVisibleCells().map((cell) => (
                <td
                  key={cell.id}
                  className="border px-2 py-0 whitespace-nowrap"
                >
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody> */}
      </table>
      <div className="h-4" />
    </div>
  );
};

export default TableOrderItem;
