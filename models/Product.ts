export interface Product {
  id?: number;
  nome: string;
  referencia?: string;
  codigo_barra?: string;
  movimenta_estoque: boolean;
  status: boolean;
  estoque_minimo?: number;
  estoque_maximo?: number;
  grupo_produto_id?: number;
  linha_produto_id?: number;

  dt_hr_inclusao?: Date;
  dt_hr_alteracao?: Date;
}
