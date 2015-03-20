//main.js file

$(function() {

  for (var i=1; i<=15; i++) {
    $('#div'+i).css('backgroundColor', getRandColor());
  }
  
  setInterval(function() {
    new Audio('../../audio/audio1.wav').play();
    for (var i=1; i<=15; i++) {
      $('#div'+i).css('backgroundColor', getRandColor());
      // $('#div'+i).css('filter', 'grayscale(100%)');
    }
    $('span').css('color', getRandColor());
    // $('span').css('filter', 'grayscale(100%)');
  }, 100);


  function getRandColor() {
    var c = randomColor();
    return 'rgb('+c+','+c+','+c+')';
  }

  function randomColor() {
    return Math.floor(Math.random() * 256);
  }

});
