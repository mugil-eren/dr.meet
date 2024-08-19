import React, { useState } from 'react';
import styled from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 25px;
  background-color: #f8f9fa;
  min-height: 80vh;
`;

const Title = styled.h1`
  margin: 30px 0;
  color: #343a40;
`;

const Form = styled.form`
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  width: 80%;
  max-width: 500px;
`;

const FormField = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  color: #495057;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #dee2e6;
  border-radius: 5px;
`;

const Button = styled.button`
  background-color: #28a745;
  color: white;
  margin-left:140px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 1em;
  cursor: pointer;
  &:hover {
    background-color: #218838;
  }
`;

const AppointmentsList = styled.ul`
  list-style: none;
  padding: 0;
`;

const Appointments = ({ initialAppointments }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const { doctor } = location.state || {};

  const [appointments, setAppointments] = useState(initialAppointments || []);
  const [form, setForm] = useState({
    name: '',
    doctor: doctor?.name || '',
    date: '',
    time: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setAppointments([...appointments, { ...form, id: appointments.length + 1 }]);
    alert('Appointment booked successfully');
    navigate('/');
  };

  return (
    <Container>
      <Title>Book Appointment</Title>
      <Form onSubmit={handleSubmit}>
        <FormField>
          <Label htmlFor="name">Name</Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
          />
        </FormField>
     
        <FormField>
          <Label htmlFor="date">Date</Label>
          <Input
            type="date"
            id="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            required
          />
        </FormField>
        <FormField>
          <Label htmlFor="time">Time</Label>
          <Input
            type="time"
            id="time"
            name="time"
            value={form.time}
            onChange={handleChange}
            required
          />
        </FormField>
        <Button type="submit">Book Appointment</Button>
      </Form>
      <AppointmentsList>
        {appointments.map((appointment) => (
          <li key={appointment.id}>
            {appointment.name} - {appointment.doctor} - {formatDate(appointment.date)} - {appointment.time}
          </li>
        ))}
      </AppointmentsList>
    </Container>
  );
};

export default Appointments;
