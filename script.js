const menuToggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

if (menuToggle && menu) {
  menuToggle.addEventListener('click', () => {
    const isOpen = menu.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  menu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      menu.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const form = document.getElementById('lead-form');
const formStatus = document.getElementById('form-status');

if (form && formStatus) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      formStatus.textContent = 'Проверьте обязательные поля формы.';
      return;
    }

    formStatus.textContent = 'Спасибо! Заявка отправлена. Мы свяжемся с вами в ближайшее время.';
    form.reset();
  });
}

const modal = document.getElementById('case-modal');
const modalTitle = document.getElementById('case-modal-title');
const modalText = document.getElementById('case-modal-text');
const modalClose = document.getElementById('case-modal-close');

const caseButtons = document.querySelectorAll('.case-open');
caseButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const card = button.closest('.case-card');
    if (!card || !modal || !modalTitle || !modalText) {
      return;
    }

    modalTitle.textContent = card.dataset.case || 'Кейс';
    modalText.textContent = card.dataset.detail || 'Описание кейса скоро появится.';
    modal.showModal();
  });
});

if (modalClose && modal) {
  modalClose.addEventListener('click', () => {
    modal.close();
  });

  modal.addEventListener('click', (event) => {
    const dialogDimensions = modal.getBoundingClientRect();
    const clickedInDialog =
      event.clientX >= dialogDimensions.left &&
      event.clientX <= dialogDimensions.right &&
      event.clientY >= dialogDimensions.top &&
      event.clientY <= dialogDimensions.bottom;

    if (!clickedInDialog) {
      modal.close();
    }
  });
}
