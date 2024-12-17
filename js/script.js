// Efeito de escrita automática
const text = "Olá, eu sou Pedro!";
let index = 0;

const typing = () => {
  document.querySelector('.auto-typing').textContent = text.slice(0, index++);
  if (index <= text.length) setTimeout(typing, 100);
};

typing();

// Efeito de fade-in
const fadeInElements = document.querySelectorAll('.fade-in');
const fadeIn = () => {
  fadeInElements.forEach((element) => {
    element.classList.add('visible');
  });
};
setTimeout(fadeIn, 500);

// Animação de scroll
const smoothScroll = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
};
document.querySelector('.btn-topo').addEventListener('click', smoothScroll);

// Efeito de hover nos cards
const cards = document.querySelectorAll('.especialidades-box');
const addHoverEffect = () => {
  cards.forEach((card) => {
    card.addEventListener('mouseover', () => {
      card.classList.add('hover');
    });
    card.addEventListener('mouseout', () => {
      card.classList.remove('hover');
    });
  });
};
addHoverEffect();