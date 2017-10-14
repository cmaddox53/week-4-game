
window.onload = function any_function_name()
{




var targetNumber = Math.floor(Math.random() * 101) + 19;

$("#Number-to-guess").html(targetNumber);


var win = 0;

var loses = 0;


var counter = 0;


function randomNumber(seed, selectNumber){
	return Math.floor(Math.random()*seed)+ selectNumber;
}

var numberOne = randomNumber(2,4);

var numberTwo = randomNumber(3,6);

var numberThree = randomNumber(1,1);

var numberFour	= randomNumber (10,5);

var numberOptions = [numberOne,numberTwo,numberThree,numberFour];

// var increment = numberOptions[Math.round(Math.random())];


for (var i =0; i < numberOptions.length; i++){

	var imageCrystal = $("<img>");

	imageCrystal.addClass("crystal-image");
	imageCrystal.attr("id", i+ "-crystal-pic");

		if (i === 0) {                            
             imageCrystal.attr("src", "assets/images/quartz-left-animation.gif");
             } else if (i === 1) {
             imageCrystal.attr("src", "assets/images/quartz-rhombohedron.gif");
             } else if (i === 2) {
             imageCrystal.attr("src", "assets/images/quartz-right-animation.gif");
             } else if (i === 3) {
             imageCrystal.attr("src", "assets/images/quartz-left-animation.gif");
              }

              imageCrystal.attr("data-crystalvalue", numberOptions[i]);
	$(".crystals").append(imageCrystal);


	}


	
$(".Win").html("<h4>Wins: </h4>" + win);
$(".loses").html("<h4>Loses: </h4>" + loses);


$(".crystal-image").on("click", function(){
	var crystalValue = ($(this).attr("data-crystalvalue"));
	crystalValue = parseInt(crystalValue);
	counter += crystalValue;
	$(".Score").html("<h4>Your new score is: </h4>" + counter);
	

	

	if (counter === targetNumber){
		win++;
		$(".Result").html("<h4>You Win!</h4>" );
		restartGame();

		

	}

	else if (counter > targetNumber){
		loses++;
		$(".Result").html("<h4>You Lose!</h4>");
		restartGame();
	
	}
	
});


function restartGame(){
	var targetNumber = Math.floor(Math.random() * 101) + 19;
	$("#Number-to-guess").html(targetNumber);

	counter = 0;

	for (var i =0; i < numberOptions.length; i++){

	imageCrystal = $("<img>");



	imageCrystal.addClass("crystal-image");

		if (i === 0) {                            
             imageCrystal.attr("src", "assets/images/aquartz-left-animation.gif");
             } else if (i === 1) {
             imageCrystal.attr("src", "assets/images/quartz-rhombohedron.gif");
             } else if (i === 2) {
             imageCrystal.attr("src", "assets/images/quartz-right-animation.gif");
             } else if (i === 3) {
             imageCrystal.attr("src", "assets/images/quartz-left-animation.gif");
              }

              // imageCrystal.attr("data-crystalvalue", numberOptions[i]);
	// $(".crystals").append(imageCrystal);
		$("#" + i + "-crystal-pic").attr("data-crystalvalue", numberOptions[i]);
		$(".Score").html("<h4>Your new score is: </h4>" + counter);
		$(".Win").html("<h4>Wins: </h4>" + win);
		$(".loses").html("<h4>Loses: </h4>" + loses);



	}


}

}













