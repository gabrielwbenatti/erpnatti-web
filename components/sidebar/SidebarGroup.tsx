import SidebarItem from "./SidebarItem";

export type MenuItem = { title: string; href: string; icon?: React.ReactNode };

type SidebarGroupProps = {
  title: string;
  items: MenuItem[];
};

const SidebarGroup = ({ title, items }: SidebarGroupProps) => {
  return (
    <div className="flex flex-col gap-2">
      <div className="text-sm text-gray-700">{title}</div>
      {items.map((e, i) => (
        <SidebarItem href={e.href} key={i} label={e.title} icon={e.icon} />
      ))}
    </div>
  );
};

export default SidebarGroup;
