import React, { act } from "react";
import ReactDOM from "react-dom/client";
import { beforeEach, describe, expect, it } from "vitest";
import { Appointment } from "../src/Appointment";

describe("Appointment", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  });

  const render = (component: React.JSX.Element) =>
    act(() => ReactDOM.createRoot(container).render(component));

  it("renders the customer's first name", () => {
    render(<Appointment customer={{ firstName: "Ashley" }} />);
    expect(document.body.textContent).toContain("Ashley");
  });

  it("renders another customer's first name", () => {
    render(<Appointment customer={{ firstName: "Jordan" }} />);
    expect(document.body.textContent).toContain("Jordan");
  });
});
