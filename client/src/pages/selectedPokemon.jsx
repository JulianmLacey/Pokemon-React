import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import { useState, useEffect } from "react";
import { Button, Layout, Image, Form, Input, InputNumber, Select, Col, Row, Card, Space } from "antd";
const { Header, Content } = Layout;
import AddForm from "../components/addForm";
import Auth from "../utils/auth";
import Typography from "antd/es/typography/Typography";

const Pokemon = (props) => {
	const [pokemonInput, setPokemonInput] = useState("");

	const onChange = async (value) => {
		console.log("CHANGED:", value);
		setPokemonInput(value);
	};

	return (
		<Content theme="dark" className="content" class="addFormStyle">
			<Space
				direction="vertical"
				size="middle"
				style={{
					display: "flex",
				}}>
				<Row>
					<Col span={8}></Col>
					<Col span={8}>
						<div style={{ backgroundImage: `url(https://pm1.aminoapps.com/7243/0ea89cf278223e13003a6897d3091b7d99271cf6r1-688-475v2_hq.jpg`, alignContent: "center" }}>
							<Image src={`https://images.gameinfo.io/pokemon/256/p${props.pokemon.pokemon_id}.webp`} style={{ alignSelf: "center" }} />
						</div>
					</Col>
				</Row>

				<Row>
					<Typography.Title level={3}>{props.pokemon.pokemon_name}</Typography.Title>
					<Typography.Title level={3}>{`Att: ${p.pokemon.att} Def: ${p.pokemon.def} Sta: ${p.pokemon.sta}`}</Typography.Title>
				</Row>
			</Space>
		</Content>
	);
};

export default Pokemon;
