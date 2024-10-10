import { ReactNode } from "react";

interface MainWrapperCompProps {
  children: ReactNode;
}

export default function MainWrapperComp({ children }: MainWrapperCompProps) {
  return (
    <>
      <main>
        <div className="md:space-y-3 md:px-8 md:py-3">{children}</div>
      </main>
    </>
  );
}
