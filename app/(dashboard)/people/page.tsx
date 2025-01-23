import { NattiButtonLink } from "@/components/common/NattiButton";
import { Plus } from "lucide-react";
import { people } from "./data";
import Link from "next/link";
import { formatCpfCnpj } from "@/utils/string_helper";
import NattiScaffold from "@/components/common/NattiScaffold";

const PeoplePage = () => {
  return (
    <NattiScaffold
      title="people"
      actions={
        <NattiButtonLink label="new" href="/people/new" icon={<Plus />} />
      }
    >
      <div className="flex flex-col">
        <div className="grid grid-cols-12 p-3">
          <span className="col-span-5">Name</span>
          <span className="col-span-5">Trading Name</span>
          <span className="col-span-2">CPF/CNPJ</span>
        </div>
        {people.map((e, i) => (
          <Link
            key={i}
            href={`/people/${e.id}`}
            className="rounded-lg hover:bg-primary-100"
          >
            <div className="grid grid-cols-12 p-3">
              <span className="col-span-5">{e.company_name}</span>
              <span className="col-span-5">{e.trading_name}</span>
              <span className="col-span-2">{formatCpfCnpj(e.cpf_cnpj)}</span>
            </div>
          </Link>
        ))}
      </div>
    </NattiScaffold>
  );
};

export default PeoplePage;
