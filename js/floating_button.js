$(document).ready(function() {
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    console.log(currentScrollPos)
    if (500 < currentScrollPos) {
      document.getElementById("go_up").style.display='';
    } else {
      document.getElementById("go_up").style.display ='none';
    }
  }
});

function scrollToAnchor() {
  var aTag = $('#main_header');
  $('html,body').animate({ scrollTop: aTag.offset().top }, 'slow');
}

