/* Script compartido por index.html y sobre-mi.html.
   Cada bloque comprueba que sus elementos existan, porque la página
   "Sobre mí" no tiene grilla de portfolio ni filtros. */
(function () {
  // El portfolio ya no filtra por JS: cada categoría es su propia página
  // (index.html, branding.html, diseno-grafico.html, ilustracion.html)
  // y la barra de categorías es un menú de enlaces.

  // ---- menú móvil ----
  var btn = document.querySelector('.mobile_menu_button');
  var mob = document.querySelector('nav.mobile_menu');
  if (btn && mob) {
    btn.addEventListener('click', function () {
      var open = mob.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });

    // al saltar a un ancla desde el menú móvil, el menú se cierra
    mob.addEventListener('click', function (e) {
      if (e.target.closest('a')) {
        mob.classList.remove('open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  // ---- header sticky + back to top ----
  var header = document.getElementById('site_header');
  var top = document.getElementById('back_to_top');
  function onScroll() {
    var y = window.scrollY || document.documentElement.scrollTop;
    if (header) header.classList.toggle('scrolled', y > 10);
    if (top) top.classList.toggle('on', y > 500);
  }
  window.addEventListener('scroll', onScroll, { passive: true });
  onScroll();

  if (top) {
    top.addEventListener('click', function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
document.addEventListener('DOMContentLoaded', () => {
  // Verificamos si es un dispositivo móvil/touch
  const isMobile = window.matchMedia("(max-width: 768px)").matches || 'ontouchstart' in window;

  if (isMobile) {
    // Seleccionamos las imágenes del carrusel/galería
    const portfolioImages = document.querySelectorAll('.portfolio-item .image_holder img');

    portfolioImages.forEach(img => {
      img.style.cursor = 'pointer'; // Opcional: cambia el cursor
      img.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(img.src, '_blank');
      });
    });
  }
});

})();
