//Problem: Calculator doesn't work
//Solution: Add functionality to the calculator.

var result = document.getElementById('result');

//1. Create a click function
$('span').click(function() {
  
  //store span tag into var
  var span = $(this);
  
  //1.1 Prevent = sign from being added
  if (span.text() !== '=') {
    $('#result').append(span.text());
  }
  
});


//2. Create a click event for clear button
$('#clear').click(function() {
  
  //2.1 When clear is clicked remove #result value?
  $('#result').empty();
  
});


//3. Create mathematical functionality
  //3.1 When = is clicked evaluate result input
equals.addEventListener('click', calc(), false);
    
//3.2 create a function that evaluates result window
 function calc() {
   return function() {
     result.innerHTML = eval(result.innerHTML);
   }
 }
