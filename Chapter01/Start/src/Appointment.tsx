import React from "react";

export const AppointmentsDayView = ({ appointments }) => (
  <div id="appointmentsDayView">
    <ol>
      {appointments.map(() => (
        <li></li>
      ))}
    </ol>
  </div>
);

export const Appointment = ({ customer }) => <div>{customer.firstName}</div>;
