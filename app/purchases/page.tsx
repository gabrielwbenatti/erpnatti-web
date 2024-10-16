import MainWrapperComp from "@/components/shared/main.wrapper";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function PurchasesPage() {
  return (
    <>
      <Link href="/purchases/create">
        <Button variant="solid">Novo</Button>
      </Link>

      <MainWrapperComp>
        <h1>PurchasesPage</h1>
      </MainWrapperComp>
    </>
  );
}
