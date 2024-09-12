import 'bootstrap/dist/css/bootstrap.min.css';
import './CitaAsignadaStyles.css';

// eslint-disable-next-line react/prop-types
const CitaAsignada = ({ specialty, doctor, date, time }) => {
  return (
    <div className="container mt-4">
      <div className="card">
        <div className="card-body">
          <h2 className="card-title">Información de la Cita</h2>
          <p className="card-text">Especialidad: {specialty}</p>
          <p className="card-text">Doctor: {doctor}</p>
          <p className="card-text">Fecha: {new Date(date).toLocaleDateString('es-ES')}</p>
          <p className="card-text">Hora: {time}</p>
        </div>
      </div>
    </div>
  );
};

export default CitaAsignada;
