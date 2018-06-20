console.log('game JS is working')

const game = {
	library: [{name: "Bulbasaur", damage:60}, {name: "Caterpie", damage:40},{name: "Charmander", damage:60},{name: "Clefairy", damage:50},{name: "Jigglypuff", damage:60},{name: "Mankey", damage:30},{name: "Meowth", damage:60},{name: "Nidoran - female", damage:60},{name: "Nidoran - male", damage:50},{name: "Oddish", damage:40},{name: "Pidgey", damage:50},{name: "Pikachu", damage:50},{name: "Poliwag", damage:50},{name: "Psyduck", damage:60},{name: "Rattata", damage:30}, {name: "Squirtle", damage:60}, {name: "Vulpix", damage:50}, {name: "Weedle", damage:40}],
	// library of all the Pokemon cards that can be played
	cardsPlayed: [],
	// list of cards that have been played
	// SHOULD THIS BE AFTER EACH CARD IS PLAYED, RATHER THAN AFTER EACH CARD IS DEALT?
	cardsRemaining: 18,
	// how many cards are left to be played overall
	totalPointsPlayer: 0,
	// the player's total points
	totalPointsComputer: 0,
	// the computer's total points
	roundCurrent: 0,
	// a listing of which round it currently is
	numberOfRoundsWonPlayer: 0,
	// number of rounds that the player has won
	numberOfRoundsWonComputer: 0,
	// number of rounds that they computer has wons
	dealCards(){
		// method to deal 3 cards from the library to the player, and 3 cards from the library to the computer

		for (let i = 0; i < 3; i++) {
			player.cardsInHand.push(game.library.splice(Math.floor(Math.random() * game.library.length), 1)[0]);
			computer.cardsInHand.push(game.library.splice(Math.floor(Math.random() * game.library.length), 1)[0]);
		}
		this.cardsRemaining -= 6;
		this.roundCurrent ++;
	},
	determineWinner(){
		// method to determine the winner of each play
		console.log('this is the determineWinner method')
	},
	gameEnd(){
		// stop once there are no cards left or not enough to deal 3 to each the player and the computer
		if (cardsRemaining < 6) {
			return //NEED SOME WAY TO STOP GAME, CLEAR???
		}
	}
}





const player = {
	stats: {
		totalPoints: 0,
		// Player's total points
		roundsWon: 0,
		// The number of rounds the palyer has won
	},
	cardsInHand: [],
	// shows the player the cards they have been dealt for the given round
	seeStats() {
		console.log(`Your total points are ${player.stats.totalPoints} and you have won ${player.stats.roundsWon} rounds.`)
	},
	seeCardsInHand() {
		for (let key in this.cardsInHand) {
			console.log(this.cardsInHand[key]);
		}
	},
	pickCardFromHand(){
		// pick a card from the hand to play against the computer
		// need to do this 3 times total
		// cardChosen: window.prompt(`Which card would you like to play?
		// 	Card 1: ${this.cardsInHand[0].name} - ${this.cardsInHand[0].damage} damage
		// 	Card 2: ${this.cardsInHand[1].name} - ${this.cardsInHand[1].damage} damage
		// 	Card 3: ${this.cardsInHand[2].name} - ${this.cardsInHand[2].damage} damage
		// 	Please type the NUMBER of the card you are picking.`)
		// return this.cardChosen;
		// console.log(this.cardChosen);
	},
	playChosenCard(){
		// play Player's chosen card against computer
		// need to do this 3 times total
				console.log(`The player decided to play card name with a damage value of`);
	},
	recieveNewCards(){
		// the player should be able to recievie new cards given to them by the game each round
	},
	seeCardsAlreadyPlayed(){
		// Player sees the cards they have played in the past
	}
}

console.log(player.cardChosen);



const computer = {
	stats: {
		totalPoints: 0,
		// computers's total points
		roundsWon: 0,
		// The number of rounds the computer has won
	},
	cardsInHand: [],
	// the cards in the computer's hand
	pickCardFromHand(){
		// pick a card from the hand to play against the player
		// need to do this 3 times total
	},
	playChosenCard(){
		// play chosen card against Player
		// need to do this 3 times total
	},
	recieveNewCards(){
		// the computer should be able to recievie new cards given to them by the game each round
	},
	seeCardsAlreadyPlayed(){
		// Computer sees the cards they have played in the past
	}
}