
 window.onload = function() {
          
var numberCorrect = 0;

var timesPlayed = 0;
var wins = 0;
var loses = 0;

var guessList2 = ["dog", "cat", "elephant", "frog"];

var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

//var drawGuy = ["drawRightleg()","drawLeftleg()","drawRightArm()","drawLeftArm()","drawBody()","drawHead"] ;
// start button
document.getElementById('start').onclick = function()
{ 
	var toGuess = pickWord();
   var toGuessLength = toGuess.length;  
   if(timesPlayed > 0)
   {
   	    console.log("in the timesPayed if statement");
        removeGuess();
        lives = 6;
   }  
   //var drawDude = {head:drawHead(),body:drawBody,rightArm:drawRightArm,leftArm:drawLeftArm,rightLeg:drawRightleg,leftLeg:drawLeftleg};
   var lives = 6;
   timesPlayed ++;
   
   populate_GuessWord();
   populate();
   drawHang();
   console.log("times played " + timesPlayed);
  
   // start button

 
   // event handler for pressing the letters
   // from chose, then removes them
   $(document).ready(function() 
   {
	    $(".guessLetter").click(function(event)
	     {  
	        console.log(event.target.id);
	        for(var i = 0; i < toGuessLength; i++)
	        {
	        	console.log(i);
	         	if(event.target.id === toGuess.toLowerCase().substring(i,i+1))
	         	 {
	         	 	   numberCorrect ++;
	         	 	   console.log("numbers correct  " + numberCorrect);
	         	 	   document.getElementById(i).innerHTML = event.target.id;
	         	 	   if(numberCorrect === toGuessLength)
	         	 	   {
	         	 	   	 winGame();
	         	 	   }
	         	 }	  
	        }
	               var j = (toGuess.indexOf(event.target.id));
			        if (j === -1) 
			        {
			          lives -= 1;
			          if(lives === 5){drawHead();}
			          if(lives === 4){drawBody();}
			          if(lives === 3){drawLeftArm();}
			          if(lives === 2){drawRightArm();}
			          if(lives === 1){drawLeftleg();}
			          if(lives === 0){drawRightleg();
			          	endGame();}
			          console.log("lives" + lives);
			       
			        }
	        event.target.remove();
	     }) ; 
    }); 
  
     // put "-" in divs that are created
	 function populate_GuessWord()
	 {
	   var store2 = document.getElementById("guessPlace");

	    for(var i = 0; i < toGuessLength; i ++) 
	    {
	   	   var newDiv = document.createElement('div');
	   	   newDiv.className = "guessWord"
	   	   newDiv.innerHTML = "_";
	   	   newDiv.id = i;
	   	   store2.appendChild(newDiv);
	   	   
	    }
	 }

	 function removeGuess()
	  {
	  	    
	  	    var el = document.getElementById('guessPlace');
	  	    var del = document.getElementById('letterHolder')

            while ( el.firstChild ) el.removeChild( el.firstChild );
            while ( del.firstChild ) del.removeChild( del.firstChild );
	  }
    function populate()
    {
		var store = document.getElementById("letterHolder");
		for (var i = 0; i < letters.length; i++ ) 
		   {
		   	  
		      var newDiv = document.createElement('div');
		      newDiv.id = letters[i];
		      newDiv.className = "guessLetter";
		      newDiv.innerHTML = letters[i];
		      store.appendChild(newDiv);    
		   }
    }
 
  }

    function pickWord()
    {

    	var word = guessList2[Math.floor(Math.random() * guessList2.length)];
    	console.log(word);
        
 	    return word;
     }
    
     function endGame()
     {
     	console.log("lost game");
     	var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext("2d");
		ctx.font = "20px Arial";
		ctx.fillText("You Lost",100,30);
	    removeGuess();

     	
         // img or something of death
     }
     function winGame()
     {
     	console.log("won game");
     	var canvas = document.getElementById("canvas");
		var ctx = canvas.getContext("2d");
		ctx.font = "20px Arial";
		ctx.fillText("You Won!",100,30);

     }
     function drawHang()
     {
        var c=document.getElementById("canvas");
		var ctx=c.getContext("2d");
		ctx.clearRect(0, 0, canvas.width, canvas.height);
		ctx.beginPath();

		ctx.moveTo(110,220);// line up
		ctx.lineTo(110,60);

		ctx.moveTo(110,60); // line right
		ctx.lineTo(160,60);

		ctx.moveTo(160,60); // line right
		ctx.lineTo(160,90); // bottom

		ctx.rect(60,220,175,30); 
		ctx.stroke();
     }
     function drawHead()
     {
     	var c = document.getElementById("canvas");
		var ctx = c.getContext("2d");
		ctx.beginPath();
		ctx.arc(160, 101, 12, 0, 2 * Math.PI);
		ctx.stroke();    
     }
     function drawBody()
     {
        var c=document.getElementById("canvas");
		var ctx=c.getContext("2d");
		ctx.beginPath();
		ctx.moveTo(160,114); // line right
		ctx.lineTo(160,160); // bottom
		ctx.stroke();
     }
     function drawLeftArm()
     {
     	var c=document.getElementById("canvas");
		var ctx=c.getContext("2d");
		ctx.beginPath();
		ctx.moveTo(160,133); 
		ctx.lineTo(130,110); // bottom
		ctx.stroke();

     }
     function drawRightArm()
     {
        var c=document.getElementById("canvas");
		var ctx=c.getContext("2d");
		ctx.beginPath();
		ctx.moveTo(160,133); // line right
		ctx.lineTo(190,110); // bottom
		ctx.stroke();
     }
     function drawLeftleg()// l
     {
     	var c=document.getElementById("canvas");
		var ctx=c.getContext("2d");
		ctx.beginPath();
		ctx.moveTo(160,160); // line right
		ctx.lineTo(130,180); // bottom
		ctx.stroke();

     }
     function drawRightleg()
     {
     	var c=document.getElementById("canvas");
		var ctx=c.getContext("2d");
		ctx.beginPath();
		ctx.moveTo(160,160); // line right
		ctx.lineTo(190,180); // bottom
		ctx.stroke();

     }

  }


// // class work

// // var targetDiv = document.getElementById("some div in html")
// // var newDiv = document.createElement("div");
// // newDiv.innerHTML = "howdy";
// // targetDiv.appendChild(newDiv);// adds to target div
// // var getLetter = document.getElementById("from a form or");

// // function myFunction() {
// //     document.getElementById("demo").innerHTML = "YOU CLICKED ME!";

// // use one event to let oney on letter 

// 	// var targetDiv = document.getElementById("guessLetter");
//  	// var newDiv = document.createElement("div");
//  	// targetDiv.appendChild(newDiv);


       
// 	    //  letters.toString();
// 	    // document.getElementById("guessLetter").innerHTML = letters;
// 	    // document.getElementById("demo").innerHTML = fruits;