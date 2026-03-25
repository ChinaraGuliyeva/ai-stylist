import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Header } from "../components/Header";
import { Wrapper } from "../components/Wrapper";

export const Route = createRootRoute({
	component: () => (
		<>
			<Header />
			<Wrapper>
				<Outlet />
			</Wrapper>
		</>
	),
});
