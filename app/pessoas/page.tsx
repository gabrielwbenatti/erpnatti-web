"use client";

import PeopleGridComp from "../../components/people/people.grid";
import * as peopleServices from "@/services/peopleService";
import { useEffect, useState } from "react";
import MainWrapperComp from "@/components/shared/main.wrapper";
import PersonDTO from "@/dtos/PersonDTO";
import { Button } from "@nextui-org/button";
import Link from "next/link";
import Table from "@/components/shared/Table";
import { formatCpfCnpj } from "@/helpers/string_helper";

const columns = [{ header: "Razão", accessor: "company_name" }];

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

  const renderRow = (person: PersonDTO) => {
    return (
      <tr>
        <td>
          <div className="flex flex-col">
            <span className="font-semibold">{person.company_name}</span>
            <span className="text-sm">{formatCpfCnpj(person.cpf_cnpj)}</span>
          </div>
        </td>
      </tr>
    );
  };

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
