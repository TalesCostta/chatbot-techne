function chuva() {
  let nuvem = document.querySelector('.nuvem');
  let elementoDiv = document.createElement('div');
  let left = Math.floor(Math.random() * 310);
  let width = Math.random() * 5;
  let height = Math.random() * 50;
  let duracao = Math.random() * .5;

  nuvem.appendChild(elementoDiv);
  elementoDiv.classList.add('gota');
  elementoDiv.style.left = left + 'px';
  elementoDiv.style.width = .5 + width + 'px';
  elementoDiv.style.height = .5 + height + 'px';
  elementoDiv.style.animationDuration = 1 + duracao + 's';

  setTimeout(function () {
    nuvem.removeChild(elementoDiv);
  }, 2000)
}

setInterval(function () {
  chuva();
}, 40);

function carregarScript() {
  // Obtém o valor do campo de entrada
  var url = document.getElementById('urlInput').value;

  // Criação dinâmica do elemento script
  var scriptElement = document.createElement('script');
  scriptElement.type = 'text/javascript';
  scriptElement.src = url + 'img/bot.js';

  // Adiciona o elemento script ao corpo do documento
  document.body.appendChild(scriptElement);
}