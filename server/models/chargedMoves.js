const { Schema, model } = require("mongoose");

const chargedMoveSchema = new Schema({
	critical_chance: {
		type: Number,
		required: false,
		unique: false,
	},

	duration: {
		type: Number,
		required: true,
		unique: false,
	},
	energy_delta: {
		type: Number,
		required: true,
		unique: false,
	},
	move_id: {
		type: Number,
		required: true,
		unique: false,
	},
	name: {
		type: String,
		required: true,
		unique: false,
	},
	power: {
		type: Number,
		required: true,
		unique: false,
	},
	stamina_loss_scaler: {
		type: Number,
		required: true,
		unique: false,
	},
	type: {
		type: String,
		required: true,
		unique: false,
	},
});

const chargedMove = model("chargedMove", chargedMoveSchema);
module.exports = chargedMove;
