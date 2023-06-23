const imgMenu = document.getElementById('img-menu');
const navMobile = document.getElementById('nav-mobile');

imgMenu.addEventListener('click', function() {
      navMobile.style.display = navMobile.style.display === 'none' ? 'block' : 'none';
    });