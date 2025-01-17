import SidebarDashboardComponent from "@/components/dashboard/Sidebar";
import React from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <nav>
        <SidebarDashboardComponent />
      </nav>
      <main className="w-full">{children}</main>
    </div>
  );
}
