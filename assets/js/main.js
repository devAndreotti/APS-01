// Cor após momento 0 ------------------------------------------------------ //
const newColor = document.getElementById('navbar-container');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 0) {
    newColor.classList.add('scrolled');
  } else {
    newColor.classList.remove('scrolled');
  }
});


// Desabilitando após momento final ---------------------------------------- //
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar-container');
  const scrollPosition = window.scrollY || window.pageYOffset || document.documentElement.scrollTop;

  const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
  const scrollThreshold = 100; // Define o valor de deslocamento que indica que a barra de rolagem está no final

  if (scrollPosition >= totalHeight - scrollThreshold) {
    navbar.style.display = 'none'; // Esconde a barra de navegação
  } else {
    navbar.style.display = 'flex'; // Exibe a barra de navegação
  }
});


// Deslizar suave ---------------------------------------------------------- //
$("#navbar a, .button, #under-navbar a, #blog-navbar a, #glossary li a").on("click", function (event) {
  if (this.hash !== "") {
      event.preventDefault();

      const anchor = this.hash;

      $("html, body").animate(
          {
              scrollTop: $(anchor).offset().top - 200
          },
          300
      );
  }
});


// cursor ------------------------------------------------------------------ //
const cursor = document.querySelector('.cursor');
const btns = document.querySelectorAll('a, .checkbtn');

document.addEventListener('mousemove', function (e) {
  var cursor = document.querySelector('.cursor');
  cursor.style.left = e.clientX + 'px';
  cursor.style.top = e.clientY + 'px';
});

btns.forEach(function(btn) {
  btn.addEventListener('mouseover', function() {
    cursor.classList.add('hovered');
  });

  btn.addEventListener('mouseout', function() {
    cursor.classList.remove('hovered');
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
