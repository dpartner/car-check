(() => {
  const refs = {
    openAddMenuBtn: document.querySelector('[menu-open]'),
    closeAddMenuBtn: document.querySelector('[menu-close]'),
    Menu: document.querySelector('[menu]'),
  };

  refs.openAddMenuBtn.addEventListener('click', toggleAddMenu);
  refs.closeAddMenuBtn.addEventListener('click', toggleAddMenu);

  function toggleAddMenu() {
    refs.Menu.classList.toggle('header__menu--is-open');
  }
})();
