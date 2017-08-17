var wins;
var losses;
var target;
var diamondNum;
var blueNum;
var yellowNum;
var greenNum;
var score;
var selection;

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
};

//Displays target and score of zero at start of game
function initializeGame() {
	$(".target").html(target);
	score = 0;
	$(".pO2").html(score);
};

initializeDisplays();
initializeValues();
console.log(diamondNum);
console.log(blueNum);
console.log(yellowNum);
console.log(greenNum);
initializeGame();
console.log(target);
console.log(score);

//if (score < target) {
	$(".diamond").click(function(){
		selection=diamondNum;
	});
	$(".blue").click(function(){
		selection=blueNum;
	});
	$(".yellow").click(function(){
		selection=yellowNum;
	});
	$(".green").click(function(){
		selection=greenNum;
	});
	score = score + selection;
	$(".reportOut2").html(score);
//}	
console.log(selection);
console.log(score);




