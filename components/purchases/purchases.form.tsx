"use client";

import { Purchase } from "@/models/Purchase";
import { FormProps } from "@/types/FormProps";
import * as peopleService from "@/services/peopleService";
import { DatePicker } from "@nextui-org/date-picker";
import { Input } from "@nextui-org/input";
import { ChangeEvent, useEffect, useState } from "react";
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/modal";

export default function PurchasesFormComp({
  initialData,
  onChangeData,
}: FormProps<Purchase>) {
  const [purchase, setPurchase] = useState<Purchase>(initialData);
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPurchase((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    async function fetchData() {
      const res = await peopleService.index();
    }
    fetchData();
  });

  useEffect(() => {
    onChangeData(purchase);
  }, [purchase]);

  return (
    <form className="md:space-y-3">
      <div className="md:grid md:grid-cols-4 md:gap-3">
        <span className="md:col-span-4 md:mt-3 md:text-small">Emitente</span>
        <Input
          value={purchase.numero_documento || ""}
          label="Número do Documento"
          name="numero_documento"
          autoComplete="off"
          onChange={handleInputChange}
          className="md:col-span-1"
        />
        <Input
          value={purchase.serie_documento || ""}
          label="Série do Documento"
          name="serie_documento"
          autoComplete="off"
          onChange={handleInputChange}
          className="md:col-span-1"
        />
        <DatePicker
          label="Data de Emissão"
          name="data_emissao"
          className="md:col-span-1"
          onChange={(value) =>
            setPurchase((prev) => ({ ...prev, data_emissao: value }))
          }
        />
        <DatePicker
          label="Data de Entrada"
          name="data_entrada"
          className="md:col-span-1"
          onChange={(value) =>
            setPurchase((prev) => ({ ...prev, data_entrada: value }))
          }
        />
        <Input
          label="Fornecedor"
          name="pessoa"
          className="md:col-span-4"
          onClick={onOpen}
        />

        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          scrollBehavior="inside"
        >
          <ModalContent>
            <ModalHeader>Selecione o Fornecedor</ModalHeader>
            <ModalBody>
              <Input
                label="Busque por Razão Social, Nome Fantasia ou CNPJ"
                size="sm"
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      </div>
    </form>
  );
}
