type Product = {
  id: number;
  name: string;
  barcode: string;
  reference: string;
  current_stock: number;
  group: {};
  line: {};
};

export const products: Product[] = [
  {
    id: 11,
    name: "AMOSTRAS E DEMONSTRADORES",
    barcode: "",
    reference: "000001",
    current_stock: 0,
    group: {
      id: 1,
      name: "Cuidados Com o Cabelo",
    },
    line: {
      id: 1,
      name: "Cuide-se Bem",
    },
  },
  {
    id: 9,
    name: "CBEM NUVEM CONDIC 250ml",
    barcode: "",
    reference: "82794",
    current_stock: 0,
    group: {
      id: 1,
      name: "Cuidados Com o Cabelo",
    },
    line: {
      id: 1,
      name: "Cuide-se Bem",
    },
  },
  {
    id: 8,
    name: "CBEM NUVEM SHAMP 250ml",
    barcode: "",
    reference: "82788",
    current_stock: 0,
    group: {
      id: 1,
      name: "Cuidados Com o Cabelo",
    },
    line: {
      id: 1,
      name: "Cuide-se Bem",
    },
  },
  {
    id: 4,
    name: "SIÀGE HAIR PLASTIA CONDIC 200ml",
    barcode: "",
    reference: "93047",
    current_stock: 10,
    group: {},
    line: {},
  },
  {
    id: 3,
    name: "SIÀGE HAIR PLASTIA SHAMP 250ml",
    barcode: "",
    reference: "01641",
    current_stock: 10,
    group: {},
    line: {},
  },
  {
    id: 1,
    name: "SIÀGE NUTRI OL/POD CONDIC 200ml",
    barcode: "",
    reference: "93104",
    current_stock: 10,
    group: {},
    line: {},
  },
  {
    id: 2,
    name: "SIÀGE NUTRI OL/POD SHAMP 250ml",
    barcode: "",
    reference: "93103",
    current_stock: 10,
    group: {},
    line: {},
  },
  {
    id: 6,
    name: "SIÀGE RESG/IMEDIATO CONDIC 200ml",
    barcode: "",
    reference: "55803",
    current_stock: 0,
    group: {
      id: 1,
      name: "Cuidados Com o Cabelo",
    },
    line: {
      id: 6,
      name: "Siàge",
    },
  },
  {
    id: 7,
    name: "SIÀGE RESG/IMEDIATO SHAMP 250ml",
    barcode: "",
    reference: "55802",
    current_stock: 0,
    group: {
      id: 1,
      name: "Cuidados Com o Cabelo",
    },
    line: {
      id: 6,
      name: "Siàge",
    },
  },
  {
    id: 10,
    name: "TODODIA HID DES CPO FRAMBOESA 400ml",
    barcode: "",
    reference: "2818",
    current_stock: 0,
    group: {
      id: 1,
      name: "Cuidados Com o Cabelo",
    },
    line: {
      id: 1,
      name: "Cuide-se Bem",
    },
  },
];
