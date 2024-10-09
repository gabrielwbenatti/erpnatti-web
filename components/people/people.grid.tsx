import { Pessoa } from "@/models/Pessoa";

type PessoasGridCompProps = {
  columns?: { key: string; label: string }[];
  rows: Pessoa[];
};

export default function PeopleGridComp({ rows }: PessoasGridCompProps) {
  return (
    <div className="md:px-8 md:py-3">
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
                <span className="text-sm">{row.cpf_cnpj}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
