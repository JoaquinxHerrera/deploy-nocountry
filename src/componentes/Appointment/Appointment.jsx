import 'bootstrap/dist/css/bootstrap.min.css';
import useDeleteAppointment from '../../hooks/useDeleteAppointment';
import '../Appointment/AppointmentStyles.css'

const Appointment = ({id, title, doctor, date, time, onDeleteSuccess}) => {
  const { handleDeleteAppointment, loading, error, success } = useDeleteAppointment();

  const handleDeleteClick = async () => {
    try {
      console.log('el id de la consulta:', id);
      await handleDeleteAppointment(id, 'PACIENTE_DESISTIO');
      if (onDeleteSuccess) {
        onDeleteSuccess(); // Llamar a la función para refrescar la lista
      }
    } catch (err) {
      console.error('Error al eliminar la cita', err);
    }
  };

  return (
    <div className="d-flex justify-content-between align-items-center date px-3 rounded-4 mb-2 w-100">
      <div>
        <p className='headline-2 m-0 p-0'>{title}</p>
        <p className='homeDr m-0 '>{doctor}</p>
      </div>
      <div className='homeCircleDate d-flex flex-column justify-content-center'>
        <p className='headline-2 m-0'>{date}</p>
        <p className='homeTime mb-2'>{time}</p>
      </div>
      <button onClick={handleDeleteClick} disabled={loading}>
        x
      </button>
    </div>
  );
};

export default Appointment;
