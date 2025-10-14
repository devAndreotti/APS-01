// Cor após momento 0 ------------------------------------------------------ //
const newColor = document.getElementById('navbar-container'); // Seleciona o elemento da barra de navegação

window.addEventListener('scroll', () => { // Adiciona um ouvinte de evento para o evento de scroll
  if (window.pageYOffset > 0) {
    newColor.classList.add('scrolled'); // Adiciona a classe 'scrolled' quando a página é rolada para baixo
  } else {
    newColor.classList.remove('scrolled'); // Remove a classe 'scrolled' quando a página está no topo
  }
});


// Desabilitando após momento final ---------------------------------------- //
window.addEventListener('scroll', () => { // Adiciona um ouvinte de evento para o evento de scroll
  const navbar = document.getElementById('navbar-container'); // Seleciona o elemento da barra de navegação
  const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop; // Obtém a posição atual da rolagem

  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollThreshold = 100; // Define o valor de deslocamento que indica que a barra de rolagem está no final

  if (scrollPosition >= totalHeight - scrollThreshold) {
    navbar.style.display = 'none'; // Esconde a barra de navegação
  } else {
    navbar.style.display = 'flex'; // Exibe a barra de navegação
  }
});


// Deslizar suave ---------------------------------------------------------- //
$("#navbar a, .button, #under-navbar a, #blog-navbar a, #glossary li a").on("click", function (event) { // Adiciona um ouvinte de evento para o evento de clique
  if (this.hash !== "") {
      event.preventDefault(); // Previne o comportamento padrão do link

      const anchor = this.hash; // Obtém o valor do hash do link clicado

      $("html, body").animate( // Realiza a animação de rolagem suave
          {
              scrollTop: $(anchor).offset().top - 200 // Ajusta a posição de rolagem para considerar o deslocamento
          },
          300
      );
  }
});


// cursor ------------------------------------------------------------------ //
const cursor = document.querySelector('.cursor'); // Seleciona o elemento do cursor
const btns = document.querySelectorAll('a, .checkbtn'); // Seleciona todos os botões e links

document.addEventListener('mousemove', function (e) { // Adiciona um ouvinte de evento para o evento de movimento do mouse
  var cursor = document.querySelector('.cursor'); // Seleciona o elemento do cursor
  cursor.style.left = e.clientX + 'px'; // Define a posição horizontal do cursor
  cursor.style.top = e.clientY + 'px'; // Define a posição vertical do cursor
});

btns.forEach(function(btn) { // Itera sobre cada botão e link
  btn.addEventListener('mouseover', function() { // Adiciona um ouvinte de evento para o evento de mouseover
    cursor.classList.add('hovered'); // Adiciona a classe 'hovered' ao cursor
  });

  btn.addEventListener('mouseout', function() { // Adiciona um ouvinte de evento para o evento de mouseout
    cursor.classList.remove('hovered'); // Remove a classe 'hovered' do cursor
  });
});


// Glossário responsivo ---------------------------------------------------- //
// Seleciona o elemento com id 'glossary'
const glossary = document.getElementById('right-content');

// Adiciona um ouvinte de evento para o evento de scroll
window.addEventListener('scroll', function() {
  // Obtém a posição atual do scroll vertical
  const scrollY = window.scrollY || window.pageYOffset;

  // Define a nova posição vertical do elemento 'glossary'
  glossary.style.transform = `translateY(${scrollY}px)`;
});
