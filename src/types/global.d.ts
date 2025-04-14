type typePagamento = "Boleto" | "Cartão de Crédito";
type typeStatus =
  | "Paga"
  | "Recusada pela operadora de cartão"
  | "Aguardando pagamento"
  | "Estornada";
interface TransacoesBase {
  Nome: string;
  Email: string;
  Data: string;
  Status: typeStatus;
  ID: number;
  ["Cliente Novo"]: boolean;
  ["Forma de Pagamento"]: typePagamento;
  ["Valor (R$)"]: string;
}
