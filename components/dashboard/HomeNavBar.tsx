"use client";

import { FileUser } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function HomeNavBarComponent() {
  const userName = "Gabriel Benatti";
  const pathname = usePathname();

  const navLinks = [
    { title: "Dashboard", path: "/home/dashboard" },
    { title: "Getting Started", path: "/home/getting-started" },
    { title: "Announcements", path: "/home/announcements" },
    { title: "Recent Updates", path: "/home/recent-updates" },
  ];

  console.log(pathname);

  return (
    <div className="space-y-4 bg-red-100 px-4 pt-4">
      <div className="flex items-center gap-3">
        <div className="flex h-14 w-14 items-center justify-center rounded-lg border">
          <FileUser className="h-10 w-10" />
        </div>
        <div className="flex flex-col">
          <p className="font-semibold">Hello, {userName.toUpperCase()}</p>
          <span className="text-sm">Garat</span>
        </div>
      </div>
      <nav className="flex gap-4">
        {navLinks.map((link, i) => (
          <Link
            key={i}
            href={link.path}
            className={`py-3 ${pathname === link.path ? "font-semibold" : ""}`}
          >
            {link.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
