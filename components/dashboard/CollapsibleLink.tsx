import { PlusCircle } from "lucide-react";
import Link from "next/link";

export default function CollapsibleLinkComponent({
  href,
  title,
}: {
  href: string;
  title: string;
}) {
  return (
    <Link
      key={href}
      className="flex items-center justify-between space-x-3 rounded-lg py-2.5 pl-12 pr-3 transition-all duration-300 hover:bg-slate-900"
      href={href}
    >
      <span className="text-sm">{title}</span>
      <PlusCircle className="h-5 w-5" />
    </Link>
  );
}
