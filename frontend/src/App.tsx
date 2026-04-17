import "./App.css";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { Provider } from "react-redux";
import { routeTree } from "./routeTree.gen";
import { store } from "./store";

const router = createRouter({ routeTree });
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const App = () => {
	return (
		<Provider store={store}>
			<RouterProvider router={router} />
		</Provider>
	);
};

export default App;
