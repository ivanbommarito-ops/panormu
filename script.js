const nav = document.getElementById('nav');
const revealItems = document.querySelectorAll('.reveal');
const chaosBoard = document.getElementById('chaosBoard');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.16 });

revealItems.forEach(item => observer.observe(item));

const chaosObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      setTimeout(() => chaosBoard.classList.add('ordered'), 1100);
    } else {
      chaosBoard.classList.remove('ordered');
    }
  });
}, { threshold: 0.45 });

chaosObserver.observe(chaosBoard);

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });
