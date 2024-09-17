import { Button, Container, Row } from 'react-bootstrap';
import {  FaArchive, FaArrowUp, FaHeart } from 'react-icons/fa';
import BottomNavbar from '../shared/BottomNavbar/BottomNavbar';
import './ConfirmacionStyles.css';  
import { useLocation, useNavigate } from 'react-router-dom';
import { deleteAppointment } from '../api/deleteAppointment';

const Confirmacion = () => {
  const location = useLocation();
  const history = useHistory();
  const { cita } = location.state || {};

  const handleCancelAppointment = async () => {
    if (cita) {
      try {
        const motivo = prompt('Por favor, indique el motivo de la cancelación:');
        if (motivo) {
          await deleteAppointment(cita.idConsulta, motivo);
          alert('Cita cancelada exitosamente');
          navigate('/'); 
        }
      } catch (error) {
        console.error('Error al cancelar la cita:', error);
        alert('Hubo un error al cancelar la cita. Por favor, inténtelo de nuevo.');
      }
    }
  }

  return (
    <div className='full-screen-container d-flex flex-column'>
      <Container fluid className=" d-flex justify-content-center align-items-center vh-100">
        <div className="d-flex flex-column text-center align-items-center p-4">
          <FaHeart size={50} className="confirmacion-icon" />
          <h1 className='successText'>Cita agendada con éxito</h1>
          <Row className='mb-2 mt-3 '>
            <b><u>Resumen de la cita</u> </b> 
            <Row>
              <span><b>Especialidad:</b> {cita?.especialidad}</span>
              <span><b>Fecha:</b> {new Date(cita?.fecha).toLocaleDateString()}</span>
              <span><b>Hora:</b> {new Date(cita?.fecha).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
              <span><b>Doctor:</b> {cita?.idMedico}</span>
            </Row>
          </Row>
          <Row className="confirmacion-row">
            {/* <Button variant="light" className="confirmacion-button">
              <FaBell /> Confirmación Correo Electrónico
            </Button>
            <Button variant="light" className="confirmacion-button">
              <FaCalendarAlt /> Registrar en calendario
            </Button> */}
            <Button variant="light" className="confirmacion-button" style={{ marginBottom: 0 }}>
              <FaArchive /> Cancelar Cita
            </Button>
          </Row>
          <p>Gracias por preferirnos</p>
          <FaArrowUp size={30} className="confirmacion-arrow" />
        </div>
      </Container>
      <BottomNavbar/>
    </div>
  );
};

export default Confirmacion;
