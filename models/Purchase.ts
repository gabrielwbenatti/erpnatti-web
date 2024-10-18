import { Pessoa } from "./Pessoa";
import { PurchaseItem } from "./PurchaseItem";

export interface Purchase {
  id?: number;
  pessoa_id?: number;
  data_emissao?: Date;
  data_entrada?: Date;
  valor_produto?: number;
  valor_frete?: number;
  valor_outros?: number;
  valor_total?: number;
  numero_documento?: string;
  serie_documento?: string;

  compras_itens?: PurchaseItem[];

  pessoa?: Pessoa;
}
