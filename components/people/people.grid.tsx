import { Pessoa } from "@/models/Pessoa";

type PessoasGridCompProps = {
  columns?: { key: string; label: string }[];
  rows: Pessoa[];
};

export default function PeopleGridComp({ rows }: PessoasGridCompProps) {
  return (
    <div>
      <ul>
        {rows.map((row) => (
          <li
            key={row.id}
            className="flex hover:bg-light-on-surface hover:bg-opacity-[.08] md:rounded-lg md:p-2"
          >
            <a
              href={`/pessoas/edit/${row.id}`}
              className="flex w-full flex-col"
            >
              <span className="font-bold">{row.razao_social}</span>
              <span className="text-small">{row.cpf_cnpj}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
