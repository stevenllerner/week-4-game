var wins;
var losses;
var target;
var diamondNum;
var blueNum;
var yellowNum;
var greenNum;
var score;

//Sets wins=0 and losses=0 and displays
function initializeDisplays() {
	wins = 0;
	losses = 0;
	$(".p2").html("Wins: " + wins);
	$(".p3").html("Losses: " + losses);
};
//Sets target and gem values
function initializeValues() {
	target = Math.floor(Math.random() * 102) + 19;
	diamondNum = Math.floor(Math.random() * 19) + 1;
	blueNum = Math.floor(Math.random() * 19) + 1;
	yellowNum = Math.floor(Math.random() * 19) + 1;
	greenNum = Math.floor(Math.random() * 19) + 1;
	score = 0;
};

//Displays target and score of zero at start of game
function initializeGame() {
	$(".target").html(target);
	$(".pO2").html(score);
};

initializeDisplays();
initializeValues();
initializeGame();

if (score < target) {
	$(".diamond").click(function(){
		score = score + diamondNum;
		$(".pO2").html(score);
		console.log(score);
		console.log(target);
	});
	$(".blue").click(function(){
		score = score + blueNum;
		$(".pO2").html(score);
		console.log(score);
		console.log(target);
	});
	$(".yellow").click(function(){
		score = score + yellowNum;
		$(".pO2").html(score);
		console.log(score);
		console.log(target);		
	});
	$(".green").click(function(){
		score = score + greenNum;
		$(".pO2").html(score);
		console.log(score);
		console.log(target);		
	});

} else if (score > target) {
	$(".p1").html("You lost. Please try again.");
	losses++;
	console.log(losses);
	$(".p3").html("Losses: " + losses);
	
} else {
	$(".p1").html("Congrats! You Won!");
	wins++;
	consol.log(wins);
	$(".p2").html("Wins: " + wins);
}







