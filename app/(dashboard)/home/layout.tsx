import HomeNavBarComponent from "@/components/dashboard/HomeNavBar";
import React from "react";

export default function HomeLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <HomeNavBarComponent />

      <div>{children}</div>
    </>
  );
}
