import React, { act } from "react";
import ReactDOM from "react-dom/client";
import { beforeEach, describe, expect, it } from "vitest";
import { Appointment, AppointmentsDayView } from "../src/Appointment";

describe("Appointment", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  });

  const render = (component: React.JSX.Element) =>
    act(() => ReactDOM.createRoot(container).render(component));

  it("renders the customer's first name", () => {
    const customer = { firstName: "Ashley" };
    render(<Appointment customer={customer} />);
    expect(document.body.textContent).toContain(customer.firstName);
  });

  it("renders another customer's first name", () => {
    const customer = { firstName: "Jordan" };
    render(<Appointment customer={customer} />);
    expect(document.body.textContent).toContain(customer.firstName);
  });
});

describe("AppointmentsDayView", () => {
  let container: HTMLDivElement;

  beforeEach(() => {
    container = document.createElement("div");
    document.body.replaceChildren(container);
  });

  const render = (component: React.JSX.Element) =>
    act(() => ReactDOM.createRoot(container).render(component));

  it("renders a div with the right id", () => {
    render(<AppointmentsDayView />);
    expect(document.querySelector("div#appointmentsDayView")).not.toBeNull();
  });
});
