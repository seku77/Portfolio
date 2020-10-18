(function() {
    var $gallery = new SimpleLightbox('.projects a', {});
    $gallery.docClose = false;
})();

$(document).ready(function() {
    $('#aboutBtn').click(function(event) {
      $('body, html').animate({
        scrollTop: $("#secondImage").offset().top
      }, 600);
    });
  });

  $(document).ready(function() {
    $('#projectsBtn').click(function(event) {
      $('body, html').animate({
        scrollTop: $(".separator").offset().top
      }, 600);
    });
  });

  $(document).ready(function() {
    $('#contactBtn').click(function(event) {
      $('body, html').animate({
        scrollTop: $(".contact").offset().top
      }, 600);
    });
  });