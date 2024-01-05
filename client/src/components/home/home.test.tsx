import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "./home";

describe("Home Component", () => {
  it("renders the welcome message", () => {
    render(<Home />);
    const welcomeElement = screen.getByText("Welcome");
    expect(welcomeElement).toBeInTheDocument();
  });
});

//describe('Home Component', () => {
//  it('renders the div container', () => {
//  render(<Home />);
//const containerElement = screen.getByTestId('home-container');
// expect(containerElement).toBeInTheDocument();
//});
//});
