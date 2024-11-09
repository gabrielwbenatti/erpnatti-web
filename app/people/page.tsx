"use client";

import PeopleGridComp from "../../components/people/people.grid";
import * as peopleServices from "@/services/peopleService";
import { useEffect, useState } from "react";
import MainWrapperComp from "@/components/shared/main.wrapper";
import PersonDTO from "@/dtos/PersonDTO";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function PessoasPage() {
  const [people, setPeople] = useState<PersonDTO[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await peopleServices.index();
      setPeople(res.data.result);
    }

    fetchData();
  }, []);

  return (
    <MainWrapperComp>
      <Link href="/people/create">
        <Button variant="solid">Novo</Button>
      </Link>

      <PeopleGridComp rows={people} />
    </MainWrapperComp>
  );
}
