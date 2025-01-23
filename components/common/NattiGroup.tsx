import React from "react";

type NattiGroupProps = {
  title: string;
  children?: React.ReactNode;
};

const NattiGroup: React.FC<NattiGroupProps> = ({
  title,
  children,
}: NattiGroupProps) => {
  return <div className="flex flex-col">{children}</div>;
};

export default NattiGroup;
