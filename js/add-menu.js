(() => {
  const refs = {
    openAddMenuBtn: document.querySelector('[add-menu-open]'),
    closeAddMenuBtn: document.querySelector('[add-menu-close]'),
    addMenu: document.querySelector('[add-menu]'),
    heading: document.querySelector('[is-hiden]'),
    content: document.querySelector('[not-hiden]'),
  };

  refs.openAddMenuBtn.addEventListener('click', toggleAddMenu);
  refs.closeAddMenuBtn.addEventListener('click', toggleAddMenu);

  function toggleAddMenu() {
    refs.addMenu.classList.toggle('add-menu__wrap--open');
    refs.heading.classList.toggle('visually-hidden');
    refs.content.classList.toggle('visually-hidden');
  }
})();
