import React from "react";

type NattiButtonProps = {
  label: string;
  icon?: React.ReactNode;
  onClick?: VoidFunction;
};

const NattiButton = ({ label, icon, onClick }: NattiButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary-500 hover:bg-primary-600 flex items-center gap-2 rounded-lg px-3 py-2 font-bold text-white"
    >
      {icon && <span>{icon}</span>}
      {label}
    </button>
  );
};

export default NattiButton;
