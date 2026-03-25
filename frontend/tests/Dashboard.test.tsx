import { render, screen } from "@testing-library/react";
import { Dashboard } from "../src/components/Dashboard";
import { dashBoardHeading } from "../src/textConstants";

describe("Dashboard Component", () => {
	it("should render the heading and text from constants", () => {
		render(<Dashboard />);

		const heading = screen.getByRole("heading", { level: 1 });
		expect(heading).toHaveTextContent(dashBoardHeading);
		expect(screen.getByText(/An AI-powered project/i)).toBeInTheDocument();
	});

	it("should have correct layout classes", () => {
		const { container } = render(<Dashboard />);

		const mainDiv = container.firstChild;
		expect(mainDiv).toHaveClass("d-flex");

		const descriptionDiv = container.querySelector(".description");
		expect(descriptionDiv).toBeInTheDocument();
		expect(descriptionDiv).toHaveClass("col-md-6");
	});
});
