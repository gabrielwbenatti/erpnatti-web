import React from "react";

interface SectionWrapper {
  title: string;
  children: React.ReactNode;
}

export default function SectionWrapper({ title, children }: SectionWrapper) {
  return (
    <>
      <span className="mb-1 text-small md:col-span-4">{title}</span>
      {children}
    </>
  );
}
