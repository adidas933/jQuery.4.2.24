$(document).ready(function () {
  $('.next').on('click', function () {
    const currentImg = $('.active');
    const nextImg = currentImg.next();

    if (nextImg.length) {
      currentImg.removeClass('active').css('z-index', -10);
      nextImg.addClass('active').css('z-index', 10);
    } else {
      const firstImg = $('.slider-inner img').first();
      currentImg.removeClass('active').css('z-index', -10);
      firstImg.addClass('active').css('z-index', 10);
    }
  });
});

$(document).ready(function () {
  $('.prev').on('click', function () {
    const currentImg = $('.active');
    const prevImg = currentImg.prev();

    if (prevImg.length) {
      currentImg.removeClass('active').css('z-index', -10);
      prevImg.addClass('active').css('z-index', 10);
    } else {
      const lastImg = $('.slider-inner img').last();
      currentImg.removeClass('active').css('z-index', -10);
      lastImg.addClass('active').css('z-index', 10);
    }
  });
});

$('.surprise').on('click', function() {
  $('.outer-video-container').css('opacity', 1);
})