$(function() {

  var titles = ['Full Stack Web Dev', 'Node.js', 'AngularJS', 'Hapi.js', 'Express.js', 'Bootstrap', 'MongoDB', 'HTML 5', 'CSS 3', 'jQuery'];
  var i=0;
  $('#title').text(titles[i]);

  $('#title').mouseenter(function() {
    if (i === titles.length-1) i=-1;
    $('#title').text(titles[++i]);
    $('body').css('background', 'url(img/html5-logo.png) no-repeat center center fixed');
  });
});