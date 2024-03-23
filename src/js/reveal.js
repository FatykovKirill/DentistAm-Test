const revealBtn = document.querySelector('[data-reveal]');
const tabs = document.querySelectorAll('.our-specialists-doctors-show');

revealBtn.addEventListener('click', () => {
  tabs.forEach((el) => {
    el.classList.toggle('show');
  });

  revealBtn.innerHTML = revealBtn.dataset.reveal === 'open' ? 'Закрыть' : 'Загрузить ещё';
  revealBtn.dataset.reveal = revealBtn.dataset.reveal === 'open' ? 'close' : 'open';
});