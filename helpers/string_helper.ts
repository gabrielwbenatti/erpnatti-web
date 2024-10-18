const numbersOnly = (value: string): string => {
  return value.replace(/\D/g, "");
};

const formatCpfCnpj = (cpf_cnpj?: string): string => {
  if (!cpf_cnpj) return "";

  const document = numbersOnly(cpf_cnpj);
  const length = cpf_cnpj.length;

  switch (length) {
    case 11: {
      // Formata como XXX.XXX.XXX-XX
      return document.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/g, "$1.$2.$3-$4");
    }
    case 14: {
      // Formata como XX.XXX.XXX/XXXX.XX
      return document.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/g,
        "$1.$2.$3/$4-$5",
      );
    }
    default: {
      return document;
    }
  }
};

export { numbersOnly, formatCpfCnpj };
