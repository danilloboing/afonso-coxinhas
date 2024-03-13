window.onload = function () {
   localStorage.setItem("qtdCoxinhas", 50);
}
document
  .getElementById("pedidoForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    validarFormulario();
  });

function validarFormulario() {
  var nome = document.getElementById("nome").value.trim();
  var telefone = document.getElementById("telefone").value.trim();
  var quantidade = parseInt(document.getElementById("quantidade").value);
  var sabor = document.getElementById("sabor").value;

  if (!nome || !telefone || quantidade <= 0 || !sabor) {
    alert("Por favor, preencha todos os campos corretamente.");
    return;
  }

  var estoqueAtual = localStorage.getItem("qtdCoxinhas");
  if (quantidade > estoqueAtual) {
    alert("Desculpe, não temos coxinhas suficientes em estoque.");
    return;
  }

  var mensagem = "Novo Pedido:\n\n";
  mensagem += "Nome: " + nome + "\n";
  mensagem += "Telefone: " + telefone + "\n";
  mensagem += "Quantidade: " + quantidade + "\n";
  mensagem += "Sabor: " + sabor;

  var url =
    "https://api.whatsapp.com/send?phone=47999375740&text=" +
    encodeURIComponent(mensagem);

  // Redirecionar para o WhatsApp
  window.open(url, "_blank");
  resetarFormulario();
}

function resetarFormulario() {
  document.getElementById("pedidoForm").reset();
}
