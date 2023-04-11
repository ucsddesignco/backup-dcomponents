import React from "react";
import { render } from "@testing-library/react";
import Counter from "./Counter";
import renderer from "react-test-renderer";

describe("Counter", () => {
  it("renders the Counter component", () => {
    render(<Counter initialCount={0} />);
  });
  it("renders the Counter component correctly with an initial count", () => {
    const tree = renderer.create(<Counter initialCount={0} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
