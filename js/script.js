$(document).ready(function() {

  // open links in external window
  $("a[rel=external]").click(function() {
	 window.open($(this).attr('href'));
	 return false;
  });

  // chocolat.js gallery
  $('.chocolat-parent').Chocolat();

  // scroll navigation
  $('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute('href'));
    if( target.length ) {
      event.preventDefault();
      $('html, body').stop().animate({
        scrollTop: target.offset().top
      }, 1000);
    }
  });

  // add class to sticky navigation
  var header = $(".navbar");
  $(window).scroll(function() {
    var scroll = $(window).scrollTop();
    if (scroll >= 150) {
      header.addClass("is-sticky");
    } else {
      header.removeClass("is-sticky");
    }
  });






});
