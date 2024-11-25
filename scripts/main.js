const modoDark = document.getElementById('modo-dark');
const body = document.body;
const nav = document.querySelector('nav'); // Seleciona o elemento <nav>

// Define o modo inicial como claro
function setInitialMode() {
  body.classList.add('light');
  nav.classList.add('light');
}

// Executa a função de modo inicial ao carregar a página
setInitialMode();

// Função para alternar entre os modos
modoDark.addEventListener('click', () => {
  if (body.classList.contains('dark')) {
    // Alterna para o modo claro
    body.classList.remove('dark');
    body.classList.add('light');
    nav.classList.remove('dark');
    nav.classList.add('light');
  } else {
    // Alterna para o modo escuro
    body.classList.remove('light');
    body.classList.add('dark');
    nav.classList.remove('light');
    nav.classList.add('dark');
  }
  
  // Alterna entre os modos e as imagens
  const icon = body.classList.contains('dark') ? 'night-mode.png' : 'sol.png';
  const img = modoDark.querySelector('img');
  img.src = `assets/images/${icon}`;  // Atualiza a imagem dentro do botão
  img.alt = body.classList.contains('dark') ? 'Modo escuro' : 'Modo claro';
});

// ---------------------------------------------------------------------------
const contatoLink = document.getElementById('contato-link');
const dropdownMenu = document.querySelector('.dropdown-menu');
const dropdownItem = contatoLink.parentElement; // Obter o elemento pai

// Adiciona o evento de mouseenter para abrir o dropdown
contatoLink.addEventListener('mouseenter', function () {
    dropdownItem.classList.add('show-dropdown'); // Adiciona a classe para mostrar o dropdown
    dropdownMenu.classList.add('show'); // Adiciona a classe para mostrar o dropdown
    contatoLink.classList.add('selected'); // Adiciona a classe 'selected' ao link
});

// Adiciona o evento de mouseleave para fechar o dropdown
dropdownItem.addEventListener('mouseleave', function () {
    dropdownItem.classList.remove('show-dropdown'); // Remove a classe para esconder o dropdown
    dropdownMenu.classList.remove('show'); // Remove a classe para esconder o dropdown
    contatoLink.classList.remove('selected'); // Remove a classe 'selected' do link
});

// Adiciona um evento para manter o dropdown aberto enquanto o mouse estiver sobre ele
dropdownMenu.addEventListener('mouseenter', function () {
    dropdownItem.classList.add('show-dropdown'); // Mantém o dropdown aberto
    dropdownMenu.classList.add('show'); // Mantém a classe para mostrar o dropdown
    contatoLink.classList.add('selected'); // Mantém a classe 'selected' no link
});

// Adiciona um evento para fechar o dropdown quando o mouse sair do dropdown
dropdownMenu.addEventListener('mouseleave', function () {
    dropdownItem.classList.remove('show-dropdown'); // Remove a classe para esconder o dropdown
    dropdownMenu.classList.remove('show'); // Remove a classe para esconder o dropdown
    contatoLink.classList.remove('selected'); // Remove a classe 'selected' do link
});