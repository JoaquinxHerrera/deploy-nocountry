import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { NavLink, useNavigate } from 'react-router-dom';
import BottomNavbar from '../shared/BottomNavbar/BottomNavbar';
import useCreateAppointment from '../../hooks/useCreateAppointment';
import Swal from 'sweetalert2';
import { fetchAppointments } from '../../api/fetchAppointment';
import Header from '../shared/header/Header';
import './CitaSimpleStyles.css'

const CitaSimple = () => {
  const { appointmentState, medicos, especialidades, errors, handleChange, handleSubmit } = useCreateAppointment();
  const [selectedDate, setSelectedDate] = useState(null);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [selectedTime, setSelectedTime] = useState('');
  const [excludedDates, setExcludedDates] = useState([]);
  const [filteredMedicos, setFilteredMedicos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchAppointmentDates = async () => {
      try {
        const citas = await fetchAppointments(1); 
        const dates = citas.map((cita) => new Date(cita.fecha));
        setExcludedDates(dates);
      } catch (error) {
        console.error('Error al obtener las citas agendadas:', error);
      }
    };

    fetchAppointmentDates();
  }, []);

  useEffect(() => {
    if (selectedDate) {
      const times = ['09:00', '10:00', '11:00', '14:00', '15:00'];
      setAvailableTimes(times);
    }
  }, [selectedDate]);

  useEffect(()=>{
    if(appointmentState.especialidad){
      const medicosFiltrados = medicos.filter(medico => medico.especialidad === appointmentState.especialidad);
      setFilteredMedicos(medicosFiltrados);
    }else{
      setFilteredMedicos([]);
    }
  }, [appointmentState.especialidad, medicos])

  const handleSubmitClick = () => {
    if (!appointmentState.especialidad) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, selecciona una especialidad.",
        timer: 3000,
      });
      return;
    }

    if (!appointmentState.idMedico) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, selecciona un doctor.",
        timer: 3000,
      });
      return;
    }
    if (!selectedDate || !selectedTime) {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Por favor, selecciona una fecha y hora válidas.",
        timer: 3000,
      });
      return;
    } 

    const selectedMedico = medicos.find(medico => medico.id === parseInt(appointmentState.idMedico));

    const cita = {
      idPaciente: 1,
      idMedico: parseInt(appointmentState.idMedico),
      nombreMedico: selectedMedico.nombre || 'General',
      fecha: new Date(`${selectedDate.toLocaleDateString()} ${selectedTime}`).toISOString(),
      especialidad: appointmentState.especialidad,
    };

    handleSubmit(cita);
    console.log("Datos de la cita:", cita);
  };

  return (
    <div className="vh-100 justify-content-between d-flex flex-column ">
      <Header/>
      <Container className="d-flex justify-content-center">
        <Row className="w-100 ">
          <Col xs={12} md={8} lg={6} className="p-4">
            <h2 className="text-center mb-4 detalles">Detalles de Cita</h2>
            <Form className='mb-5' onSubmit={(e) => e.preventDefault()}>
              <Form.Group className='mb-2' controlId="formSpecialty">
                <Form.Label>Especialidad</Form.Label>
                <Form.Control as="select" name="especialidad" value={appointmentState.especialidad} onChange={handleChange}>
                  <option>Seleccionar Especialidad</option>
                  {especialidades.map((especialidad, index) => (
                    <option key={index} value={especialidad}>{especialidad}</option>
                  ))}
                </Form.Control>
                {errors.especialidad && <div className="text-danger">{errors.especialidad}</div>}
              </Form.Group>

              <Form.Group className='mb-2' controlId="formDoctor">
                <Form.Label>Doctor</Form.Label>
                <Form.Control as="select" name="idMedico" value={appointmentState.idMedico} onChange={handleChange}>
                  <option>Seleccionar Doctor</option>
                  {filteredMedicos.map((medico) => (
                    <option key={medico.id} value={medico.id}>{medico.nombre}</option>
                  ))}
                </Form.Control>
                {errors.idMedico && <div className="text-danger">{errors.idMedico}</div>}
              </Form.Group>

              <Form.Group controlId="formDate" className='mb-2'>
                <Form.Label>Fecha</Form.Label> <br />
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  dateFormat="dd/MM/yyyy"
                  className="form-control datePicker"
                  excludeDates={excludedDates}
                  filterDate={(date) => date.getDay() !==0}
                  minDate={new Date(new Date().setDate(new Date().getDate() + 1)) }
                />
                {errors.fecha && <div className="text-danger">{errors.fecha}</div>}
              </Form.Group>

              <Form.Group className='mb-2' controlId="formTime">
                <Form.Label>Hora</Form.Label>
                <Form.Control as="select" value={selectedTime} onChange={(e) => setSelectedTime(e.target.value)}>
                  <option>Seleccionar Hora</option>
                  {availableTimes.map((time, index) => (
                    <option key={index} value={time}>{time}</option>
                  ))}
                </Form.Control>
              </Form.Group>

              <div className="d-flex justify-content-between mt-4">
                <Button variant="primary" className="btn-cancel">
                  <NavLink className='text-white' to='/home'>Cancelación</NavLink>
                </Button>
                <Button variant="primary" className="btn-confirm" onClick={handleSubmitClick}>
                  Confirmar Cita
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
      <BottomNavbar />
    </div>
  );
};

export default CitaSimple;