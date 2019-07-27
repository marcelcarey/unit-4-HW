// var firstName = prompt("What is your First Name?");
// Generate random numbers to guess
// Display random number
// Generate random numbers for each crystal
// Need variables to keep track of wins losses and totals
// Need to reset the game
// Display user wins
// Display user losses
// Make sure buttons works

$( document ).ready(function(){
    var Random=Math.floor(Math.random()*102+19)
    
    $('#scoreToMatch').text(Random);
    
    var num1= Math.floor(Math.random()*12+1)
    var num2= Math.floor(Math.random()*12+1)
    var num3= Math.floor(Math.random()*12+1)
    var num4= Math.floor(Math.random()*12+1)
    
    var playerTotal= 0; 
    var wins= 0;
    var losses = 0;
    
  
  $('#wins').text(wins);
  $('#losses').text(losses);
  
  function reset(){
        Random=Math.floor(Math.random()*102+19);
        console.log(Random)
        $('#scoreToMatch').text(Random);
        num1= Math.floor(Math.random()*12+1);
        num2= Math.floor(Math.random()*12+1);
        num3= Math.floor(Math.random()*12+1);
        num4= Math.floor(Math.random()*12+1);
        playerTotal= 0;
        $('#totalScore').text(playerTotal);
        } 
  function woohoo(){
  alert("Congrats! You won!");
    wins++; 
    $('#wins').text(wins);
    reset();
  }
  function loser(){
  alert ("You lose!");
    losses++;
    $('#losses').text(losses);
    reset()
  }
    $('#one').on('click', function(){
      playerTotal = playerTotal + num1;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal); 
            
          if (playerTotal == Random){
            yay();
          }
          else if ( playerTotal > Random){
            loser();
          }   
    })  
    $('#two').on('click', function(){
      playerTotal = playerTotal + num2;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal); 
          if (playerTotal == Random){
            yay();
          }
          else if ( playerTotal > Random){
            loser();
          } 
    })  
    $('#three').on('click', function(){
      playerTotal = playerTotal + num3;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal);
  
            if (playerTotal == Random){
            yay();
          }
          else if ( playerTotal > Random){
            loser();
          } 
    })  
    $('#four').on('click', function(){
      playerTotal = playerTotal + num4;
      console.log("New playerTotal= " + playerTotal);
      $('#totalScore').text(playerTotal); 
        
            if (playerTotal == Random){
            yay();
          }
          else if ( playerTotal > Random){
            loser();
          }
    });   
  });