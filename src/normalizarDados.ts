import dataParaDate from "./dataParaDate";
import moedaParaNumero from "./moedaParaNumero";

function normalizarDados(dados: TransacoesBase): Transacoes {
  return {
    nome: dados.Nome,
    email: dados.Email,
    data: dataParaDate(dados.Data),
    status: dados.Status,
    id: dados.ID,
    cliente: Boolean(dados["Cliente Novo"]),
    pagamento: dados["Forma de Pagamento"],
    moeda: dados["Valor (R$)"],
    valor: moedaParaNumero(dados["Valor (R$)"]),
  };
}
export default normalizarDados;
