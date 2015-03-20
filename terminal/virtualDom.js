//main.js file

$(function() {

  for (var i=1; i<=15; i++) {
    $('#div'+i).css('backgroundColor', getRandColor());
  }
  
  setInterval(function() {
    new Audio('audio/audio1.wav').play();
    for (var i=1; i<=15; i++) {
      $('#div'+i).css('backgroundColor', getRandColor());
    }
    $('span').css('color', getRandColor());
  }, 100);


  function getRandColor() {
    var r = randomColor();
    var g = randomColor();
    var b = randomColor();
    return 'rgb('+r+','+g+','+b+')';
  }

  function randomColor() {
    return Math.floor(Math.random() * 256);
  }

});
