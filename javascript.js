const botao = document.getElementById('Clique para ver uma mensagem');
let clicado = false;

botao.addEventListener('click', function () {
  if (!clicado) {
    botao.textContent = 'Olá, seja bem vindo!';
    clicado = true;
  } else {
    botao.textContent = 'Clique aqui';
    clicado = false;
  }
});