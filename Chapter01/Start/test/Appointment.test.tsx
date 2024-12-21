import React, { act } from "react";
import ReactDOM from 'react-dom/client';
import { describe, expect, it } from 'vitest';
import { Appointment } from "../src/Appointment";

describe("Appointment", () => {
    it("renders the customer first name", () => {
        const component = <Appointment />;
        const container = document.createElement("div");
        document.body.appendChild(container);
        act(() => ReactDOM.createRoot(container).render(component));
        expect(document.body.textContent).toContain("Ashley");
    });
});