"use client";

import PeopleHeaderComp from "../../components/people/people.nav";
import PeopleGridComp from "../../components/people/people.grid";
import { Pessoa } from "@/models/Pessoa";
import * as peopleServices from "@/services/peopleService";
import { useEffect, useState } from "react";

export default function PessoasPage() {
  const [people, setPeople] = useState<Pessoa[]>([]);

  useEffect(() => {
    async function fetchData() {
      const res = await peopleServices.index();
      setPeople(res.data.data);
    }

    fetchData();
  }, []);

  return (
    <>
      <header>
        <PeopleHeaderComp />
      </header>

      <main>
        <PeopleGridComp rows={people} />
      </main>
    </>
  );
}
