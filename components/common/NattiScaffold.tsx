import React from "react";

type NattiScaffoldProps = {
  title: string;
  actions?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
};

const NattiScaffold: React.FC<NattiScaffoldProps> = ({
  title,
  actions,
  children,
  className = "",
}: NattiScaffoldProps) => {
  return (
    <div className={`flex flex-col gap-3 px-8 pt-8 ${className}`}>
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex gap-3">{actions}</div>
      </div>
      <div>{children}</div>
    </div>
  );
};

export default NattiScaffold;
