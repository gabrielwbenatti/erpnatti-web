export interface Pessoa {
  id?: number;
  razao_social: string;
  nome_fantasia?: string;
  cpf_cnpj: string;
  tipo_pessoa: string[];

  dt_hr_inclusao?: Date;
  dt_hr_alteracao?: Date;
}
