const heart = document.querySelectorAll('.heart');

heart.forEach((h) => {
  h.addEventListener('click', function () {
    h.classList.toggle('active');
  })
});