import { gql } from "@apollo/client";

export const QUERY_USER = gql`
	query Query($email: String!) {
		user(email: $email) {
			_id
			email
			password
			pokemon {
				att
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
				pokemon_id
				pokemon_name
				sta
				type
			}
			username
		}
	}
`;

export const QUERY_BASE_POKEMON_MOVES = gql`
	query Basepokemonmove($pokemonname: String!) {
		basepokemonmove(pokemonname: $pokemonname) {
			_id
			charged_moves
			elite_charged_moves
			elite_fast_moves
			fast_moves
			pokemon_name
		}
	}
`;

export const QUERY_ALL_BASE_POKEMON = gql`
	query Query {
		basepokemons {
			pokemon_name
		}
	}
`;

export const QUERY_GET_BASE_POKEMON = gql`
	query Query($pokemonname: String!) {
		basepokemon(pokemonname: $pokemonname) {
			_id
			base_attack
			base_defense
			base_stamina
			form
			pokemon_id
			pokemon_name
		}
	}
`;

export const QUERY_GET_BASE_POKEMON_MOVES = gql`
	query Query($pokemonname: String!) {
		basepokemonmove(pokemonname: $pokemonname) {
			charged_moves
			elite_charged_moves
			elite_fast_moves
			fast_moves
			pokemon_name
		}
	}
`;

export const USER_POKEMON_FAST_MOVE = gql`
	query Query($name: String!) {
		fastmove(name: $name) {
			_id
			duration
			energy_delta
			move_id
			name
			power
			stamina_loss_scaler
			type
		}
	}
`;

export const USER_POKEMON_CHARGED_MOVE = gql`
	query Query($name: String!) {
		chargedmove(name: $name) {
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
	}
`;
