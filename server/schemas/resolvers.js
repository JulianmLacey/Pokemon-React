const { basePokemon, fastMove, chargedMove, basePokemonMoves, User, userPokemon } = require("../models");
const { signToken, AuthenticationError } = require("../utils/auth");

const resolvers = {
	Query: {
		basepokemons: async () => {
			return await basePokemon.find({});
		},
		basepokemon: async (parent, { pokemonname }) => {
			const pokemon = await basePokemon.findOne({ pokemon_name: pokemonname });
			console.log(pokemon ? "FOUND" + pokemon : "NOT FOUND");
			return pokemon;
		},
		basepokemonmoves: async (parent, { pokemonname }) => {
			return await basePokemonMoves.find({});
		},
		basepokemonmove: async (parent, { pokemonname }) => {
			const pokemon = await basePokemonMoves.findOne({ pokemon_name: pokemonname });
			return pokemon;
		},
		chargedmove: async (parent, { name }) => {
			return await chargedMove.findOne({ name });
		},
		fastmove: async (parent, { name }) => {
			return await fastMove.findOne({ name });
		},
		user: async (parent, { email }) => {
			const u = await User.findOne({ email })
				.populate("pokemon")
				.populate({ path: "pokemon", populate: { path: "fastMove chargedMoves" } });
			console.log(u);
			return u;
		},
	},
	Mutation: {
		addUser: async (parent, { username, email, password }) => {
			const user = await User.create({ username, email, password });
			const token = signToken(user);
			return { token, user };
		},
		login: async (parent, { email, password }) => {
			const user = await User.findOne({ email });
			if (!user) throw AuthenticationError;

			const correctPassword = await user.isCorrectPassword(password);

			if (!correctPassword) throw AuthenticationError;

			const token = signToken(user);
			return { token, user };
		},
		addPokemon: async (parent, { userID, pokemon_name, att, def, sta, pokemon_id, type, fastMove, chargedMoves }, context) => {
			const pokemon = await userPokemon.create({ pokemon_name, att, def, sta, pokemon_id, fastMove, chargedMoves });
			console.log(pokemon);

			return await User.findOneAndUpdate({ _id: userID }, { $addToSet: { pokemon: pokemon._id } }, { new: true })
			.populate({ path: "pokemon", populate: { path: "fastMove chargedMoves" } });
		},
	},
};

module.exports = resolvers;
