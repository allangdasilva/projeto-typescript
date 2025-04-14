import normalizarDados from "./normalizarDados";

async function fetchApi(url: string) {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Erro:" + response.status);
    const data = await response.json();
    handleTransacoes(data);
    return data;
  } catch (e) {
    if (e instanceof Error) console.error("fetchApi: " + e.message);
    return null;
  }
}
fetchApi("https://api.origamid.dev/json/transacoes.json");
function handleTransacoes(data: TransacoesBase[]) {
  const transacoes = data.map(normalizarDados);
  //console.log(transacoes.map((ele) => ele.data));
}
