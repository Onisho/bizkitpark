$(document).ready(function() {
  
  // open links in external window
  $("a[rel=external]").click(function() {
	 window.open($(this).attr('href'));
	 return false;
  });
  
  
  $(window).scroll(function () {
    if ($(window).scrollTop() > 200) {
        $('.navbar').css('margin-top', '0');
        $('.scrolldown').css('opacity', '0');
    }
    if ($(window).scrollTop() < 200) {
        $('.scrolldown').css('opacity', '1');
    }
  });
  
  $('.chocolat-parent').Chocolat();
  
  
  
  
});