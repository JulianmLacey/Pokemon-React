import { useMutation } from "@apollo/client";
import { useState } from "react";

import Auth from "../utils/auth";
import { MUTATION_LOGIN } from "../utils/mutations";
import React from "react";

import { Button, Layout, Menu, Typography, Form, Input } from "antd";
const { Header, Content } = Layout;
const Signup = () => {
	const [login, { error }] = useMutation(MUTATION_LOGIN);

	const sumbitLogin = async (values) => {
		const mutationResponse = await login({
			variables: {
				email: values.email,
				password: values.password,
			},
		});
		const token = mutationResponse.data.login.token;
		Auth.login(token);
	};
	return (
		<Content theme="dark" className="content" class="addFormStyle">
			<Form layout="vertical" name="login-form" initialValues={{ remember: true }} onFinish={sumbitLogin}>
				<Typography.Title level={3}>Login</Typography.Title>
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
