(() => {
  const refs = {
    openModalBtn: document.querySelector('#is-open-mobile'),
    closeModalBtn: document.querySelector('#mobile-close-btn'),
    modal: document.querySelector('#mobile-form'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-open-mobile');
  }
})();
