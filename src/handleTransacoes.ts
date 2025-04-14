import normalizarDados from "./normalizarDados";
import preencherTabela from "./preencherTabela";

function handleTransacoes(data: TransacoesBase[]) {
  const transacoes = data.map(normalizarDados);
  preencherTabela(transacoes);
  console.log(transacoes);
}
export default handleTransacoes;
