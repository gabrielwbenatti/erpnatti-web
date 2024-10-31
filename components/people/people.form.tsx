"use client";

import PersonDTO from "@/dtos/PersonDTO";
import { viaCepApi } from "@/services/api";
import { FormProps } from "@/types/FormProps";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { Select, SelectItem } from "@nextui-org/select";
import { SharedSelection } from "@nextui-org/system";
import { HttpStatusCode } from "axios";
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
}: FormProps<PersonDTO>) {
  const [person, setPerson] = useState<PersonDTO>(initialData);

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

  const fetchCep = (cep: string) => {
    async function fetchData() {
      await viaCepApi.get(`/${cep}/json`).then((res) => {
        const body = res.data;
        if (res.status === HttpStatusCode.Ok) {
          setPerson((prev) => ({
            ...prev,
            endereco: body.logradouro,
            bairro: body.bairro,
            cidade: body.localidade,
            codigo_ibge: body.ibge,
          }));
        }
      });
    }
    fetchData();
  };

  useEffect(() => {
    onChangeData(person);
  }, [person]);

  return (
    <form className="md:space-y-3">
      <div className="md:grid md:grid-cols-4 md:gap-3">
        <span className="md:col-span-4 md:mt-3 md:text-small">Cadastral</span>
        <Input
          label="Razão Social"
          required
          name="company_name"
          value={person.company_name || ""}
          onChange={handleInputChange}
          autoComplete="off"
          className="md:col-span-2"
        />
        <Input
          label="Nome Fantasia"
          name="trading_name"
          value={person.trading_name || ""}
          onChange={handleInputChange}
          autoComplete="off"
          className="md:col-span-2"
        />
        <Input
          label="CPF/CNPJ"
          required
          name="cpf_cnpj"
          value={person.cpf_cnpj || ""}
          onChange={handleInputChange}
          autoComplete="off"
          className="md:col-span-1"
        />

        <Select
          label="Tipo de Pessoa"
          selectionMode="multiple"
          items={TYPES_LIST}
          selectedKeys={new Set(person.contact_type)}
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
        <div className="flex items-center gap-2">
          <Input
            label="CEP"
            name="zip_code"
            value={person.zip_code || ""}
            onChange={handleInputChange}
            autoComplete="off"
          />
          <Button onClick={() => fetchCep(person.zip_code!)}>Buscar</Button>
        </div>
        <Input
          isDisabled
          label="Endereço"
          name="address"
          value={person.address || ""}
          onChange={handleInputChange}
          autoComplete="off"
          className="md:col-span-2"
        />
        <Input
          label="Número"
          name="number"
          value={person.number || ""}
          onChange={handleInputChange}
          autoComplete="off"
          className="md:col-span-1"
        />

        <Input
          isDisabled
          label="Bairro"
          name="neighbourhood"
          value={person.neighbourhood || ""}
          onChange={handleInputChange}
          autoComplete="off"
          className="col-span-1"
        />
        <Input
          isDisabled
          label="Cidade"
          name="city"
          value={person.city || ""}
          onChange={handleInputChange}
          autoComplete="off"
          className="col-span-1"
        />
        <Input
          label="Complemento"
          name="complement"
          value={person.complement || ""}
          onChange={handleInputChange}
          autoComplete="off"
          className="col-span-2"
        />
      </div>

      <div className="flex">
        <Button variant="solid" type="button" onClick={onSubmit}>
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
