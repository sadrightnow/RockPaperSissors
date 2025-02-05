const options = ["rock", "paper", "sissors"];
let humanScore = 0
let computerScore = 0
let gameCount = 0

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function getComputerChoice(choose) {
	number = (getRandomInt(3));
	computerChoice = (options[number]);
	console.log(options[number]);	
}

function getHumanChoice(choose) {
	humanChoice = prompt("rock, paper, or sissors?", "rock")
	if (options.includes(humanChoice)) {
		console.log("Valid choice!");
	} 
	else {
		console.log("Invalid choice!");
		getHumanChoice();
		return;
}
}



function playRound(humanChoice, computerChoice) {
	if (humanChoice === computerChoice) {
		console.log("Draw!");
	}
	else if (humanChoice === "rock" && computerChoice === "sissors") {
		console.log("Win!");
		humanScore += 1
		gameCount += 1
	}
	else if (humanChoice === "paper" && computerChoice === "rock") {
		console.log("Win!");
		humanScore += 1
		gameCount += 1
	}
	else if (humanChoice === "sissors" && computerChoice === "paper") {
		console.log("Win!");
		humanScore += 1
		gameCount += 1
	}
	else {
		console.log("Lose!");
		computerScore +=1
		gameCount += 1
	}


}

getHumanChoice();
getComputerChoice();
playRound(humanChoice, computerChoice)


getHumanChoice();
getComputerChoice();
playRound(humanChoice, computerChoice)


getHumanChoice();
getComputerChoice();
playRound(humanChoice, computerChoice)


getHumanChoice();
getComputerChoice();
playRound(humanChoice, computerChoice)


getHumanChoice();
getComputerChoice();
playRound(humanChoice, computerChoice)


if (computerScore === humanScore) {
	console.log("DRAW");
} else if (computerScore >= humanScore) {
	console.log("Lose");
} else {
	console.log("Win");
}






