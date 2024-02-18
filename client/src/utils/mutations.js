import { gql } from "@apollo/client";

export const MUTATION_ADD_USER = gql`
	mutation Mutation($username: String!, $email: String!, $password: String!) {
		addUser(username: $username, email: $email, password: $password) {
			token
			user {
				_id
			}
		}
	}
`;

export const MUTATION_LOGIN = gql`
	mutation Mutation($email: String!, $password: String!) {
		login(email: $email, password: $password) {
			token
			user {
				email
				pokemon {
					att
					def
					fastMove {
						_id
						duration
						energy_delta
						move_id
						name
						power
						stamina_loss_scaler
						type
					}
					chargedMoves {
						_id
						critical_chance
						duration
						energy_delta
						move_id
						name
						power
						stamina_loss_scaler
						type
					}
					pokemon_id
					pokemon_name
					sta
					type
				}
			}
		}
	}
`;

export const MUTATION_ADD_USER_POKEMON = gql`
	mutation Mutation($userId: ID!, $pokemonName: String!, $att: Int!, $def: Int!, $sta: Int!, $pokemonId: Int!, $type: [String!], $fastMove: [ID!], $chargedMoves: [ID!]) {
		addPokemon(userID: $userId, pokemon_name: $pokemonName, att: $att, def: $def, sta: $sta, pokemon_id: $pokemonId, type: $type, fastMove: $fastMove, chargedMoves: $chargedMoves) {
			pokemon {
				pokemon_name
			}
		}
	}
`;
