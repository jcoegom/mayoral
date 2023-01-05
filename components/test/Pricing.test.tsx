import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "../../components/Pricing";
import Pricing from "../../components/Pricing";

describe("Test Pricing component", () => {
  it("Test render pricing without discount", () => {
    render(<Pricing price={10} discount={0} currency={"€"} />);
    const elNoDisc = screen.getByTestId("pricing-nodiscount");
    expect(elNoDisc).toBeInTheDocument();
    const elDisc = screen.queryByTestId("pricing-discount");
    expect(elDisc).not.toBeInTheDocument();
  });
  it("Test render pricing with discount", () => {
    render(<Pricing price={10} discount={5} currency={"€"} />);
    const elNoDisc = screen.queryByTestId("pricing-nodiscount");
    expect(elNoDisc).not.toBeInTheDocument();
    const elDisc = screen.queryByTestId("pricing-discount");
    expect(elDisc).toBeInTheDocument();
  });
  it("Test discount calculation is right", () => {
    render(<Pricing price={100} discount={5} currency={"€"} />);
    const elNoDisc = screen.queryByTestId("pricing-nodiscount");
    expect(elNoDisc).not.toBeInTheDocument();
    const elDisc = screen.queryByTestId("pricing-discount");
    expect(elDisc).toBeInTheDocument();
    const discount = screen.queryByText(/95 €/);
    expect(discount).toBeInTheDocument();
  });
  it("Test discount old price is displayed", () => {
    render(<Pricing price={100} discount={5} currency={"€"} />);
    const elNoDisc = screen.queryByTestId("pricing-nodiscount");
    expect(elNoDisc).not.toBeInTheDocument();
    const elDisc = screen.queryByTestId("pricing-discount");
    expect(elDisc).toBeInTheDocument();
    const discount = screen.queryByText(/100 €/);
    expect(discount).toBeInTheDocument();
  });
  it("Test if discount is displayed", () => {
    render(<Pricing price={100} discount={5} currency={"€"} />);
    const elNoDisc = screen.queryByTestId("pricing-nodiscount");
    expect(elNoDisc).not.toBeInTheDocument();
    const elDisc = screen.queryByTestId("pricing-discount");
    expect(elDisc).toBeInTheDocument();
    const discount = screen.queryByText(/-5%/);
    expect(discount).toBeInTheDocument();
  });
});
