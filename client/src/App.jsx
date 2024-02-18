import "./App.css";
import { Outlet } from "react-router-dom";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { ConfigProvider, theme } from "antd";

const client = new ApolloClient({
	uri: "/graphql",
	cache: new InMemoryCache(),
});

import Header from "./components/header";

function App() {
	return (
		<ApolloProvider client={client}>
			<ConfigProvider>
				<Header />
				<Outlet />
			</ConfigProvider>
		</ApolloProvider>
	);
}

export default App;
