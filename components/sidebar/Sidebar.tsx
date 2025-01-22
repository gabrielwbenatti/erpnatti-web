import Link from "next/link";
import ErpNattiLogo from "../shared/erpnatti-logo";
import React from "react";
import { LogOut, Settings } from "lucide-react";
import SidebarGroup, { MenuItem } from "./SidebarGroup";
import SidebarItem from "./SidebarItem";

export default function Sidebar() {
  const registerLinks: MenuItem[] = [
    { title: "products", href: "/products" },
    { title: "people", href: "/people" },
  ];
  const movementLinks: MenuItem[] = [
    { title: "purchases", href: "/purchases" },
    { title: "sales", href: "/sales" },
    { title: "payables", href: "/payables" },
    { title: "receivables", href: "/receivables" },
  ];
  const otherLinks: MenuItem[] = [
    { title: "my preferences", href: "/my-preferences", icon: <Settings /> },
    { title: "logout", href: "/logout", icon: <LogOut /> },
  ];

  return (
    <div className="font-lexend">
      <div className="flex h-full w-52 flex-col">
        {/* Logotipo */}
        <ErpNattiLogo />

        {/* Home */}
        <SidebarItem label="home" href="/" />

        {/* Menus */}
        <SidebarGroup items={registerLinks} title="REGISTERS" />
        <SidebarGroup items={movementLinks} title="MOVEMENTS" />
      </div>

      <SidebarGroup items={otherLinks} title="OTHERS" />
    </div>
  );
}
