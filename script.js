let navBtn1 = $('#button1');

navBtn1.click(function() {
    if(navBtn1.hasClass('open')) {
      navBtn1.toggleClass('open');
      $('#menu').css("display", "none");
    } else {
      navBtn1.toggleClass('open');
      $('#menu').css("display", "grid");
    }
});

$(window).scroll(function() {
    var scroll = $(window).scrollTop();
      if (scroll <= 250) {
        $(".back-to-top a").css("opacity", "0");
      } else {
        if (scroll >= 250) {
          $(".back-to-top a").css("opacity", "1");
        }
      }
});

$('a[href*="#"]')

    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {

        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

            if (target.length) {

                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function() {

                    var $target = $(target);
                    $target.focus();

                    if ($target.is(":focus")) {
                        return false;
                    } else {
                        $target.attr('tabindex','-1');
                        $target.focus();
                    }
                });
            }
        }
    });

$(".username-wrapper").on({
    mouseenter: function () {
        $(".verified").css("opacity", "1");
        $(".verified").css("top", "130%");
    },
    mouseleave: function () {
        $(".verified").css("opacity", "0");
        $(".verified").css("top", "150%");
    }
});

// Obtener elementos
const overlay = document.getElementById('imageOverlay');
const overlayImg = document.getElementById('overlayImage');
const closeBtn = document.getElementById('closeImageOverlay');

// Cuando hagan click en una imagen dentro de publicaciones
document.querySelectorAll('.post-info img').forEach(img => {
  img.addEventListener('click', () => {
    overlay.style.display = 'flex';
    overlayImg.src = img.src;
    overlayImg.alt = img.alt || 'Imagen ampliada';
  });
});

// Cerrar overlay con botón
closeBtn.addEventListener('click', () => {
  overlay.style.display = 'none';
  overlayImg.src = '';
});

// También cerrar al hacer click fuera de la imagen
overlay.addEventListener('click', e => {
  if (e.target === overlay) {
    overlay.style.display = 'none';
    overlayImg.src = '';
  }
});
