$(function () {
  $('html').addClass('js');

  initializeRanges();

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

  new Swiper('.swiper', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
});

const initializeRanges = () => {
  $('.range').each(function () {
    recalculateRangeValue(this);
  });

  $('.range').on('input', function () {
    recalculateRangeValue(this);
  });
};

const recalculateRangeValue = (range) => {
  const min = range.min;
  const max = range.max - min;
  const current = range.value - min;
  const percentage = current * 100 / max;

  $(range).css('background', `linear-gradient(90deg, #DD89BB, #DD89BB, #DD89BB ${percentage}%, #B7B7B7 ${percentage}%, #B7B7B7 100%)`);
  $(range).parents('.calculator-block-label-box').find('.input.bold').val(range.value);
}
