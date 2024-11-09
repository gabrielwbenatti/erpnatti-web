interface PersonDTO {
  id?: number;
  company_name: string;
  trading_name?: string;
  cpf_cnpj?: string;
  contact_type: Iterable<string>;
  status: boolean;

  zip_code?: string;
  address?: string;
  city?: string;
  neighbourhood?: string;
  number?: string;
  complement?: string;
  ibge_code?: number;
  reference_point?: string;
  email?: string;
}

export default PersonDTO;
