const { Schema, model } = require("mongoose");

const basePokemonMovesSchema = new Schema({
	charged_moves: {
		type: [String],
		required: true,
		unique: false,
	},
	elite_charged_moves: {
		type: [String],
		required: true,
		unique: false,
	},
	elite_fast_moves: {
		type: [String],
		required: true,
		unique: false,
	},
	fast_moves: {
		type: [String],
		required: true,
		unique: false,
	},
	form: {
		type: String,
		required: true,
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
		unique: false,
	},
});

const basePokemonMoves = model("basePokemonMoves", basePokemonMovesSchema);
module.exports = basePokemonMoves;
