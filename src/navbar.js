import { enableScroll, disableScroll } from './scrollFunctions';

const initNavbar = () => {
  const openButton = document.querySelector('.header__open-menu-button');
  const closeButton = document.querySelector('.header__close-menu-button');
  const navbar = document.querySelector('.navigation');
  const navLinks = document.querySelectorAll('.navigation__link');

  const showMenu = () => {
    navbar.classList.add('navigation--active');
    openButton.style.visibility = 'hidden';
    closeButton.style.visibility = 'visible';

    disableScroll();
  };

  const hideMenu = () => {
    navbar.classList.remove('navigation--active');
    openButton.style.visibility = 'visible';
    closeButton.style.visibility = 'hidden';

    enableScroll();
  };

  openButton.addEventListener('click', showMenu);
  closeButton.addEventListener('click', hideMenu);

  navLinks.forEach((link) => {
    link.addEventListener('click', hideMenu);
  });
};

export default initNavbar;
