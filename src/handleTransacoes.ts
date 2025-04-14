import normalizarDados from "./normalizarDados";
import preencherEstatisticas from "./preencherEstatisticas";
import preencherTabela from "./preencherTabela";

function handleTransacoes(data: TransacoesBase[]) {
  if (!data) return;
  const transacoes = data.map(normalizarDados);
  preencherTabela(transacoes);
  preencherEstatisticas(transacoes);
}
export default handleTransacoes;
