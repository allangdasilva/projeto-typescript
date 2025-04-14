function preencherTabela(transacoes: Transacoes[]) {
  const tbody = document.querySelector("#tbody");

  if (tbody instanceof HTMLElement) {
    transacoes.forEach((transacao) => {
      tbody.innerHTML += `
      <tr>
        <td>${transacao.nome}</td>
        <td>${transacao.email}</td>
        <td>${transacao.moeda}</td>
        <td>${transacao.pagamento}</td>
        <td>${transacao.status}</td>
      </tr>
    `;
    });
  }
}
export default preencherTabela;
