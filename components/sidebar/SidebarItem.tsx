import Link from "next/link";
import React from "react";

type SidebarItemProps = {
  href: string;
  label: string;
  icon?: React.ReactNode;
};

const SidebarItem: React.FC<SidebarItemProps> = ({
  label,
  href,
  icon,
}: SidebarItemProps) => {
  const baseClass = "px-3 py-2 flex gap-2";

  return (
    <Link
      href={href}
      className={`${baseClass} hover:bg-primary-100 rounded-lg`}
    >
      {icon && <span className="text-sm">{icon}</span>}
      {label}
    </Link>
  );
};

export default SidebarItem;
