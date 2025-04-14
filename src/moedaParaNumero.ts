function moedaParaNumero(moeda: string) {
  const moedaFormatada = Number(moeda.replace(/\./g, "").replace(/,/g, "."));
  if (!isNaN(moedaFormatada)) {
    return Number(moedaFormatada);
  } else {
    return null;
  }
}
export default moedaParaNumero;
