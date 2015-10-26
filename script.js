$(document).ready(function() {
    console.log( "Ready!" );
});

$('#submitCard').submit(function(e) {
    e.preventDefault();
});

var hintArray = [];
var answerArray = [];

$('#submitButton').click(function(){
    var h = document.getElementById('hintTable');
    hintArray.push(document.getElementById('hint').value);
    h.innerHTML=hintArray.join('<br/>');
    var a = document.getElementById('answerTable');
    answerArray.push(document.getElementById('answer').value);
    a.innerHTML=answerArray.join('<br/>');
});

$('#startGame').click(function(){
  $('#dataTable').toggle('slow');
  $('h3').toggle('slow');
  $('#submitCard').toggle('slow');
  $('.stage').toggle('slow');
  $(this).html($(this).html() == 'Click here to start' ? 'Add more cards' : 'Click here to start');
})

$('.flashcard').on('click', function() {
    $('.flashcard').toggleClass('flipped');
  });
