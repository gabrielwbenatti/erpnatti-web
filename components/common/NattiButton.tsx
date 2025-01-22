import Link from "next/link";
import React from "react";

type NattiButtonProps = {
  label: string;
  icon?: React.ReactNode;
  type?: "primary" | "text-only";
  onClick?: VoidFunction;
};

type NattiButtonLinkProps = NattiButtonProps & { href: string };

const NattiButton: React.FC<NattiButtonProps> = ({
  label,
  icon,
  type = "primary",
  onClick,
}: NattiButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-2 rounded-lg ${type === "primary" ? "bg-primary-500 text-white hover:bg-primary-600" : "bg-gray-100 hover:bg-gray-200"} px-3 py-2 font-bold`}
    >
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
};

const NattiButtonLink: React.FC<NattiButtonLinkProps> = ({
  label,
  icon,
  type,
  href,
  onClick,
}: NattiButtonLinkProps) => {
  return (
    <Link href={href}>
      <NattiButton label={label} type={type} icon={icon} onClick={onClick} />
    </Link>
  );
};

export { NattiButton, NattiButtonLink };
