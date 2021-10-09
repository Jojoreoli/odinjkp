let selJogador, selPc;
let pcWins = false;
let jogWins = false;
let previousChoice = null;
let previousComputerChoice = null;

function pcJoga() {
  let escolhaPc;
  let rng = Math.random();
  if (rng < 0.2) {
    escolhaPc = "rock";
  } else if (rng > 0.2 && rng < 0.4) {
    escolhaPc = "paper";
  } else if (rng > 0.4 && rng < 0.6) {
    escolhaPc = "scissors";
  } else if (rng > 0.6 && rng < 0.8) {
    escolhaPc = "lizard";
  } else {
    escolhaPc = "spock";
  }
	previousComputerChoice = escolhaPc;
  return escolhaPc;
}

function Rodada() {
  if (selJogador == "rock" && (selPc == "lizard" || selPc == "scissors") && selPc != "rock") {
    jogWins = true;
  } else if (selJogador == "paper" && (selPc == "spock" || selPc == "rock") && selPc != "paper") {
    jogWins = true;
  } else if (selJogador == "scissors" && (selPc == "lizard" || selPc == "paper") && selPc != "scissors") {
    jogWins = true;
  } else if (selJogador == "lizard" && (selPc == "spock" || selPc == "paper") && selPc != "lizard") {
    jogWins = true;
  } else if (selJogador == "spock" && (selPc == "scissors" || selPc == "rock") && selPc != "spock") {
    jogWins = true;
  } else if (selJogador == selPc) {
		jogWins = false;
		pcWins = false;
	} else{
    pcWins = true;
  }
}

function jogo(choice) {
	// initial DOM Manipulation
	const userChoice = document.querySelector(".userChoice");
	const userChoiceIcon = document.querySelector(".userChoice__icon");
	const computerChoice = document.querySelector(".computerChoice");
	const computerChoiceIcon = document.querySelector(".computerChoice__icon");
	userChoice.classList.contains("disabled") ? "" : userChoice.classList.add("disabled");
	userChoiceIcon.classList.remove(`fa-hand-${previousChoice}`)
	computerChoice.classList.contains("disabled") ? "" : computerChoice.classList.add("disabled");
	computerChoiceIcon.classList.remove(`fa-hand-${previousComputerChoice}`);
	const result = document.querySelector(".scoreArea__result");

	// Game Logic
	jogWins = false;
	pcWins = false;
	selPc = pcJoga();
	selJogador = choice;
	Rodada();

	console.log("jogador: ", jogWins, "pc: ", pcWins);

	// final DOM Manipulation
	userChoice.classList.remove("disabled");
	userChoiceIcon.classList.add(`fa-hand-${choice}`);
	computerChoice.classList.remove("disabled");
	computerChoiceIcon.classList.add(`fa-hand-${selPc}`);


	if(pcWins === false && jogWins === false) {
		result.textContent = "It's a tie!";
	} 
  else if (pcWins) {
		result.textContent = "The machines have defeated the puny humans!";
  }
	else {
		result.textContent = "Mankind has been saved from the machines... For now.";
  }
}

function inputHandler(choice) {
	jogo(choice)
	previousChoice = choice;
}
