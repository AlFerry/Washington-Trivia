// cities.js - JavaScript for BIT116 Assignment 2: Cities of Washington Guessing Game
//#####################################################################################################

// Declare an array to hold the city names
///////////////////////////////////////////////////////////////////////////////////////////////////////
/* 	INSTRUCTIONS: Part 1
	
	(1) Declare an array called 'city' */
    var city = new Array(4);

	/*(2) Initialize the array elements with these city names (in UPPERCASE letters):*/
		city[0]="BELLEVUE";
		city[1]="BOTHELL";
		city[2]="DUVALL";
		city[3]="EDMONDS";
		city[4]="KENMORE";
		city[5]="KIRKLAND";
		city[6]="LAKE FOREST PARK";
		city[7]="LYNNWOOD";
		city[8]="MONROE";
		city[9]="MOUNTLAKE TERRACE";
		city[10]="REDMOND";
		city[11]="SEATTLE";
		city[12]="SHORELINE";
		city[13]="TACOMA";
		city[14]="WOODINVILLE";
//////////////////////////////////////////////////////////////////////////////////////////////////////

// Generates a random number based on length of city array
var num = Math.floor(Math.random() * city.length);

// Stores the city name 
/////////////////////////////////////////////////////////////////////////////////////////////////////
/* 	INSTRUCTIONS: Part 2
	(1) Declare a variable called cityName
	(2) Initialize it with city[num]*/
var cityName = city[num];

// Declare and initialize tries guessed
/////////////////////////////////////////////////////////////////////////////////////////////////////
/* 	INSTRUCTIONS: Part 3

	(1) Declare a variable called tries
	(2) Initialize it with zero*/

var tries = 0;
// guessIt Function - the main function
function guessIt()
{
	/////////////////////////////////////////////////////////////////////////////////////////////////
	/* 	INSTRUCTIONS: Part 4
	(1) Declare a variable called guess.*/
    var guess = document.getElementById('guess1').value;
   
    tries++;
    /*(3) Increment tries (either tries++ or tries = tries + 1)
	(4) Set window.status to: "Tries : " + tries;
	    HINT: Look in existing code to see how this might be done
        
	*/
	//document.getElementById('tries').innerHTML= "tries: " + tries;
   guessStatus();     /////////////////////////////////////////////////////////////////////////////////////////////////
	
	/////////////////////////////////////////////////////////////////////////////////////////////////
	/* 	INSTRUCTIONS: Part 5

	(1) Create a switch here that is passed 'tries'*/
    var hint = "";
    switch(tries){
        case 1:
             document.form1.hint.value="First Hint: The city name starts with \'" + cityName.charAt(0) + "\'.";
            break;
        case 2:
            document.form1.hint.value="Second Hint: The city name ends with \'" + cityName.charAt(cityName.length - 1) + "\'.";
            break;
        case 3:
            document.form1.hint.value="Last Hint: The city name has " + cityName.length + " characters.";
            break;
        default:
            document.form1.hint.value="No more hints available! Last chance to guess!";
    }

	
	///////////////////////////////////////////////////////////////////////////////////////////

   if(guess.toUpperCase() == cityName) // Checks if guess equals cityName
   {
		if(window.confirm("You are correct!\n\nThe city was " + cityName + ".\n\nDo you want to play again?"))
      	{
			window.location.reload(); // Reloads the page for a new game
		}
	}
	else
   {
		if(tries == 5) // Game over without a correct guess
		{
			if(window.confirm("Sorry! You have run out of guesses.\n\nThe city was  " + cityName + ".\n\nDo you want to play again?"))
			{
				window.location.reload(); // Reloads the page for a new game
				document.form1.hint.value = "Enter a City name below and click Guess button!";
			}
		}
 	}
}

// catchKeyCode Function - calls when user presses Enter key
function catchKeyCode() //
{
	if(event.keyCode == 13)
	{
		guessIt();
	}
}

// guessStatus Function - Shows number of guesses
function guessStatus()
{
	document.form1.numOfTries.value ="Number of tries: " + tries; // tries;
}

function clearBox()
{
    document.form1.guess1.value = "";
}


function newGame()
{
  if(window.confirm("Do you want to play again?"))
			{
				window.location.reload(); // Reloads the page for a new game
				document.form1.hint.value = "Enter a City name below and click Guess button!";
			}
}
