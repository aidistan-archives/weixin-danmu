$(function(){
  var offsetTop = 50;
  $('nav.scrollspy-nav').scrollspynav({ offsetTop: offsetTop });
  $('a').not($('nav.scrollspy-nav a')).each(function() {
    if (/#/.test($(this).attr('href'))) {
      $(this).click(function() {
        $(window).smoothScroll({
          position: $($(this).attr('href')).position().top - offsetTop
        });
        return false; // Stop bubbling
      });
    }
  });
});
