$(function() {
  var $window = $(window);
  var $stickyEl = $('#stickyDiv');
  var elTop = $stickyEl.offset().top;

  $window.scroll(function() {
    $stickyEl.toggleClass('sticky', $window.scrollTop() > elTop);
    if ($window.scrollTop() > elTop) {
      $('#replacementSpace').css('height', $('#stickyDiv').height());
      $('.icons').css('backgroundColor', 'rgba(255,255,255,1)');
    }
    if ($window.scrollTop() < elTop) {
      $('#replacementSpace').css('height', '0');
      $('.icons').css('backgroundColor', 'rgba(255,255,255,0.3)');
    }
  });
});