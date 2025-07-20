document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('btnEnviar').addEventListener('click', function() {
    var nome = document.getElementById('nome').value.trim();
    var mensagem = document.getElementById('mensagem').value.trim();

    if (nome === '' || mensagem === '') {
      alert('Por favor, preencha seu nome e mensagem.');
      return;
    }

    var numero = '5594984046320'; // Seu número com DDI +55 e DDD
    var texto = 'Olá, meu nome é ' + nome + '! ' + mensagem;
    var url = 'https://wa.me/' + numero + '?text=' + encodeURIComponent(texto);

    window.location.href = url;
  });
});


