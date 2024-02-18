const db = require("../config/connection");
const { basePokemon, fastMove, chargedMove, basePokemonMoves } = require("../models");

const basePokemonData = require("./basePokemonData.json");
const fastMoveData = require("./fastMovesData.json");
const chargedMoveData = require("./chargedMovesData.json");
const basePokemonMovesData = require("./basePokemonMoves.json");
//const { base } = require("../models/basePokemon");

db.once("open", async () => {
	// bulk create each model
	let count = 0;
	for (let i = 0; i < basePokemonData.length; i++) {
		let pokemon = await basePokemon.findOne({ pokemon_name: basePokemonData[i].pokemon_name });
		if (!pokemon) {
			pokemon = await basePokemon.create(basePokemonData[i]);
			count++;
		}
	}
	console.log("basePokemon added: " + count);

	const fastMoves = await fastMove.insertMany(fastMoveData);
	const chargedMoves = await chargedMove.insertMany(chargedMoveData);
	const basepokemonmove = await basePokemonMoves.insertMany(basePokemonMovesData);

	console.log("all done!");
	process.exit(0);
});
