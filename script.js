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

var i = 0;
var j = 0;
$('#submitButton').click(function(){
  $('#hints').text('Press the button to begin!');
  $('#answers').text('This is the answer side. Start here to play "Jeopardy" style!');
});

$('.nextQuestion').click(function(){
  $('#hints').text(hintArray[i++]);
  $('#answers').text(answerArray[j++]);
});

$('#startGame').click(function(){
  $('#dataTable').toggle('slow');
  $('h3').toggle('slow');
  $('#submitCard').toggle('slow');
  $('.stage').toggle('slow');
  $('.nextQuestion').toggle('slow');
  $(this).html($(this).html() == 'Click here to start' ? 'Add more cards' : 'Click here to start');
})

$('.flashcard').on('click', function() {
    $('.flashcard').toggleClass('flipped');
  });
