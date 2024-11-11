import React from "react";

interface TableProps {
  columns: { header: string; accessor: string; className?: string }[];
  renderRow: (item: any) => React.ReactNode;
  data: any[];
}

const Table = ({ columns, renderRow, data }: TableProps) => {
  return (
    <>
      <table className="w-full">
        <thead>
          <tr className="text-left">
            {columns.map((column) => (
              <th className={column.className}>{column.header}</th>
            ))}
          </tr>
        </thead>
        <tbody>{data.map((item) => renderRow(item))}</tbody>
      </table>
    </>
  );
};

export default Table;
