function normalizarDados(dados: TransacoesBase) {
  return {
    nome: dados.Nome,
    email: dados.Email,
    data: dados.Data,
    status: dados.Status,
    id: dados.ID,
    cliente: dados["Cliente Novo"],
    pagamento: dados["Forma de Pagamento"],
    valor: dados["Valor (R$)"],
  };
}
export default normalizarDados;
