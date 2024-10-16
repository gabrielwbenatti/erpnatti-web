"use client";

import PurchasesFormComp from "@/components/purchases/purchases.form";
import MainWrapperComp from "@/components/shared/main.wrapper";
import { Purchase } from "@/models/Purchase";
import { useState } from "react";

export default function PurchasesCreatePage() {
  const [purchase, setPurchase] = useState<Purchase>({});

  const handleChangeData = (purchase: Purchase) => setPurchase(purchase);

  return (
    <MainWrapperComp>
      <h1 className="text-xl font-bold">Novo Cadastro</h1>

      <PurchasesFormComp
        initialData={purchase}
        onChangeData={handleChangeData}
      />
    </MainWrapperComp>
  );
}
