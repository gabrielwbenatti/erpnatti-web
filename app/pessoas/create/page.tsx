"use client";

import PeopleFormComp from "@/components/people/people.form";
import { Pessoa } from "@/models/Pessoa";
import * as peopleService from "@/services/peopleService";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function PessoasNovoPage() {
  const router = useRouter();

  const [person, setPerson] = useState<Pessoa>({
    cpf_cnpj: "",
    razao_social: "",
    tipo_pessoa: [],
  });

  const handleChangeData = (person: Pessoa) => setPerson(person);

  const handleSubmit = async () => {
    await peopleService.store(person).then((res) => {
      if (res.status === 201) {
        router.push("/products");
      }
    });
  };

  const handleCancel = () => router.push("/products");

  return (
    <div className="md:space-y-3 md:px-8 md:py-3">
      <h1 className="text-xl font-bold">Novo Cadastro</h1>

      <PeopleFormComp
        initialData={person}
        onChangeData={handleChangeData}
        onSubmit={handleSubmit}
        onCancel={handleCancel}
      />
    </div>
  );
}
