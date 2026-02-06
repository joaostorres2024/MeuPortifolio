document.getElementById("btnCv").addEventListener("click", () => {
  const link = document.createElement("a");
  link.href = "downloads/curriculoJoaoPedro.pdf";
  link.download = "curriculoJoaoPedro.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
});