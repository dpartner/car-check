(() => {
  const refs = {
    openAddMenuBtn: document.querySelector('[service-open]'),
    closeAddMenuBtn: document.querySelector('[service-close]'),
    Menu: document.querySelector('[service]'),
  };

  refs.openAddMenuBtn.addEventListener('click', toggleAddMenu);
  refs.closeAddMenuBtn.addEventListener('click', toggleAddMenu);

  function toggleAddMenu() {
    refs.Menu.classList.toggle('visually-hidden');
  }
})();
