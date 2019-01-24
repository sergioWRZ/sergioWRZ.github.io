$(document).ready(function() {
  $(".float").on('click', function () {
    scrollToAnchor();
  });
});

function scrollToAnchor() {
  var aTag = $('#main_header');
  $('html,body').animate({ scrollTop: aTag.offset().top }, 'slow');
}

