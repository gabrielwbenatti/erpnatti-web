import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex">
      <nav>
        <Sidebar />
      </nav>
      <main className="w-full">{children}</main>
    </div>
  );
}
