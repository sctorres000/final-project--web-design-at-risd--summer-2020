var height = $('#header').height();

$(window).scroll(function () {
  if ($(this).scrollTop() > height) {
    $('.navbar').addClass('sticky');
  } else {
    $('.navbar').removeClass('sticky');
  }
});
