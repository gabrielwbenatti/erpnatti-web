"use client";

import React, { useEffect, useState } from "react";
import * as peopleServices from "@/services/peopleService";
import PeopleFormComp from "../../../../components/people/people.form";
import { useRouter } from "next/navigation";
import { HttpStatusCode } from "axios";
import PersonDTO from "@/dtos/PersonDTO";

export default function PessoasEditPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();

  const [person, setPerson] = useState<PersonDTO | null>(null);
  const [razaoSocial, setRazaoSocial] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      await peopleServices.show(+params.id).then((res) => {
        setPerson(res.data.result);
        setRazaoSocial(res.data.result.company_name);
      });
    }

    fetchData();
  }, [params.id]);

  const handlePersonChange = (person: PersonDTO) => setPerson(person);

  const handleSubmit = async () => {
    if (!person) return;

    console.log(person);
    await peopleServices.update(person).then((res) => {
      if (res.status === HttpStatusCode.Ok) {
        router.push("/people");
      }
    });
  };

  const handleCancel = () => router.push("/people");

  if (!person) {
    return;
  }

  return (
    <div className="md:space-y-3 md:px-8 md:py-3">
      {person ? (
        <>
          <h1 className="text-xl font-bold">{razaoSocial}</h1>

          <PeopleFormComp
            initialData={person}
            onChangeData={handlePersonChange}
            onSubmit={handleSubmit}
            onCancel={handleCancel}
          />
        </>
      ) : (
        <h1 className="text-xl font-bold">Carregando...</h1>
      )}
    </div>
  );
}
