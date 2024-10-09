import { Input } from "@nextui-org/input";

export default function HomeAsidePanelComponent() {
  return (
    <div className="mx-8 mt-6 flex flex-col space-y-4">
      <div className="h-28 w-full">
        <img
          src="/infonacci.png"
          className="h-full w-full object-contain"
          alt=""
        />
      </div>

      <Input
        type="text"
        id="search"
        autoComplete="off"
        placeholder="Pesuise por ações"
      />
    </div>
  );
}
