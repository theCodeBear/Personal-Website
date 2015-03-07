$(function() {

  var titles = ['Full Stack Web Developer', 'Node.js', 'AngularJS', 'Hapi.js', 'Express.js', 'Bootstrap', 'MongoDB', 'HTML 5', 'CSS 3', 'jQuery'];
  var logos = ['img/winterTodd.jpg', 'img/node-logo-lg.png', 'img/angular-logo.png', 'img/hapi-logo.png', 'img/express-logo.png', 'img/bootstrap-logo.png', 'img/mongo-db-logo.png', 'img/html5-logo.png', 'img/css3-logo-1.png', 'img/jquery-logo.png'];
  var i=0;
  $('#title').text(titles[i]);
  $('#mainDisplay').css({'background': 'url(' + logos[0] + ') no-repeat center center fixed', 'background-size': 'cover'});

  $('#title').mouseenter(function() {
    if (i === titles.length-1) i=-1;
    $('#title').text(titles[++i]);
    $('#title').attr('display','none');
    if (i===0)
      $('#mainDisplay').css({'background': 'url(' + logos[0] + ') no-repeat center center fixed', 'background-size': 'cover'});
    else
      $('#mainDisplay').css('background', 'url(' + logos[i] + ') no-repeat center center fixed');
  });


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