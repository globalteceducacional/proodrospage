// Dados cadastrais públicos da Proodos Tecnologia e Inovação Ltda.
// Telefone e endereço: cadastro do CNPJ 38.891.716/0001-07 (São Luís/MA).
// O e-mail do cadastro não entra aqui porque a fonte pública o exibia ofuscado.

export const company = {
  legalName: 'Proodos Tecnologia e Inovação Ltda.',
  cnpj: '38.891.716/0001-07',
  cnpjDigits: '38891716000107',
  size: 'Microempresa (ME)',
  founded: '25/09/2020',
  nature: 'Sociedade Limitada',
  phoneDisplay: '(98) 99194-9963',
  phoneE164: '5598991949963',
  address: {
    line: 'Rua 02, nº 10, Quadra 04, Lote 05',
    district: 'Angelim',
    city: 'São Luís/MA',
    cep: '65060-641',
  },
}

export function addressLine() {
  const { line, district, city, cep } = company.address
  return `${line}, ${district}, ${city}, CEP ${cep}`
}
