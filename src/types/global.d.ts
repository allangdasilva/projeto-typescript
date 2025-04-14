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
interface Transacoes {
  nome: string;
  email: string;
  data: Date;
  status: typeStatus;
  id: number;
  cliente: boolean;
  pagamento: typePagamento;
  valor: number | null;
  moeda: string;
}
