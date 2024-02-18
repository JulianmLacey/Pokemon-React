const { Schema, model } = require("mongoose");

const basePokemonSchema = new Schema({
	base_attack: {
		type: Number,
		required: true,
		unique: false,
	},
	base_defense: {
		type: Number,
		required: true,
		unique: false,
	},
	base_stamina: {
		type: Number,
		required: true,
		unique: false,
	},
	form: {
		type: String,
		required: false,
		unique: false,
	},
	pokemon_id: {
		type: Number,
		required: true,
		unique: false,
	},
	pokemon_name: {
		type: String,
		required: true,
		unique: true,
	},
	moves: {
		type: Schema.Types.ObjectId,
		ref: "basePokemonMoves",
	},
});

const basePokemon = model("basePokemon", basePokemonSchema);
module.exports = basePokemon;
