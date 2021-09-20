

$(function () {
  $('html').addClass('js');

  $('.menu-button').click(function () {
    $('.header').addClass('opened');
  });

  $('.header-background').click(function () {
    $('.header').removeClass('opened');
  });

  $('.close-modal').click(function () {
    $(this).parents('.modal-box').toggleClass('opened');
  });

  $('.open-modal').click(function () {
    $(`#${$(this).data().modalId}`).toggleClass('opened');
  });

  $('.carousel').slick({
    dots: true,
    infinite: true,
    speed: 500,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false
        }
      }
    ]
  });
});
