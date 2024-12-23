import React from "react";

export const AppointmentsDayView = () => (
  <div id="appointmentsDayView">
    <ol></ol>
  </div>
);

export const Appointment = ({ customer }) => <div>{customer.firstName}</div>;
