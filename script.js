const mobileNav = document.querySelector('.mobile-nav');
const btn = document.querySelector('.btn');
const link1 = document.querySelector('.link1');
const link2 = document.querySelector('.link2');
const link3 = document.querySelector('.link3');

link1.addEventListener('click', () => {
  mobileNav.classList.remove('active');
});

link2.addEventListener('click', () => {
  mobileNav.classList.remove('active');
});

link3.addEventListener('click', () => {
  mobileNav.classList.remove('active');
});

btn.addEventListener('click', () => {
  mobileNav.classList.toggle('active');
});
