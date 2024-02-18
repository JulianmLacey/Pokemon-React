import { Link } from "react-router-dom";
import { useQuery } from "@apollo/client";

import React from "react";
import { Button, Layout, Menu, Typography } from "antd";
import Auth from "../utils/auth";
const { Header, Content } = Layout;
const Home = () => {
	const refreshPage = (page) => {
		window.location.assign(page);
	};
	return (
		<Content theme="dark" className="content">
			<Typography.Title level={3}>About Us</Typography.Title>
			<Typography.Paragraph>Welcome to Our Pokémon Raid Battle App!</Typography.Paragraph>
			<Typography.Paragraph>We are a team of enthusiastic Pokémon enjoyers and developers who are dedicated to enhancing your Pokémon Raid Battle experience.</Typography.Paragraph>
			<Typography.Paragraph>Our mission is to equip Trainers like you with the knowledge and tools needed to conquer any Raid Boss. Whether you're challenging a Legendary Pokémon, a Mega Evolution, or any other formidable opponent, our app has you covered.</Typography.Paragraph>
			<Typography.Paragraph>With our app, you can explore Pokémon stats, discover the best Pokémon for specific Raid Bosses, and fine-tune your battle strategies.</Typography.Paragraph>
			<Typography.Paragraph>Join us on this journey to become the ultimate Pokémon Trainer. Download our app today and embark on a new adventure!</Typography.Paragraph>
			<Typography.Paragraph>Thank you for choosing My Pokémon Raid Battle App!</Typography.Paragraph>
			<Button type="primary" className="proceed-button" onClick={() => refreshPage(Auth.getProfile() ? "/add" : "/Signup")}>
				Get Started
			</Button>
			<Button type="primary" className="proceed-button" onClick={() => refreshPage("/find")}>
				Search Raid Bosses
			</Button>
		</Content>
	);
};

export default Home;
