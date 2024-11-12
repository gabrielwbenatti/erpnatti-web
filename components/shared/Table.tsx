import React from "react";

export interface TableColumnProps {
  header: string;
  accessor: string;
  className?: string;
}

interface TableProps {
  columns: TableColumnProps[];
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
              <th key={column.accessor} className={column.className}>
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y">
          {data.map((item) => renderRow(item))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
