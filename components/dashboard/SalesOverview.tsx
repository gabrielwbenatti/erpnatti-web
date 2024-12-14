export default function SalesOverviewDashboardComponent() {
  const salesActivity = [
    { value: 51, label: "Qty", info: "Packed", color: "text-blue-500" },
    { value: 40, label: "Pkgs", info: "Shipped", color: "text-red-500" },
    {
      value: 52,
      label: "Pkgs",
      info: "Delibered",
      color: "text-green-500",
    },
    {
      value: 97,
      label: "Qty",
      info: "Invoiced",
      color: "text-yellow-500",
    },
  ];
  const inventorySummary = [
    { label: "Quantity in Hand", value: "1000" },
    { label: "Quantity to be Received", value: "62" },
  ];

  return (
    <div className="flex gap-4 border-gray-200 p-4">
      <div className="flex flex-auto flex-col rounded-lg border border-gray-200">
        <div className="border-b border-gray-200 bg-gray-100 p-2">
          <h2>Sales Overview</h2>
        </div>
        <div className="flex">
          {salesActivity.map((sale, i) => (
            <div
              key={i}
              className="flex flex-auto flex-col items-center justify-center gap-2 p-2 text-center"
            >
              <div>
                <div className={`text-3xl ${sale.color}`}>{sale.value}</div>
                <span className="text-sm text-gray-400">{sale.label}</span>
              </div>
              <div className="text-gray-700">
                <span className="overflow-hidden text-sm">
                  {`TO BE ${sale.info.toUpperCase()}`}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-auto flex-col rounded-lg border border-gray-200">
        <div className="border-b border-gray-200 bg-gray-100 p-2">
          <h2>Inventory Summary</h2>
        </div>
        <div className="divide-y-2">
          {inventorySummary.map((item, i) => (
            <div key={i} className="flex justify-between p-2">
              <span className="text-sm">{item.label.toUpperCase()}</span>
              <span className="text-lg">{item.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
