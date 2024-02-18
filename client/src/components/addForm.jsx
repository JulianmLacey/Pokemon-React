import { useQuery } from "@apollo/client";
import { QUERY_GET_BASE_POKEMON, QUERY_GET_BASE_POKEMON_MOVES } from "../utils/queries";

import { Button, Layout, Form, Input, InputNumber, Select } from "antd";
//import { basePokemon } from "../../../server/models";
const { Header, Content } = Layout;

const AddForm = (props) => {
	const { data = { basepokemonmove: { charged_moves: [], elite_charged_moves: [], elite_fast_moves: [], fast_moves: [], pokemon_name: "" } }, loading, error } = useQuery(QUERY_GET_BASE_POKEMON_MOVES, { variables: { pokemonname: props.value } });

	if (loading) {
		return <div>Loading...</div>;
	} else if (error) {
		return <div>Error</div>;
	} else {
		const filterOption = (input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
		const refreshPage = (page) => {
			window.location.assign(page);
		};
		const fastMove = data.basepokemonmove?.fast_moves || [];
		const fastMoveOptions = Array.from(fastMove, (move) => ({ value: move, label: move }));
		const chargedMove = data.basepokemonmove?.charged_moves || [];
		const chargedMoveOptions = Array.from(chargedMove, (move) => ({ value: move, label: move }));

		return (
			<>
				{/* <h1>Hello</h1> */}
				<Form.Item name="fastmove">
					<Select showSearch placeholder="FastMove" optionFilterProp="children" filterOption={filterOption} options={fastMoveOptions} />
				</Form.Item>

				<Form.Item name="chargedmove">
					<Select showSearch placeholder="Charged Move" optionFilterProp="children" filterOption={filterOption} options={chargedMoveOptions} />
				</Form.Item>

				<Form.Item style={{ justifyContent: "space-around" }}>
					<Button type="primary" className="proceed-button" htmlType="submit">
						Submit
					</Button>
					<Button type="primary" className="proceed-button" onClick={() => refreshPage("/find")}>
						Continue to Search
					</Button>
				</Form.Item>
			</>
		);
	}
};

export default AddForm;
