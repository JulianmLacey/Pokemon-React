const typeDefs = `
type basePokemon{
    _id: ID
    base_attack: Int
    base_defense: Int
    base_stamina: Int
    form: String
    pokemon_id: Int
    pokemon_name: String
    moves: basePokemonMoves
}

type chargedMove{
    _id: ID
    critical_chance: Float
    duration: Int
    energy_delta: Int
    move_id: Int
    name: String
    power: Int
    stamina_loss_scaler: Float
    type: String
}

type fastMove{
    _id: ID
    duration: Int
    energy_delta: Int
    move_id: Int
    name: String
    power: Int
    stamina_loss_scaler: Float
    type: String
}

type basePokemonMoves{
    charged_moves: [String]
    elite_charged_moves: [String]
    elite_fast_moves: [String]
    fast_moves: [String]
    form: String
    pokemon_id: Int
    pokemon_name: String
}

type userPokemon{
    pokemon_name: String
    att: Int
    def: Int
    sta: Int
    pokemon_id: Int
    type: [String]
    fastMove: fastMove
    chargedMoves: chargedMove
}

type User{
    _id: ID
    username: String
    email: String
    password: String
    pokemon: [userPokemon]
}

type Auth {
    token: ID!
    user: User
}


type Query{
    basepokemons: [basePokemon]
    basepokemon(pokemonname: String!): basePokemon
    chargedmove(name: String!): chargedMove
    fastmove(name: String!): fastMove
    basepokemonmove(pokemonname: String!): basePokemonMoves
    basepokemonmoves: [basePokemonMoves]
    user(email: String!): User
}

type Mutation{
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPokemon(userID: ID!, pokemon_name: String!, att: Int!, def: Int!, sta: Int!, pokemon_id: Int!, type: [String!], fastMove: [ID!], chargedMoves: [ID!]): User

}`;

module.exports = typeDefs;
