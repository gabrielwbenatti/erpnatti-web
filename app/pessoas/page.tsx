"use client";

import PeopleHeaderComp from "../../components/people/people.nav";
import PeopleGridComp from "../../components/people/people.grid";
import * as peopleServices from "@/services/peopleService";
import { useEffect, useState } from "react";
import MainWrapperComp from "@/components/shared/main.wrapper";
import PersonDTO from "@/dtos/PersonDTO";

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
    <>
      <header>
        <PeopleHeaderComp />
      </header>

      <MainWrapperComp>
        <PeopleGridComp rows={people} />
      </MainWrapperComp>
    </>
  );
}
