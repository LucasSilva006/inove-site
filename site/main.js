const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  menu.classList.toggle("show");
});


const form = document.getElementById('formulario');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  // Pegando valores
  const nome = form.nome.value.trim();
  const email = form.email.value.trim();
  const servico = form.servico.value;
  const mensagem = form.mensagem.value.trim();

  // Montando mensagem para WhatsApp
  const texto = `Olá! Quero iniciar um projeto.\n\nNome: ${nome}\nE-mail: ${email}\nServiço: ${servico}\nMensagem: ${mensagem}`;

  // Número do seu WhatsApp (com código do país, sem + e sem espaços)
  const numero = '5581981385158';

  // Criando link com mensagem codificada
  const url = `https://wa.me/${numero}?text=${encodeURIComponent(texto)}`;

  // Abre o WhatsApp (web ou app)
  window.open(url, '_blank');
});