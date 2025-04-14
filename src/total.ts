type TransacoesValor = Transacoes & { valor: number };
function filtrarValor(transacoes: Transacoes): transacoes is TransacoesValor {
  return transacoes.valor !== null;
}
function total(transacoes: Transacoes[]) {
  return transacoes.filter(filtrarValor).reduce((acc, item) => {
    return acc + item.valor;
  }, 0);
}
export default total;
