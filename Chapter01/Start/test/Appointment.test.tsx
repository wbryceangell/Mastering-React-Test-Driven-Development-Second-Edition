import React, { act } from "react";
import ReactDOM from 'react-dom/client';
import { describe, expect, it } from 'vitest';
import { Appointment } from "../src/Appointment";

describe("Appointment", () => {
    it("renders the customer's first name", () => {
        const component = <Appointment customer={{ firstName: "Ashley" }} />;
        const container = document.createElement("div");
        document.body.replaceChildren(container);
        act(() => ReactDOM.createRoot(container).render(component));
        expect(document.body.textContent).toContain("Ashley");
    });

    it("renders another customer's first name", () => {
        const component = <Appointment customer={{ firstName: "Jordan" }} />;
        const container = document.createElement("div");
        document.body.replaceChildren(container);
        act(() => ReactDOM.createRoot(container).render(component));
        expect(document.body.textContent).toContain("Jordan");
    });
});