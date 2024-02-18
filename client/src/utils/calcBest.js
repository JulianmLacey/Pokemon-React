import { useQuery, useMutation } from "@apollo/client";
import { QUERY_GET_BASE_POKEMON } from "../utils/queries";
import { MUTATION_ADD_USER_POKEMON } from "../utils/mutations";
import Auth from "./auth";

/*{
"userId": "6501333245d7d9e7368d69a0",
"pokemonName": "Bulbasaur",
"att": 32,
"def": 32,
"sta": 32,
"pokemonId": 1,
"type": ["Grass"],
"fastMove": ["650012ef2d5ad605df1b330f"],
"chargedMoves": ["650012ef2d5ad605df1b3359"],
} */
