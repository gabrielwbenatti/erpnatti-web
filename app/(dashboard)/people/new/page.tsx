import { NattiButton, NattiButtonLink } from "@/components/common/NattiButton";
import NattiInput from "@/components/common/NattiInput";
import { Save, X } from "lucide-react";

const PeopleNewPage = () => {
  const handleSubmit = () => {};

  return (
    <div className="flex flex-col gap-8 px-8 pt-8">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">new person</h1>
        <div className="flex gap-3">
          <NattiButton label="save" icon={<Save />} />
          <NattiButtonLink
            href="/products"
            label="cancel"
            icon={<X />}
            type="text-only"
          />
        </div>
      </div>
      <div className="flex flex-col">
        <form action="post" className="">
          <div className="grid grid-cols-12 gap-3">
            <NattiInput
              label="name"
              placeholder="name"
              className="col-span-6"
            />
            <NattiInput
              label="trading name"
              placeholder="trading name"
              className="col-span-6"
            />

            <NattiInput
              label="cpf/cnpj"
              placeholder="cpf/cnpj"
              className="col-span-3"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default PeopleNewPage;
