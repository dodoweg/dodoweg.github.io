let burger = document.querySelector('.burger');
let nav = document.querySelector('nav');
let navLinks = document.querySelectorAll('.nav-links li');

burger.addEventListener('click', function() {
  nav.classList.toggle('active');

  navLinks.forEach(function(link, index) {
    if (link.style.animation) {
      link.style.animation = '';
    } else {
      link.style.animation = 'navLinkFade 0.5s ease forwards ' + (index / 7 + 0.3) + 's';
    }
  });

  burger.classList.toggle('change');
});
