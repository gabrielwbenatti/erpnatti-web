import { ReactNode } from "react";

interface MainWrapperCompProps {
  children: ReactNode;
}

export default function MainWrapperComp({ children }: MainWrapperCompProps) {
  return (
    <>
      <main className="space-y-3 px-4 py-3 md:px-10 lg:px-36">{children}</main>
    </>
  );
}
