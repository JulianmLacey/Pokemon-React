import { useQuery, useMutation, useLazyQuery } from "@apollo/client";
import { QUERY_USER } from "../utils/queries";
import { useState, useEffect } from "react";
import { Button, Layout, Image, Form, Input, InputNumber, Select, Col, Row, Card, Space } from "antd";
const { Header, Content } = Layout;
import AddForm from "../components/addForm";
import Auth from "../utils/auth";
const { Meta } = Card;
const currentList = [
	{ id: 310, name: "MANECTRIC", types: ["Electric"], weather: ["rain"] },
	{ id: 797, name: "CELESTEELA", types: ["Steel", "Flying"], weather: ["windy", "snow"] },
	{ id: 798, name: "KARTANA", types: ["Grass", "Steel"], weather: ["sunny", "snow"] },
	{ id: 323, name: "MACHAMP", types: ["Fighting"], weather: ["cloudy"] },
	{ id: 756, name: "CAMERUPT", types: ["Fire", "Ground"], weather: ["sunny"] },
	{ id: 376, name: "METAGROSS", form: "METAGROSS", types: ["Steel", "Psychic"], weather: ["windy", "snow"] },
	{ id: 776, name: "TURTONATOR", form: "TURTONATOR", types: ["Fire", "Dragon"], weather: ["sunny", "windy"] },
	{ id: 201, name: "UNOWN", form: "UNOWN", types: ["Psychic"], weather: ["windy"] },
];

const BestP = (props) => {
	const refreshPage = (page) => {
		window.location.assign(page);
	};
	const {
		data = {
			user: { pokemon: 0 },
		},
		status,
		error,
	} = useQuery(QUERY_USER, { variables: { email: Auth.getProfile().data.email } });
	if (status === "loading") {
		return <div>Loading...</div>;
	} else if (error) {
		console.log(error);
		return <div>Error</div>;
	} else {
		console.log("User Query: ", data.user);
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
								<Image src={`https://images.gameinfo.io/pokemon/256/p${props.boss}.webp`} style={{ alignSelf: "center" }} />
							</div>
						</Col>
					</Row>

					<Row>
						<Col span={8}></Col>
						<Col span={12} style={{ alignContent: "center" }}>
							<Button type="primary" className="proceed-button" onClick={() => refreshPage("/find")}>
								Search Again
							</Button>

							<Button type="primary" className="proceed-button" onClick={() => refreshPage("/add")}>
								Add Pokemon
							</Button>
						</Col>
					</Row>
					<Row justify="space-around" gutter={[8, 24]}>
						{Array.from(data.user.pokemon, (p) => {
							return (
								<Col span={4}>
									<Card
										hoverable
										size="small"
										style={{ minWidth: 128, fontSize: 12, maxWidth: 128 }}
										cover={
											<div style={{ backgroundImage: `url(https://pm1.aminoapps.com/7243/46d5cfd672a1e2fca16c78d728e2b10cb57f7ce0r1-669-521v2_hq.jpg)`, maxWidth: 128 }}>
												<img alt="pokemon" style={{ alignSelf: "center", maxWidth: 128 }} src={`https://images.gameinfo.io/pokemon/256/p${p.pokemon_id}.webp`} />
											</div>
										}>
										<Meta title={p.pokemon_name} description={`att: ${p.att} def: ${p.def} sta: ${p.sta}`} />
									</Card>
								</Col>
							);
						})}
					</Row>
				</Space>
			</Content>
		);
	}
};

export default BestP;
