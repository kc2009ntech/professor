formulario.addEventListener("submit", function (event) {
  event.preventDefault();

  // Recupera os dados do formulário
  const nome = inputNome.value.trim();
  const preco = Number(inputPreco.value);

  // Validação
  if (nome === "" || preco <= 0 || fotoBase64 === "") {
    mostrarMensagem("Preencha todos os campos corretamente!", "warning");

    return;
  }

  // Cria o objeto produto
  const produto = {
    nome: nome,
    preco: preco,
    foto: fotoBase64,
  };
  // Adiciona o produto ao array

  const novosProdutos = [...produtos, produto];

  // Salva o array no navegador
  try {
    localStorage.setItem("produtos", JSON.stringify(novosProdutos));
  } catch (error) {
    mostrarMensagem("Não foi possível salvar", "danger");

    return;
  }
  // Limpa o formulário
  formulario.reset();

  fotoBase64 = "";

  previa.src = "";
  previa.classList.add("d-none");

  // Exibe mensagem de sucesso
  mostrarMensagem("Produto cadastrado com sucesso!", "success");

  // Atualiza a lista de produtos
  mostrarProdutos();
});
/* =====================================
ETAPA 5 - EXIBIR PRODUTOS
===================================== */

function mostrarProdutos() {
  // Limpa a lista antes de reconstruí-la
  listaProdutos.innerHTML = "";

  // Verifica se existem produtos
  if (produtos.length === 0) {
    listaProdutos.innerHTML =
      "<p class='text-secondary'>Nenhum produto cadastrado.</p>";

    return;
  }

  for (let i = 0; Array.length; i++) {
    //instruções
  }

  // Percorre o array
  produtos.forEach(function (produto) {
    // Cria a coluna Bootstrap
    const coluna = document.createElement("div");

    coluna.className = "col-12 col-md-6";

    // Cria o card
    const card = document.createElement("div");

    card.className = "card h-100 shadow-sm";

    // Cria a imagem
    const imagem = document.createElement("img");

    imagem.src = produto.foto;
    imagem.alt = "Foto de " + produto.nome;

    imagem.className = "card-img-top";

    imagem.style.height = "180px";
    imagem.style.objectFit = "cover";

    // Cria o corpo do card
    const corpo = document.createElement("div");

    corpo.className = "card-body";

    // Cria o título
    const titulo = document.createElement("h5");

    titulo.className = "card-title";
    titulo.textContent = produto.nome;

    // Cria o preço
    const preco = document.createElement("p");

    preco.className = "card-text";

    preco.textContent = "R$ " + produto.preco.toFixed(2);

    // Monta o card
    corpo.appendChild(titulo);
    corpo.appendChild(preco);

    card.appendChild(imagem);
    card.appendChild(corpo);

    coluna.appendChild(card);

    // Adiciona o card à página
    listaProdutos.appendChild(coluna);
  });
}

/* =====================================
ETAPA 6 - EXIBIR MENSAGENS
===================================== */

function mostrarMensagem(texto, tipo) {
  mensagem.textContent = texto;

  mensagem.className = "alert alert-" + tipo + " mt-3";
}

/* =====================================
ETAPA 7 - CARREGAMENTO INICIAL
===================================== */

// Exibe os produtos recuperados do navegador
mostrarProdutos();
