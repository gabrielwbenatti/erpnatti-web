"use client";

import { Pessoa } from "@/models/Pessoa";
import React, { useEffect, useState } from "react";
import * as peopleServices from "@/services/peopleService";
import PeopleFormComp from "../../../../components/people/people.form";
import { useRouter } from "next/navigation";

export default function PessoasEditPage({
  params,
}: {
  params: { id: string };
}) {
  const router = useRouter();

  const [person, setPerson] = useState<Pessoa | null>(null);
  const [razaoSocial, setRazaoSocial] = useState<string>("");

  useEffect(() => {
    async function fetchData() {
      const res = await peopleServices.show(+params.id);
      setPerson(res.data.data);
      setRazaoSocial(res.data.data.razao_social);
    }

    fetchData();
  }, [params.id]);

  const handlePersonChange = (pessoa: Pessoa) => setPerson(pessoa);

  const handleSubmit = async () => {
    if (!person) return;

    await peopleServices.update(person).then((res) => {
      if (res.status === 200) {
        router.push("/pessoas");
      }
    });
  };

  const handleCancel = () => router.push("/pessoas");

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
