(() => {
  const refs = {
    openAddMenuBtn: document.querySelector('[repairs-open]'),
    closeAddMenuBtn: document.querySelector('[repairs-close]'),
    Menu: document.querySelector('[repairs]'),
  };

  refs.openAddMenuBtn.addEventListener('click', toggleAddMenu);
  refs.closeAddMenuBtn.addEventListener('click', toggleAddMenu);

  function toggleAddMenu() {
    refs.Menu.classList.toggle('visually-hidden');
  }
})();
