import handleTransacoes from "./handleTransacoes";

async function fetchApi<T>(url: string): Promise<T | null> {
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
export default fetchApi;
