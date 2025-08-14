const btn = document.querySelector('.nav-toggle');
const nav = document.querySelector('[data-nav]');
if (btn && nav) {
  btn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded', String(isOpen));
  });
}
// year
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
