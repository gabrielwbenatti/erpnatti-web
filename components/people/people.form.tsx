"use client";

import { Pessoa } from "@/models/Pessoa";
import { FormProps } from "@/types/FormProps";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { SharedSelection } from "@nextui-org/system";
import { ChangeEvent, useEffect, useState } from "react";

const TYPES_LIST: { key: string; label: string }[] = [
  { key: "CLIENTE", label: "Cliente" },
  { key: "FORNECEDOR", label: "Fornecedor" },
  { key: "FUNCIONARIO", label: "Funcionário" },
  { key: "TRANSPORTADORA", label: "Transportadora" },
];

export default function PeopleFormComp({
  initialData,
  onChangeData,
  onCancel,
  onDelete,
  onSubmit,
}: FormProps<Pessoa>) {
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
    onChangeData(person);
  }, [person]);

  return (
    <form className="md:space-y-3">
      <span className="md:col-span-4 md:mt-3 md:text-small">Cadastral</span>
      <div className="md:grid md:grid-cols-4 md:gap-3">
        <Input
          label="Razão Social"
          required
          name="razao_social"
          value={person.razao_social}
          onChange={handleInputChange}
          autoComplete="off"
          className="md:col-span-2"
        />
        <Input
          label="Nome Fantasia"
          name="nome_fantasia"
          value={person.nome_fantasia || ""}
          onChange={handleInputChange}
          autoComplete="off"
          className="md:col-span-2"
        />
        <Input
          label="CPF/CNPJ"
          required
          name="cpf_cnpj"
          value={person.cpf_cnpj}
          onChange={handleInputChange}
          autoComplete="off"
          className="md:col-span-1"
        />

        <Select
          label="Tipo de Pessoa"
          selectionMode="multiple"
          items={TYPES_LIST}
          selectedKeys={new Set(person.tipo_pessoa)}
          onSelectionChange={handleSelectChange}
          className="md:col-span-3"
        >
          {(items) => (
            <SelectItem key={items.key} value={items.key}>
              {items.label}
            </SelectItem>
          )}
        </Select>

        <span className="md:col-span-4 md:mt-3 md:text-small">Endereço</span>
        <Input
          label="CEP"
          name="cep" 
          value={person.cep || ""}
          onChange={handleInputChange}
          autoComplete="off"
          className="md:col-span-1"
        />
        <Input
          label="Endereço"
          name="endereco"
          value={person.endereco || ""}
          onChange={handleInputChange}
          autoComplete="off"
          className="md:col-span-2"
        />
        <Input
          label="Número"
          name="numero"
          value={person.numero || ""}
          onChange={handleInputChange}
          autoComplete="off"
          className="md:col-span-1"
        />
        <Input
          label="Complemento"
          name="complemento"
          value={person.complemento || ""}
          onChange={handleInputChange}
          autoComplete="off"
          className="col-span-4"
        />
      </div>

      <div className="flex">
        <Button variant="solid" type="button"  onClick={onSubmit}>
          Salvar
        </Button>
        <Button variant="light" type="button" onClick={onCancel}>
          Cancelar
        </Button>
        <Button variant="light" type="button" color="danger" onClick={onDelete}>
          Excluir
        </Button>
      </div>
    </form>
  );
}
