import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import CollapsibleLinkComponent from "./CollapsibleLink";
import React, { JSX } from "react";

export default function SidebarDropdownLinkComponent({
  title,
  icon,
  links,
}: {
  title: string;
  icon: React.ReactNode;
  links: { title: string; href: string }[];
}) {
  return (
    <Collapsible>
      <CollapsibleTrigger className="mx-2 flex items-center gap-4 space-x-2 p-2">
        {icon}
        <span>{title}</span>
      </CollapsibleTrigger>
      <CollapsibleContent className="mx-2">
        {links.map((item, i) => {
          return (
            <CollapsibleLinkComponent
              key={i}
              href={item.href}
              title={item.title}
            />
          );
        })}
      </CollapsibleContent>
    </Collapsible>
  );
}
