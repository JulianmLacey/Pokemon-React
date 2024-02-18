import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import { QUERY_ALL_BASE_POKEMON, QUERY_GET_BASE_POKEMON, QUERY_GET_BASE_POKEMON_MOVE, USER_POKEMON_FAST_MOVE, USER_POKEMON_CHARGED_MOVE } from "../utils/queries";
import { MUTATION_ADD_USER_POKEMON } from "../utils/mutations";
import { useState, useEffect } from "react";
import { Button, Layout, Form, Input, InputNumber, Select } from "antd";
const { Header, Content } = Layout;
import AddForm from "../components/addForm";
import Auth from "../utils/auth";
const Add = () => {
	const { data = { basepokemons: { pokemon_name: "" } }, status } = useQuery(QUERY_ALL_BASE_POKEMON);
	const [getBasePokemon, { data: basepokemon = { bp: { base_attack: 0, base_defense: 0, base_stamina: 0, form: "" } }, loading, error }] = useLazyQuery(QUERY_GET_BASE_POKEMON);
	
	const [savePokemon, { data: res, loading: load, error: err }] = useMutation(MUTATION_ADD_USER_POKEMON);
	const [getPokemonFastMove, { data: fm = { fastmove: { _id: 0 } } }] = useLazyQuery(USER_POKEMON_FAST_MOVE);
	const [getPokemonChargedMove, { data: cm = { chargedmove: { _id: 0 } } }] = useLazyQuery(USER_POKEMON_CHARGED_MOVE);
	
	const [pokemonInput, setPokemonInput] = useState("");

	const onChange = async (value) => {
		console.log("CHANGED:", value);
		setPokemonInput(value);
	};

	if (status === "loading") {
		return <div>Loading...</div>;
	} else if (status === "error") {
		return <div>Error</div>;
	} else {
		//console.log(data);
		const d = data.basepokemons;
		const basePokemonOpts = Array.from(d, (pokemon) => ({ value: pokemon.pokemon_name, label: pokemon.pokemon_name }));

		const filterOption = (input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
		const opts = [
			{ value: "test2", label: "test2" },
			{ value: "test", label: "test" },
		];
		const onFinish = async (values) => {
			//console.log("Success:", values);
			console.log("values: ", values);
			const basepokemondata = await getBasePokemon({ variables: { pokemonname: values.pokemon } });
			console.log("basepokemondata:", basepokemondata.data.basepokemon);

			const bp = basepokemondata.data.basepokemon;
			console.log("bp:", bp);
			const userId = Auth.getProfile().data._id;
			const pokemonName = bp.pokemon_name;
			const att = values.att + bp.base_attack;
			const def = values.def + bp.base_defense;
			const sta = values.sta + bp.base_stamina;
			const pokemonId = bp.pokemon_id;
			const fm = await getPokemonFastMove({ variables: { name: values.fastmove } });
			const cm = await getPokemonChargedMove({ variables: { name: values.chargedmove } });

			console.log("fm:", fm);
			console.log("cm:", cm);
			const fastMove = fm.data.fastmove._id;
			const chargedMoves = cm.data.chargedmove._id;
			console.log("fast_moves:", fastMove);
			console.log({ userId, pokemonName, att, def, sta, pokemonId, fastMove, chargedMoves });
			try {
				const res = await savePokemon({
					variables: { userId, pokemonName, att, def, sta, pokemonId, fastMove, chargedMoves },
				});
			} catch (error) {
				console.log(error);
			}
			console.log(res);
			//window.location.assign("/add");
		};
		const onFinishFailed = (errorInfo) => {
			console.log("Failed:", errorInfo);
		};

		const onSearch = (value) => {
			console.log("search:", value);
		};
		const refreshPage = (page) => {
			window.location.assign(page);
		};
		return (
			<Content theme="dark" className="content" class="addFormStyle">
				<Form name="basic" layout="vertical" style={{ maxWidth: 600 }} initialValues={{ remember: true }} onFinish={onFinish} onFinishFailed={onFinishFailed} autoComplete="off">
					{/* pokemon */}
					<Form.Item name="pokemon" rules={[{ required: true, message: "Please input your Pokemon!" }]}>
						<Select showSearch placeholder="Pokemon" optionFilterProp="children" onChange={onChange} onSearch={onSearch} filterOption={filterOption} options={basePokemonOpts} />
					</Form.Item>
					{/* //Stats */}
					<Form.Item name="att" rules={[{ required: true }]} style={{ display: "inline-block", margin: "4 4px" }}>
						<InputNumber placeholder="Att: " />
					</Form.Item>
					<Form.Item name="def" rules={[{ required: true }]} style={{ display: "inline-block", margin: "4 4px" }}>
						<InputNumber placeholder="Def: " />
					</Form.Item>
					<Form.Item name="sta" rules={[{ required: true }]} style={{ display: "inline-block", margin: "4 4px" }}>
						<InputNumber placeholder="Sta: " />
					</Form.Item>
					{/* //CP */}
					<Form.Item name="cp" rules={[{ required: true }]}>
						<InputNumber placeholder="CP: " />
					</Form.Item>
					{!pokemonInput ? (
						<>
							<Form.Item>
								<Select showSearch placeholder="FastMove" optionFilterProp="children" filterOption={filterOption} options={opts} />
							</Form.Item>
							<Form.Item>
								<Select showSearch placeholder="Charged Move" optionFilterProp="children" filterOption={filterOption} options={opts} />
							</Form.Item>
							<Form.Item style={{ justifyContent: "space-around" }}>
								<Button type="primary" htmlType="submit">
									Submit
								</Button>
								<Button type="primary" className="proceed-button" onClick={() => refreshPage("/find")}>
									Continue to Search
								</Button>
							</Form.Item>
						</>
					) : (
						<AddForm value={pokemonInput} />
					)}
				</Form>
			</Content>
		);
	}
};

export default Add;
