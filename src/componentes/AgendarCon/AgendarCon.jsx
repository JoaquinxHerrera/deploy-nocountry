import 'bootstrap/dist/css/bootstrap.min.css';
import { NavLink } from 'react-router-dom';
import BottomNavbar from '../../Pages/shared/BottomNavbar/BottomNavbar';
import Header from '../../Pages/shared/header/Header';
import './AgendarConStyles.css';
import addDate from '../../assets/icons/AddDate.png'
import useFetchAppointments from '../../hooks/useFetchAppointments';
import Appointment from '../Appointment/Appointment';
import homeImg from '../../assets/img/Illustration.png';
import HomeBtnLines from '../../assets/icons/HomeBtnLines.png'

const AgendarCon = () => {
  const {appointments, loading, error} = useFetchAppointments();

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = {day: 'numeric', month: 'short'};
    return date.toLocaleDateString('en-GB', options)
  }

  return (
    <div className="vh-100 d-flex flex-column position-relative">
      <Header/>
        <div className="p-3 ms-1 flex-grow-1 overflow-auto">
          {error ? (
            <p>Error al cargar las citas: {error}</p>
            ) : (
              <>
                {!loading && appointments.length === 0 ? (
                  <div className="text-center">
                    <img src={homeImg} alt="No tienes ninguna cita" className=''/>
                    <p className='noDatesText1 mb-0'>No Tienes Ninguna Cita</p>
                    <p className='noDatesText2'>Haga click en el botón para agregar cita</p>
                    <img src={HomeBtnLines} alt="Flecha señalando boton de agregar consulta" className='HomeBtnLines'/>
                    <NavLink to='/consulta/:pacienteId'>
                      <img src={addDate} alt="Boton para agregar consulta" className='HomeBtnPosition'/>
                    </NavLink>
                  </div> 
                ) : (
                  <>
                    <p className='header position-sticky top-0 bg-white z-index-1'>Proximas citas</p>
                    <div className='flex-grow-1 overflow-auto'>
                      {loading && <p>Cargando citas...</p>}
                      {!loading && !error && appointments.map((appointment) => (
                        <Appointment
                          key={appointment.id}
                          title={appointment.especialidad}
                          doctor={`Dr. ${appointment.doctorName}`} // Ajusta esto si `idMedico` es el nombre del doctor
                          date={formatDate(appointment.fecha)}
                          time={new Date(appointment.fecha).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        />
                      ))}
                    </div>
                    <NavLink to='/consulta/:pacienteId'>
                      <img src={addDate} alt="Add Date Button" className='fixed-bottom-right'/>
                    </NavLink>
                  </>
                )}
              </>
            )}
        </div>
      <BottomNavbar className='position-fixed bottom-0 w-100'/>
        
    </div>
  );
};

export default AgendarCon;