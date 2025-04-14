async function fetchApi(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
}
fetchApi("https://api.origamid.dev/json/transacoes.json");
