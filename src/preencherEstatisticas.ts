import total from "./total";

function preencherEstatisticas(transacoes: Transacoes[]) {
  const valorTotal = document.querySelector("#total");
  if (valorTotal instanceof HTMLElement) {
    valorTotal.innerHTML = `Total: ${total(transacoes).toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    })}`;
  }
}
export default preencherEstatisticas;
