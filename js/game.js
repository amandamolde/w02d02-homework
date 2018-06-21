// //////////////////////////////////////////////
// /////////////GAME OBJECT/////////////////////
// ////////////////////////////////////////////

const game = {
	library: [{name: "Bulbasaur", damage:60}, {name: "Caterpie", damage:40},{name: "Charmander", damage:60},{name: "Clefairy", damage:50},{name: "Jigglypuff", damage:60},{name: "Mankey", damage:30},{name: "Meowth", damage:60},{name: "Nidoran - female", damage:60},{name: "Nidoran - male", damage:50},{name: "Oddish", damage:40},{name: "Pidgey", damage:50},{name: "Pikachu", damage:50},{name: "Poliwag", damage:50},{name: "Psyduck", damage:60},{name: "Rattata", damage:30}, {name: "Squirtle", damage:60}, {name: "Vulpix", damage:50}, {name: "Weedle", damage:40}],
	cardsPlayed: [],
	cardsRemaining: 18,
	currentRound: 0,
	playGame(){
		console.log("Game is starting!");
		while (this.library.length > 5) {
			this.playRound();
		}
	},
	playRound(){
		this.currentRound++;
		console.log(this.currentRound);
		this.dealHands();
		this.battle();
		this.battle();
		this.battle();
		this.endRound();
	},
	endRound(){
		console.log(`Round ${this.currentRound} has ended`);
		console.log(`You have ${player.stats.totalPoints} points.`)
		console.log(`The computer has ${computer.stats.totalPoints} points.`)

		if(player.stats.totalPoints > computer.stats.totalPoints) {
			player.stats.roundsWon ++;
			console.log("Congratulations, you have won this round!");
		} else if (player.stats.totalPoints < computer.stats.totalPoints) {
			computer.stats.roundsWon ++;
			console.log("Sorry, the computer won this round.");
		} else if (player.stats.totalPoints == computer.stats.totalPoints) {
			console.log("This round was a tie.");
		}

		// Reset points for next round
		player.stats.totalPoints = 0;
		computer.stats.totalPoints = 0;

	},
	deal(){
		let randomIndex = Math.floor(Math.random() * this.library.length);
		let dealtCard = this.library.splice(randomIndex, 1)[0];
		return dealtCard;
	},
	dealHands(){
		for (let i = 0; i < 3; i++) {
			let playerCardDealt = this.deal();
			let computerCardDealt = this.deal();
			player.hand.push(playerCardDealt);
			computer.hand.push(computerCardDealt);

			// Log the cards played
			this.cardsPlayed.push(playerCardDealt, computerCardDealt);
		}
		// decrease the amount of cards remaining
		this.cardsRemaining -= 6;
	},
	battle() {
		let computerCard = computer.hand.splice(0,1)[0];
		console.log(`The computer chose ${JSON.stringify(computerCard)}`);

		let playerChoiceIndex = 0;
		let validChoice = false;

		while (validChoice == false){
			let playerChoice = prompt(`Your hand is: ${JSON.stringify(player.hand)}, Choose your Pokemon!`)
			for (let i = 0; i < player.hand.length; i++) {
				if(playerChoice == player.hand[i].name) {
					console.log(`You chose ${playerChoice}.`);
					playerChoiceIndex = i;
					validChoice = true;
				}
			}
		}
		let playerCard = player.hand.splice(playerChoiceIndex,1)[0];

		if(playerCard.damage > computerCard.damage) {
			console.log(`${JSON.stringify(playerCard.name)} beat ${JSON.stringify(computerCard.name)}, you won!`);
			player.stats.totalPoints ++;
		} else if (playerCard.damage < computerCard.damage) {
			console.log(`${JSON.stringify(playerCard.name)} lost to ${JSON.stringify(computerCard.name)}, better luck next time.`);
			computer.stats.totalPoints ++;
		}
	},
}





// /////////////////////////////////////////////
// /////////////PLAYER OBJECT///////////////////
// ////////////////////////////////////////////

const player = {
	stats: {
		totalPoints: 0,
		// Player's total points
		roundsWon: 0,
		// The number of rounds the palyer has won
	},
	hand: [],
	// the player's hand
}





// //////////////////////////////////////////////
// /////////////COMPUTER OBJECT/////////////////
// ////////////////////////////////////////////

const computer = {
	stats: {
		totalPoints: 0,
		// computers's total points
		roundsWon: 0,
		// The number of rounds the computer has won
	},
	hand: [],
	// the cards in the computer's hand
}

game.playGame();