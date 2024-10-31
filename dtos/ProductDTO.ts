interface ProductDTO {
  id?: number;
  name: string;
  barcode?: string;
  reference?: string;
  move_stock: boolean;
  status: boolean;
  minimum_stock?: number;
  maximum_stock?: number;
  current_stock?: number;

  product_group_id?: number;
  product_line_id?: number;
}

export default ProductDTO;
