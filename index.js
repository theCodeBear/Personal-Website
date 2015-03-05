$(function() {

  var titles = ['Full Stack Web Developer', 'Node.js', 'AngularJS', 'Hapi.js', 'Express.js', 'Bootstrap', 'MongoDB', 'HTML 5', 'CSS 3', 'jQuery'];
  var logos = ['', 'img/node-logo-lg.png', 'img/angular-logo.png', 'img/hapi-logo.png', 'img/express-logo.png', 'img/bootstrap-logo.png', 'img/mongo-db-logo.png', 'img/html5-logo.png', 'img/css3-logo-1.png', 'img/jquery-logo.png'];
  var i=0;
  $('#title').text(titles[i]);

  $('#title').mouseenter(function() {
    if (i === titles.length-1) i=-1;
    $('#title').text(titles[++i]);
    // $('#logos').attr('src', logos[i]);
    $('#title').attr('display','none');
    $('#mainDisplay').css('background', 'url(' + logos[i] + ') no-repeat center center fixed');
  });
});