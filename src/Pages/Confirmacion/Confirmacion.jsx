import { Button, Container, Row } from 'react-bootstrap';
import { FaArchive, FaArrowUp, FaHeart } from 'react-icons/fa';
import BottomNavbar from '../shared/BottomNavbar/BottomNavbar';
import './ConfirmacionStyles.css';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../shared/header/Header';
import useDeleteAppointment from '../../hooks/useDeleteAppointment';

const Confirmacion = () => {
  const location = useLocation();
  const navigate = useNavigate(); 
  const { cita } = location.state || {};
  const { handleDeleteAppointment, loading, error, success } = useDeleteAppointment();

  const handleDeleteclick = async () => {
    if (cita && cita.id) {
      try {
        await handleDeleteAppointment(cita);
        navigate('/home'); 
      } catch (err) {
        console.error('Error al eliminar la cita', err);
      }
    }
  };

  return (
    <div className="full-screen-container d-flex flex-column">
      <Header />
      <Container fluid className="d-flex justify-content-center align-items-center vh-100">
        <div className="d-flex flex-column text-center align-items-center p-4">
          <FaHeart size={50} className="confirmacion-icon" />
          <h1 className="successText">Cita agendada con éxito</h1>
          <Row className="mb-2 mt-3 justify-content-center">
            <b><u>Resumen de la cita</u></b>
            <Row>
              <span><b>Especialidad:</b> {cita?.especialidad}</span>
              <span><b>Fecha:</b> {new Date(cita?.fecha).toLocaleDateString()}</span>
              <span><b>Hora:</b> {new Date(cita?.fecha).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
              <span><b>Doctor:</b> Dr. {cita?.nombreMedico}</span>
            </Row>
          </Row>
          <Row className="confirmacion-row">
            <Button
              variant="light"
              className="confirmacion-button"
              style={{ marginBottom: 0 }}
              onClick={handleDeleteclick}
              disabled={loading}
            >
              <FaArchive /> Cancelar Cita
            </Button>
          </Row>
          {error && <div className="text-danger">{error}</div>}
          {success && <div className="text-success">{success}</div>}
          <p>Gracias por preferirnos</p>
          <FaArrowUp size={30} className="confirmacion-arrow" />
        </div>
      </Container>
      <BottomNavbar />
    </div>
  );
};

export default Confirmacion;
