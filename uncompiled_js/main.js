$(function () {
  $('html').addClass('js');

  initializeRanges();

  // Проверка чекбокса
  $('#accept-rules-checkbox').click(function () {
    console.log($('#accept-rules-checkbox').is(":checked"))
  });

  $('.menu-button').click(function () {
    $('.header').addClass('opened');
  });

  $('.header-background').click(function () {
    $('.header').removeClass('opened');
  });

  $('.close-modal').click(function () {
    $(this).parents('.modal-box').toggleClass('opened');
  });

  $('.question-answer').click(function () {
    $(this).toggleClass('opened');
  });

  $('.open-modal').click(function () {
    $(`#${$(this).data().modalId}`).toggleClass('opened');
  });

  new Swiper('.partners-swiper', {
    loop: true,
    paginationClickable: true,
    pagination: {
      el: '.partners-swiper-pagination',
    },
    navigation: {
      nextEl: '.partners-swiper-button-next',
      prevEl: '.partners-swiper-button-prev',
    },
  });

  new Swiper('.services-swiper', {
    spaceBetween: 15,
    slidesPerView: 3,
    loop: true,
    breakpoints: {
      992: {
        slidesPerView: 7
      },
    },
    pagination: {
      el: '.services-swiper-pagination',
    },
    navigation: {
      nextEl: '.services-swiper-button-next',
      prevEl: '.services-swiper-button-prev',
    },
  });

  new Swiper('.process-swiper', {
    slidesPerView: 1,
    breakpoints: {
      992: {
        slidesPerView: 3
      },
    },
    pagination: {
      el: '.process-swiper-pagination',
    }
  });

  $("form").on("change", ".file-upload-field", function () {
    $(this).parent(".file-upload-wrapper").attr("data-text", $(this).val().replace(/.*(\/|\\)/, ''));
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

  $(range).css('background', `linear-gradient(90deg, #DD89BB, #DD89BB, #DD89BB ${percentage}%, transparent ${percentage}%, transparent 100%)`);
  $(range).parents('.calculator-block-label-box').find('.input.bold').val(range.value);
}
