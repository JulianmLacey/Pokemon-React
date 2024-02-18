import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import { useState, useEffect } from "react";
import { Button, Layout, Form, Input, InputNumber, Select } from "antd";
const { Header, Content } = Layout;
import BestP from "../components/bestPokemon";
import Auth from "../utils/auth";

const currentList = [
	{
		id: 310,
		name: "MANECTRIC",
		types: ["Electric"],
		weather: ["rain"],
	},
	{
		id: 797,
		name: "CELESTEELA",
		types: ["Steel", "Flying"],
		weather: ["windy", "snow"],
	},
	{
		id: 798,
		name: "KARTANA",
		types: ["Grass", "Steel"],
		weather: ["sunny", "snow"],
	},

	{
		id: 68,
		name: "MACHAMP",
		types: ["Fighting"],
		weather: ["cloudy"],
	},
	{
		id: 323,
		name: "CAMERUPT",
		types: ["Fire", "Ground"],
		weather: ["sunny"],
	},
	{
		id: 376,
		name: "METAGROSS",
		form: "METAGROSS",
		types: ["Steel", "Psychic"],
		weather: ["windy", "snow"],
	},
	{
		id: 776,
		name: "TURTONATOR",
		form: "TURTONATOR",
		types: ["Fire", "Dragon"],
		weather: ["sunny", "windy"],
	},
	{
		id: 201,
		name: "UNOWN",
		form: "UNOWN",
		types: ["Psychic"],
		weather: ["windy"],
	},
];

const Find = () => {
	const filterOption = (input, option) => (option?.label ?? "").toLowerCase().includes(input.toLowerCase());
	const [pokemonInput, setPokemonInput] = useState("");

	const onChange = async (value) => {
		console.log("CHANGED:", value);
		setPokemonInput(value);
	};
	const onFinishFailed = (errorInfo) => {
		console.log("Failed:", errorInfo);
	};

	const onSearch = (value) => {
		console.log("search:", value);
	};
	return (
		<Content theme="dark" className="content" class="addFormStyle">
			{!pokemonInput ? <Select showSearch placeholder="Raid Boss:" optionFilterProp="children" onChange={onChange} filterOption={filterOption} options={currentList.map((x) => ({ value: x.id, label: x.name }))} /> : <BestP boss={pokemonInput} />}
		</Content>
	);
};

export default Find;
