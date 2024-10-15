const menuBtn = document.querySelector('.menu__btn');
const headerNav = document.querySelector('.header__nav');

menuBtn.addEventListener('click', () => {
  headerNav.classList.toggle('open');
      document.documentElement.classList.toggle("no-scroll");
    document.body.classList.toggle("no-scroll");
});