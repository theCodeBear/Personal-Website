//main.js file

$(function() {

  for (var i=1; i<=15; i++) {
    $('#div'+i).css('backgroundColor', getRandColor());
  }
  
  setInterval(function() {
    new Audio('../../audio/shadow.wav').play();
    for (var i=1; i<=15; i++) {
      $('#div'+i).css('backgroundColor', getRandColor());
    }
    $('span').css('color', getRandColor());
  }, 100);


  function getRandColor() {
    var c = randomColor();
    return 'rgb('+c+','+c+','+c+')';
  }

  function randomColor() {
    return Math.floor(Math.random() * 256);
  }

});
