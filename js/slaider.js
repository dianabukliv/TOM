let currentSlide = 0;

function showSlide(index) {
  const carouselInner = document.querySelector('.carousel-inner');
  const slides = document.querySelectorAll('.carousel-item');
  const indicators = document.querySelectorAll('.carousel-indicators li');

  currentSlide = index;

  if (currentSlide >= slides.length) {
    currentSlide = 0;
  } else if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }

  const translateValue = -currentSlide * 100 + '%';
  carouselInner.style.transform = 'translateX(' + translateValue + ')';

  for (let i = 0; i < indicators.length; i++) {
    indicators[i].classList.remove('active');
  }

  indicators[currentSlide].classList.add('active');
}

function changeSlide(n) {
  showSlide(currentSlide + n);
}

document.addEventListener('DOMContentLoaded', function () {
  showSlide(currentSlide);
});
