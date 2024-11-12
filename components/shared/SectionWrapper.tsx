import React from "react";

interface SectionWrapper {
  title: string;
  className?: string;
  children: React.ReactNode;
}

export default function SectionWrapper({
  title,
  className,
  children,
}: SectionWrapper) {
  return (
    <section className={`mt-3 ${className}`}>
      <span className="mb-1 block text-small md:col-span-4">{title}</span>
      {children}
    </section>
  );
}
