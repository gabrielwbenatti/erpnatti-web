"use client";

import * as peopleServices from "@/services/peopleService";
import { useEffect, useState } from "react";
import MainWrapperComp from "@/components/shared/main.wrapper";
import PersonDTO from "@/dtos/PersonDTO";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import Table, { TableColumnProps } from "@/components/shared/Table";
import { formatCpfCnpj } from "@/helpers/string_helper";
import { Eye, Trash2 } from "lucide-react";

const columns: TableColumnProps[] = [
  { header: "Razão", accessor: "company_name" },
  { header: "Cidade", accessor: "city" },
  { header: "Ações", accessor: "actions" },
];

export default function PessoasPage() {
  const [people, setPeople] = useState<PersonDTO[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await peopleServices.index();
      setPeople(res.data.result);
      console.log(res.data.result);
    }

    fetchData();
  }, []);

  const renderRow = (person: PersonDTO) => (
    <tr key={person.id} className="table-row hover:bg-gray-200">
      <td className="table-cell">
        <div className="flex flex-col p-2">
          <span className="font-semibold">{person.company_name}</span>
          <span className="text-sm">{formatCpfCnpj(person.cpf_cnpj)}</span>
        </div>
      </td>

      <td className="table-cell">
        <div className="p-2">{person.city}</div>
      </td>

      <td>
        <div className="table-cell p-2">
          <Button isIconOnly variant="light">
            <Eye />
          </Button>
          <Button isIconOnly color="danger">
            <Trash2 />
          </Button>
        </div>
      </td>
    </tr>
  );

  return (
    <>
      <MainWrapperComp>
        <div className="mt-8 flex items-center justify-between">
          <h1 className="text-xl font-bold">Pessoas</h1>

          <Link href="/products/create">
            <Button variant="solid">Nova Pessoa</Button>
          </Link>
        </div>

        <Table columns={columns} data={people} renderRow={renderRow} />
      </MainWrapperComp>
    </>
  );
}
