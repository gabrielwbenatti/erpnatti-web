import PersonDTO from "@/dtos/PersonDTO";
import { formatCpfCnpj } from "@/helpers/string_helper";
import Link from "next/link";

type PessoasGridCompProps = {
  columns?: { key: string; label: string }[];
  rows: PersonDTO[];
};

export default function PeopleGridComp({ rows }: PessoasGridCompProps) {
  return (
    <div>
      <ul>
        {rows.map((row) => (
          <li
            key={row.id}
            className="flex hover:bg-light-onSurface hover:bg-opacity-[.08] md:rounded-lg md:p-2"
          >
            <Link
              href={`/pessoas/edit/${row.id}`}
              className="flex w-full flex-col"
            >
              <span className="font-bold">{row.company_name}</span>
              <span className="text-small">{formatCpfCnpj(row.cpf_cnpj)}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
