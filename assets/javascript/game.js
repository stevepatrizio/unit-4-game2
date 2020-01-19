// These are my personal NOTES for this project. 

    //I Googled to better understand how to code this.
    // Selects a random number to be shown at the start of the game
    // Number should be should be between 19 - 120
    var Random=Math.floor(Math.random()*101+19)
    
    // Appending random number to the randomNumber id in the html doc
    $('#randNumtoMatch').text(Random);
    
    
    // Set random numbers for each jewel
    // Random number has to be between 1 - 12
    var num1= Math.floor(Math.random()*11+1);
    var num2= Math.floor(Math.random()*11+1);
    var num3= Math.floor(Math.random()*11+1);
    var num4= Math.floor(Math.random()*11+1);
    
    
    //  Decaring variables for totals
    var userTotal= 0; 
    var wins= 0;
    var losses = 0;
    
  $('#numWins').text(wins);
  $('#numLoss').text(losses);

  //resets the game
  function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('#randomNumber').text(Random);
        num1= Math.floor(Math.random()*11+1);
        num2= Math.floor(Math.random()*11+1);
        num3= Math.floor(Math.random()*11+1);
        num4= Math.floor(Math.random()*11+1);
        userTotal= 0;
        $('#runTotal').text(userTotal);
        } 
  
  //adds the wins to the userTotal
  function myWins(){
  alert("You won!");
    wins++; 
    $('#numWins').text(wins);
    reset();
  }
  //Adds the losses to the userTotal
  function loser(){
  alert ("You lose!");
    losses++;
    $('#numLoss').text(losses);
    reset()
  }
  
  //sets up click for jewels
    $('#one').on ('click', function(){
      userTotal = userTotal + num1;
      console.log("New userTotal= " + userTotal);
      $('#runTotal').text(userTotal); 
        //sets win/lose conditions
        if (userTotal == Random){
            myWins();
        }
          else if ( userTotal > Random){
            loser();
          }   
    })  
  
    $('#two').on ('click', function(){
      userTotal = userTotal + num2;
      console.log("New userTotal= " + userTotal);
      //sets win/loss conditions
      $('#runTotal').text(userTotal); 
        if (userTotal == Random){
            myWins();
        }
          else if ( userTotal > Random){
            loser();
          } 
    })  
  
    $('#three').on ('click', function(){
      userTotal = userTotal + num3;
      console.log("New userTotal= " + userTotal);
      //sets win/loss conditions
      $('#runTotal').text(userTotal);
        if (userTotal == Random){
              myWins();
        }
          else if ( userTotal > Random){
            loser();
          } 
    })  
  
    $('#four').on ('click', function(){
      userTotal = userTotal + num4;
      console.log("New userTotal= " + userTotal);
      $('#runTotal').text(userTotal); 
        //sets win/loss conditions          
        if (userTotal == Random){
              myWins();
        }
          else if ( userTotal > Random){
            loser();
          }
    });   

// A page can't be manipulated safely until the document is "ready." 
// jQuery detects this state of readiness for you. 
// Code included inside $( document ).ready() will only run once the page Document Object Model (DOM) is ready 
// for JavaScript code to execute. Code included inside $( window ).on( "load", function() { ... }) 
// will run once the entire page (images or iframes), not just the DOM, is ready.
$(document).ready(function(){

}); 