/* ================== MODAL DESKTOP ================== */

const MODAL_ACTIVE_CLASS_NAME = 'is-open';

const formModal = document.querySelector('#form-modal');
const form = document.querySelector('#form');

const openFormModalBtn = document.querySelector('#open-form-modal-btn');
const launchBtn = document.querySelector('#launch-btn');
const closeBtns = document.querySelectorAll('.modal-close-btn');

openFormModalBtn.addEventListener('click', () => {
  formModal.classList.add(MODAL_ACTIVE_CLASS_NAME);
});

const closeFormModal = () => {
  formModal.classList.remove(MODAL_ACTIVE_CLASS_NAME);
};

const openSuccessModal = () => {
  successModal.classList.add(MODAL_ACTIVE_CLASS_NAME);
};

closeBtns.forEach(btn => {
  btn.addEventListener('click', e => {
    e.stopPropagation();
    closeFormModal();
  });
});

form.addEventListener('submit', e => {
  e.preventDefault();
  const formData = new FormData(form);

  fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams(formData).toString(),
  })
    .then(() => {
      closeFormModal();
      setTimeout(closeSuccessModal, 3000);
    })
    .catch(error => console.log('Sending form failed'));
});

/* ================== MODAL MOBILE BURGER ================== */
