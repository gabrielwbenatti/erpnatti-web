import {
  BarChart3,
  ChartColumnIncreasing,
  ChevronLeft,
  Home,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";
import Link from "next/link";

export default function SidebarDashboardComponent() {
  return (
    <div className="flex min-h-screen w-52 flex-col gap-3 bg-[#21263c] text-[#fff]">
      {/* title */}
      <Link href="#" className="flex items-center gap-2 bg-[#181c2e] px-2 py-4">
        <ShoppingCart className="h-5 w-5" />
        <span className="text-xl font-bold">Inventory</span>
      </Link>

      {/* items */}
      <Link
        href="/home/dashboard"
        className="mx-2 flex items-center gap-4 space-x-2 rounded-lg bg-[#408dfb] p-2"
      >
        <Home className="h-4 w-4" />
        <span>Home</span>
      </Link>
      <button className="mx-2 flex items-center gap-4 space-x-2 p-2">
        <ShoppingCart className="h-4 w-4" />
        <span>Inventory</span>
      </button>
      <button className="mx-2 flex items-center gap-4 space-x-2 p-2">
        <ShoppingBag className="h-4 w-4" />
        <span>Purchases</span>
      </button>
      <Link
        href="/reports"
        className="mx-2 flex items-center gap-4 space-x-2 p-2"
      >
        <BarChart3 className="h-4 w-4" />
        <span>Reports</span>
      </Link>

      {/* bottom */}
      <div className="flex flex-col items-center justify-end bg-[#181c2e]">
        <div className="items-center px-2 py-4">
          <ChevronLeft className="" />
        </div>
      </div>
    </div>
  );
}
