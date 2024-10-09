import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import Link from "next/link";

type HomeNavComponentProps = {
  menus: { id: number; caption: string }[];
};

export default function HomeNavComponent({ menus }: HomeNavComponentProps) {
  return (
    <Navbar className="bg-light-surface-container-high">
      <NavbarContent>
        {menus.map((menu) => (
          <NavbarItem className="rounded-full px-3 py-1 hover:bg-light-on-surface hover:bg-opacity-[.08]">
            <Link href="#">{menu.caption}</Link>
          </NavbarItem>
        ))}
      </NavbarContent>
    </Navbar>
  );
}
