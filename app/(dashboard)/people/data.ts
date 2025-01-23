type People = {
  id: number;
  company_name: string;
  trading_name?: string | null;
  cpf_cnpj?: string;
};

export const people: People[] = [
  {
    id: 1,
    company_name: "GAJA COMERCIAL LTDA",
    trading_name: "BOTICÁRIO",
    cpf_cnpj: "48575886000128",
  },
  {
    id: 2,
    company_name: "NATURA COSMÉTICOS S/A",
    trading_name: "NATURA",
    cpf_cnpj: "71673990005136",
  },
];
