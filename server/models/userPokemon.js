const { Schema, model } = require("mongoose");

const userPokemonSchema = new Schema({
	pokemon_name: {
		type: String,
		required: true,
		unique: false,
		trim: true,
	},
	att: {
		type: Number,
		required: true,
		unique: false,
	},
	def: {
		type: Number,
		required: true,
		unique: false,
	},
	sta: {
		type: Number,
		required: true,
		unique: false,
	},
	pokemon_id: {
		type: Number,
		required: true,
		unique: false,
	},
	type: [String],
	fastMove: { type: Schema.Types.ObjectId, ref: "fastMove" },
	chargedMoves: { type: Schema.Types.ObjectId, ref: "chargedMove" },
});

const userPokemon = model("userPokemon", userPokemonSchema);
module.exports = userPokemon;
