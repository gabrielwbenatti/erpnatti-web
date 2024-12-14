import HomeNavBarDashboardComponent from "@/components/dashboard/HomeNavBar";
import React from "react";

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <HomeNavBarDashboardComponent />

      <div>{children}</div>
    </>
  );
}
