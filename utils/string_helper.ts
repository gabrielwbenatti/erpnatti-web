function formatCpfCnpj(value?: string) {
  if (!value) return "";

  switch (value.length) {
    case 11:
      return value.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, "$1.$2.$3-$4");
    case 14:
      return value.replace(
        /(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/,
        "$1.$2.$3/$4-$5",
      );
    default:
      return "";
  }
}

export { formatCpfCnpj };
