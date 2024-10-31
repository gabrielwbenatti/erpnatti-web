"use client";

import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { useRouter } from "next/navigation";

type HomeNavComponentProps = {
  menus: { id: number; caption: string; route?: string }[];
};

export default function HomeNavComponent({ menus }: HomeNavComponentProps) {
  const router = useRouter();

  const handleClick = (route?: string) => {
    if (route) router.push(route);
  };

  return (
    <Navbar as="nav" className="bg-light-surfaceContainerHigh">
      <NavbarContent>
        {menus.map((menu) => (
          <NavbarItem
            key={menu.id}
            className="hover:bg-light-onSurface rounded-full px-3 py-1 hover:bg-opacity-[.08]"
          >
            <a href="#" onClick={() => handleClick(menu.route)}>
              {menu.caption}
            </a>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
}
