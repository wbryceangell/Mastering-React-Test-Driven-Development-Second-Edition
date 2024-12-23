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
    render(<AppointmentsDayView appointments={[]} />);
    expect(document.querySelector("div#appointmentsDayView")).not.toBeNull();
  });

  it("renders an ol element to display appointment", () => {
    render(<AppointmentsDayView appointments={[]} />);
    const listElement = document.querySelector("ol");
    expect(listElement).not.toBeNull();
  });

  it("renders an li for each appointment", () => {
    const today = new Date();
    const appointments = [
      { startsAt: today.setHours(12, 0) },
      { startsAt: today.setHours(13, 0) },
    ];
    render(<AppointmentsDayView appointments={appointments} />);
    const listChildren = document.querySelectorAll("ol > li");
    expect(listChildren).toHaveLength(2);
  });
});
