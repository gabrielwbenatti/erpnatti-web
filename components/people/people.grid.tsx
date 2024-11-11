import PersonDTO from "@/dtos/PersonDTO";
import { formatCpfCnpj } from "@/helpers/string_helper";
import { Button } from "@nextui-org/button";
import { Tooltip } from "@nextui-org/tooltip";
import { Trash, Trash2 } from "lucide-react";
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
              href={`/people/edit/${row.id}`}
              className="flex w-full flex-col"
            >
              <span className="font-bold">{row.company_name}</span>
              <span className="text-small">{formatCpfCnpj(row.cpf_cnpj)}</span>
            </Link>

            <Tooltip color="danger" content="Excluir">
              <Button isIconOnly color="danger" variant="light">
                <Trash2 />
              </Button>
            </Tooltip>
          </li>
        ))}
      </ul>
    </div>
  );
}
