import React from "react";

type Appointment = {
    startsAt: number;
};

export const AppointmentsDayView = ({ appointments }) => (
  <div id="appointmentsDayView">
    <ol>
      {appointments.map((appointment: Appointment) => (
        <li key={appointment.startsAt}></li>
      ))}
    </ol>
  </div>
);

export const Appointment = ({ customer }) => <div>{customer.firstName}</div>;
