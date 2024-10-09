"use client";

import { Pessoa } from "@/models/Pessoa";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { SharedSelection } from "@nextui-org/system";
import { ChangeEvent, useEffect, useState } from "react";

export interface PeopleFormCompProps {
  initialData: Pessoa;
  onPersonChange: (pessoa: Pessoa) => void;
  handleSubmit?: () => void;
  handleCancelClick?: () => void;
}

const TYPES_LIST: { key: string; label: string }[] = [
  { key: "CLIENTE", label: "Cliente" },
  { key: "FORNECEDOR", label: "Fornecedor" },
  { key: "FUNCIONARIO", label: "Funcionário" },
  { key: "TRANSPORTADORA", label: "Transportadora" },
];

export default function PeopleFormComp({
  initialData,
  onPersonChange,
  handleSubmit,
  handleCancelClick,
}: PeopleFormCompProps) {
  const [person, setPerson] = useState<Pessoa>(initialData);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPerson((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (keys: SharedSelection) => {
    const selectedValues = Array.isArray(keys)
      ? keys
      : Array.from(keys as Set<string>);

    setPerson((prev) => ({ ...prev, tipo_pessoa: selectedValues }));
  };

  useEffect(() => {
    onPersonChange(person);
  }, [person, onPersonChange]);

  return (
    <form className="md:space-y-3">
      <div className="md:grid md:grid-cols-2 md:gap-3">
        <Input
          label="Razão Social"
          required
          name="razao_social"
          value={person.razao_social}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <Input
          label="Nome Fantasia"
          name="nome_fantasia"
          value={person.nome_fantasia || ""}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <Input
          label="CPF/CNPJ"
          required
          name="cpf_cnpj"
          value={person.cpf_cnpj}
          onChange={handleInputChange}
          autoComplete="off"
        />

        <Select
          label="Tipo de Pessoa"
          selectionMode="multiple"
          items={TYPES_LIST}
          selectedKeys={new Set(person.tipo_pessoa)}
          onSelectionChange={handleSelectChange}
        >
          {(items) => (
            <SelectItem key={items.key} value={items.key}>
              {items.label}
            </SelectItem>
          )}
        </Select>

        <div className="w-full md:col-span-2 md:flex md:items-center md:pt-4 md:text-small">
          <span>Endereço</span>
        </div>

        <Input
          label="Endereço"
          required
          name="endereco"
          value={person.endereco}
          onChange={handleInputChange}
          autoComplete="off"
        />
        <Input
          label="Número"
          required
          name="numero"
          value={person.numero}
          onChange={handleInputChange}
          autoComplete="off"
        />
      </div>

      <div className="flex">
        <Button variant="solid" type="button" onClick={handleSubmit}>
          Salvar
        </Button>
        <Button variant="light" type="button" onClick={handleCancelClick}>
          Cancelar
        </Button>
      </div>
    </form>
  );
}
