let currentIndex = 0;
const slides = document.querySelector('.slides');
const totalSlides = document.querySelectorAll('.slide').length;

function moveSlide(direction) {
  currentIndex += direction;  // Change la direction selon le bouton cliqué
  if (currentIndex < 0) {
    currentIndex = totalSlides - 1;  // Si on est au début, revient à la dernière image
  }
  if (currentIndex >= totalSlides) {
    currentIndex = 0;  // Si on dépasse la dernière image, revient à la première
  }

  // Défilement des images en fonction de l'index
  slides.style.transform = `translateX(-${currentIndex * (300 + 4)}px)`;  // 300px est la largeur de l'image, 4px est la marge entre les images
}
