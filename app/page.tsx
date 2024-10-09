import HomeAsidePanelComponent from "../components/home/home.aside.panel";
import HomeGridComponent from "../components/home/home.grid";
import HomeNavComponent from "../components/home/home.nav";

export default function HomePage() {
  const menus = [
    { id: 1, caption: "Início" },
    { id: 2, caption: "Financeiro" },
    { id: 3, caption: "Vendas" },
    { id: 4, caption: "Produção" },
    { id: 5, caption: "Gerencial" },
  ];

  const atalhos = [
    { id: 1, caption: "Pessoas", route: "/pessoas" },
    { id: 2, caption: "Orçamentos" },
    { id: 3, caption: "Pedidos de Venda" },
    { id: 4, caption: "Nota Fiscal Eletrôncia", route: "/nfe" },
    { id: 5, caption: "Títulos a Receber" },
    { id: 6, caption: "Produtos", route: "/products" },
    { id: 8, caption: "Pedidos de Compra" },
    { id: 9, caption: "Títulos a Pagar" },
    { id: 10, caption: "Acompanhamento Geral" },
  ];

  return (
    <>
      <nav>
        <HomeNavComponent menus={menus} />
      </nav>

      <div className="flex h-full">
        <aside className="md:w-3/12 xl:w-2/12">
          <HomeAsidePanelComponent />
        </aside>

        <main className="md:w-9/12 xl:w-10/12">
          <HomeGridComponent atalhos={atalhos} />
        </main>
      </div>
    </>
  );
}
