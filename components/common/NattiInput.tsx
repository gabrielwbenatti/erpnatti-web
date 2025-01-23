import React from "react";

type NattiInputProps = {
  label: string;
  placeholder: string;
  className?: string;
};

const NattiInput: React.FC<NattiInputProps> = ({
  label,
  placeholder,
  className,
}: NattiInputProps) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      <span className="block text-sm">{label}</span>
      <input type="text" placeholder={placeholder} className="rounded-lg p-2" />
    </div>
  );
};

export default NattiInput;
