import {
  BarChart3,
  ChevronLeft,
  Home,
  ShoppingBag,
  ShoppingCart,
} from "lucide-react";

import Link from "next/link";
import SidebarDropdownLinkComponent from "./SidebarDropdownLink";

type MenuItem = { title: string; href: string };

export default function SidebarDashboardComponent() {
  const inventoryLinks: MenuItem[] = [
    { title: "Items", href: "/inventory/items" },
    { title: "Items Groups", href: "/inventory/items-groups" },
    {
      title: "Inventory Adjustments",
      href: "/inventory/inventory-adjustments",
    },
  ];
  const purchaseLinks: MenuItem[] = [
    { title: "Vendors", href: "#" },
    { title: "Purchase Orders", href: "#" },
    { title: "Purchase Receives", href: "#" },
    { title: "Bills", href: "#" },
  ];

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

      <SidebarDropdownLinkComponent
        icon={<ShoppingCart className="h-4 w-4" />}
        title="Inventory"
        links={inventoryLinks}
      />
      <SidebarDropdownLinkComponent
        icon={<ShoppingBag className="h-4 w-4" />}
        title="Purchases"
        links={purchaseLinks}
      />

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
