const wrapper = document.querySelector('.our-services-wrapper-carousel');
const carousel = wrapper.querySelector('.our-services-carousel');
const arrow = wrapper.querySelectorAll('.arrow');
arrow.forEach((el) =>
  el.addEventListener('click', () => {
    el.dataset.direction === 'right' ? carousel.scrollLeft += 300 : carousel.scrollLeft -= 300;
  })
);