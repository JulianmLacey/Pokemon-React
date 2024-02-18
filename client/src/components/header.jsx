import React from "react";
import { Button, Form, Input, Layout, Typography, Menu } from "antd";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Auth from "../utils/auth";

import { useState, useEffect } from "react";
export default function Header() {
	const [current, setCurrent] = useState("mail");
	const onClick = (e) => {
		console.log("click ", e);
		setCurrent(e.key);
		window.location.assign(`/${e.key}`);
	};
	return (
		<Menu theme="dark" onClick={onClick} mode="horizontal" defaultSelectedKeys={["1"]}>
			<Menu.Item key="home">Home</Menu.Item>

			<Menu.Item key={Auth.getToken() ? "login" : "Signup"}>Sign Up / Login</Menu.Item>

			<Typography.Title className="title" level={2} class="header">
				Pokémon Raid Battle App
			</Typography.Title>
		</Menu>
	);
}
