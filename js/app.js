function userGuess()
	{
		var inputGuess = document.getElementById('guess').value;
		var guess = parseInt(inputGuess);
		return guess;
	}

$(document).ready(function(){

	var callback = function( e ) {

		//var x = Math.floor(Math.random()*100+1);
		var x = 29; //Jason's age I think

		if (userGuess() === x) {
			$(".alert-box").html("Jason Loves You");
		}

		else if (userGuess() < x) {
			var insultsHigher = new Array();
			insultsHigher[0] = "Please He looks way older!";
			insultsHigher[1] = "Come on He's ancient!";
			insultsHigher[2] = "Seriously he has a pedo mustache!";
			insultsHigher[3] = "Really he looks like he's from the 60's";

			var randomHigherInsult = Math.floor(Math.random()*insultsHigher.length);

			var high = "Higher! ";

			$(".alert-box").html(high + insultsHigher[randomHigherInsult]);
		}

		else {
			var insultsLower = new Array();
			insultsLower[0] = "Come on does he look that mature!";
			insultsLower[1] = "Come on does he even look like He's graduated yet!";
			insultsLower[2] = "Come on he still cries!";
			insultsLower[3] = "Come on he still wears tighty whities!";

			var randomLowerInsult = Math.floor(Math.random()*insultsLower.length);

			var low = "Lower! ";

			$(".alert-box").html(low + insultsLower[randomLowerInsult]);
		}
		e.preventDefault();
	};

	$("#guess").keypress(function() {
    	callback();
	});

	$('.button').click(callback);
});

