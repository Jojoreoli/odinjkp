let selJogador, selPc;
let pcWins = 0;
let jogWins = 0;

function jogJoga(){
	
	return window.prompt("Make your play of rock, paper, scissors, lizard, spock...").toLowerCase();
	

}

function pcJoga(){
	let escolhaPc;
	let rng = Math.random();
	if (rng < 0.2){
		escolhaPc = "rock";
	} else if (rng > 0.2 && rng < 0.4){
		escolhaPc = "paper";
	} else if (rng > 0.4 && rng < 0.6){
		escolhaPc = "scissors";
	} else if (rng > 0.6 && rng < 0.8){
		escolhaPc = "lizard";
	} else {
		escolhaPc = "spock";
	}
	
	return escolhaPc;
}

function Rodada(){

	if (selJogador == "rock" && (selPc == "lizard" || selPc == "scissors")){
		console.log("The pitiful human wins!");
		jogWins ++;
	} else if (selJogador == "paper" && (selPc == "spock" || selPc == "rock")){
		console.log("The pitiful human wins!");
		jogWins ++;
	} else if (selJogador == "scissors" && (selPc == "lizard" || selPc == "paper")){
		console.log("The pitiful human wins!");
		jogWins ++;
	} else if (selJogador == "lizard" && (selPc == "spock" || selPc == "paper")){
		console.log("The pitiful human wins!");
		jogWins ++;
	} else if (selJogador == "spock" && (selPc == "scissors" || selPc == "rock")){
		console.log("The pitiful human wins!");
		jogWins ++;
	} else {
		console.log("The superior machine wins!");
		pcWins ++;
	}
}

function jogo(){

	for(let i = 0; i < 5; i++){
		selPc = pcJoga();
		selJogador = jogJoga();
		console.log("The machines choose: " + selPc);
		console.log("The humans choose: " + selJogador);
		Rodada();

	}

	if (pcWins > jogWins){
		console.log("The machines have defeated the puny humans!");
	} else {
		console.log("Mankind has been saved from the machines... For now.");
	}

}