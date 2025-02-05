const options = ["rock", "paper", "sissors"];
let humanScore = 0
let computerScore = 0

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function getComputerChoice(choose) {
	number = (getRandomInt(3));
	opponent = (options[number]);
	console.log(options[number]);	
}

function getHumanChoice(choose) {
	let HumanChoice = prompt("rock, paper, or sissors?", "rock")
	console.log(HumanChoice);
	if (options.includes(HumanChoice)) {
		console.log("Valid choice!");
	} 
	else {
		console.log("Invalid choice!");
		getHumanChoice();
		return;
}
}




function playRound(play) {
	getHumanChoice();
	getComputerChoice();
switch(favDrink) {
	case "Coca-Cola":

}

}