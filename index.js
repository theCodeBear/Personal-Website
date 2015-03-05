$(function() {

  $('#developerTitle').hover(function() {
    $(this).css("color", "blue");
    $('#title').text('Node.js');
  }, function() {
    $(this).css("color", "black");
    $('#title').text('Full-Stack Web');
  });


});