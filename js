let fotoBase64 = "";

const inputFoto = document.querySelector("#foto");

inputFoto.addEventListener("change", function () {
  const arquivo = inputFoto.files[0];

  if (!arquivo) {
    return;
  }

  const leitor = new FileReader();

  leitor.onload = function () {
    fotoBase64 = leitor.result;
  };

  leitor.readAsDataURL(arquivo);
});
const produto = {
  nome: "Teclado",
  preco: 150,
  foto: fotoBase64,
};

let produtos = JSON.parse(localStorage.getItem("produtos") || "[]");

produtos.push(produto);

localStorage.setItem("produtos", JSON.stringify(produtos));

const produtosSalvos = JSON.parse(localStorage.getItem("produtos") || "[]");

produtosSalvos.forEach(function (produto) {
  const imagem = document.createElement("img");

  imagem.src = produto.foto;
  imagem.width = 150;

  document.body.appendChild(imagem);
});
