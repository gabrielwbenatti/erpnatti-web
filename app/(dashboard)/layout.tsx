import Sidebar from "@/components/sidebar/Sidebar";
import React from "react";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex font-lexend">
      <Sidebar />
      <main className="w-full">{children}</main>
    </div>
  );
}
