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
    if (scroll >= 100) {
      header.addClass("is-sticky");
    } else {
      header.removeClass("is-sticky");
    }
  });



  $(".carousel").carousel({
        interval: false,
        pause: true
    });

    $( ".carousel .carousel-inner" ).swipe( {
    swipeLeft: function ( event, direction, distance, duration, fingerCount ) {
        this.parent( ).carousel( 'next' );
    },
    swipeRight: function ( ) {
        this.parent( ).carousel( 'prev' );
    },
    threshold: 0,
    tap: function(event, target) {
        window.location = $(this).find('.carousel-item.active a').attr('href');
    },
    excludedElements:"label, button, input, select, textarea, .noSwipe"
    } );

    $('.carousel .carousel-inner').on('dragstart', 'a', function () {
        return false;
    });


    




});
