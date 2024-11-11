import { ReactNode } from "react";

interface MainWrapperCompProps {
  children: ReactNode;
}

export default function MainWrapperComp({ children }: MainWrapperCompProps) {
  return <main className="mx-4 space-y-3 pb-14 md:mx-6">{children}</main>;
}
