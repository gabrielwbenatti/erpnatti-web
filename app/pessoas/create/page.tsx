"use client";

import PeopleFormComp from "@/components/people/people.form";
import MainWrapperComp from "@/components/shared/main.wrapper";
import { Pessoa } from "@/models/Pessoa";
import * as peopleService from "@/services/peopleService";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PessoasNovoPage() {
  const router = useRouter();

  const [person, setPerson] = useState<Pessoa>({});

  const handleChangeData = (person: Pessoa) => setPerson(person);

  const handleSubmit = async () => {
    await peopleService.store(person).then((res) => {
      if (res.status === 201) {
        router.push("/pessoas");
      }
    });
  };

  const handleCancel = () => router.push("/pessoas");

  return (
    <MainWrapperComp>
      <h1 className="text-xl font-bold">Novo Cadastro</h1>

      <PeopleFormComp
        initialData={person}
        onChangeData={handleChangeData}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </MainWrapperComp>
  );
}
