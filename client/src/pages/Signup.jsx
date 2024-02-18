import { useMutation } from "@apollo/client";
import { useState } from "react";

import Auth from "../utils/auth";
import { MUTATION_ADD_USER } from "../utils/mutations";
import React from "react";

import { Button, Layout, Menu, Typography, Form, Input } from "antd";
const { Header, Content } = Layout;
const Signup = () => {
	const [formState, setFormState] = useState({ username: "", email: "", password: "" });
	const [addUser] = useMutation(MUTATION_ADD_USER);

	const submitSignup = async (values) => {
		const mutationResponse = await addUser({
			variables: {
				username: values.username,
				email: values.email,
				password: values.password,
			},
		});
		const token = mutationResponse.data.addUser.token;
		Auth.login(token);
		window.location.assign("/login");
	};
	return (
		<Content theme="dark" className="content" class="addFormStyle">
			<Form layout="vertical" name="login-form" initialValues={{ remember: true }} onFinish={submitSignup}>
				<Typography.Title level={3}>Sign-Up</Typography.Title>
				<Form.Item name="username" rules={[{ required: true, message: "Please enter a !" }]}>
					<Input placeholder="Create A Username:" />
				</Form.Item>
				<Form.Item name="email" rules={[{ required: true, message: "Please enter an email!" }]}>
					<Input placeholder="Enter Your Email: " />
				</Form.Item>
				<Form.Item name="password" rules={[{ required: true, message: "Please enter a password!" }]}>
					<Input.Password placeholder="Enter Password: " />
				</Form.Item>
				<Button type="primary" htmlType="submit">
					Login
				</Button>
			</Form>
		</Content>
	);
};

export default Signup;
