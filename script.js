document.addEventListener('DOMContentLoaded', function () {
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
  
    burgerMenu.addEventListener('click', function () {
      mobileMenu.classList.toggle('active');
    });
  
    document.addEventListener('click', function (event) {
      if (!burgerMenu.contains(event.target) && !mobileMenu.contains(event.target)) {
        mobileMenu.classList.remove('active');
      }
    });
  });
  
  function toggleMenu() {
    var burger = document.getElementById("burger");
    burger.classList.toggle("cross");
}