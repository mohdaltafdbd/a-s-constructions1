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

document.querySelectorAll('.carousel').forEach(carousel => {
  let images = carousel.querySelectorAll('img');
  let index = 0;

  function showNextImage() {
    images[index].classList.remove('active');
    index = (index + 1) % images.length;
    images[index].classList.add('active');
  }

  images[0].classList.add('active');
  setInterval(showNextImage, 3000); // change every 3 sec
});
