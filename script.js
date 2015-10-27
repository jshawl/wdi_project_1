$(document).ready(function() {
    console.log( "Ready!" );
});

$('#submitCard').submit(function(e) {
    e.preventDefault();
});

// This is the JS object for the cards
var cards = {
  hintsObject: [],
  answersObject: [],
}

// This takes the input and puts it in the cards array]
$('#submitButton').on('click', submitCardEntry);
function submitCardEntry(){
    var h = document.getElementById('hintTable');
    cards.hintsObject.push(document.getElementById('hint').value);
    h.innerHTML=cards.hintsObject.join('<br/>');
    var a = document.getElementById('answerTable');
    cards.answersObject.push(document.getElementById('answer').value);
    a.innerHTML=cards.answersObject.join('<br/>');
    submitCard.reset();
};

var i = 0;

// This moves from one item in the array to the next or previous
$('.nextQuestion').click(function(){
    i++;
    displayCard(i);
});

$('.prevQuestion').click(function(){
    i--;
    displayCard(i);
});

// This makes the left and right key work to flip the cards
$('body').keydown(function(e){
  if (e.keyCode == 37) {
      i--;
      displayCard(i);
    } else if (e.keyCode == 39) {
      i++;
      displayCard(i);
    }
});

// This prints the text to the cards on the screen
function displayCard(i) {
    $('#hints').empty();
    $('#hints').append(cards.hintsObject[i]);
    $('#answers').empty();
    $('#answers').append(cards.answersObject[i]);

    if(i == 0) {
        $('.prevQuestion').hide();
      }
    else {
        $('.prevQuestion').show();
      }

    if(i == cards.hintsObject.length-1){
        $('.nextQuestion').hide();
      } else {
        $('.nextQuestion').show();
      }
};

// This swipes all the starting screen information in and out in a nifty fashion
$('#startGame').click(function(){
  // This randomizes the cards, but it unfortunately does not work as it does not keep the question and answer arrays connected.
  // cards.hintsObject.sort(function(a, b){
  //   return 0.5-Math.random();
  // });
  displayCard(0);
  $('#dataTable').toggle('slow');
  $('h3').toggle('slow');
  $('#submitCard').toggle('slow');
  $('.stage').toggle('slow');
  $('.nextQuestion').toggle('slow');
  $('.prevQuestion').toggle('slow');
  $(this).html($(this).html() == 'Click here to start' ? 'Add more cards' : 'Click here to start');
})

// This links to the fancy animation webkit you can see in the CSS to flip the cards
$('.flashcard').on('click', function() {
    $('.flashcard').toggleClass('flipped');
  });
