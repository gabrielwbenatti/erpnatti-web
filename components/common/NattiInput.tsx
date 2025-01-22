import React from "react";

type NattiInputProps = {
  label: string;
  placeholder: string;
  className?: string;
  border?: "solid" | "none";
};

const NattiInput: React.FC<NattiInputProps> = ({
  label,
  placeholder,
  border = "solid",
  className,
}: NattiInputProps) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <span className="block text-sm">{label}</span>
      <input
        type="text"
        placeholder={placeholder}
        className={`${border === "solid" ? "border border-black" : "border-none"} rounded-lg p-2`}
      />
    </div>
  );
};

export default NattiInput;
