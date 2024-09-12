import 'bootstrap/dist/css/bootstrap.min.css';
import '../Appointment/AppointmentStyles.css'

const Appointment = ({title, doctor, date, time}) => {
  return (
    <div className="d-flex justify-content-between align-items-center date px-3 rounded-4 mb-2">
      <div>
        <p className='headline-2 m-0 p-0'>{title}</p>
        <p className='homeDr m-0 '>{doctor}</p>
      </div>
      <div className='homeCircleDate d-flex flex-column justify-content-center'>
        <p className='headline-2 m-0'>{date}</p>
        <p className='homeTime mb-2'>{time}</p>
      </div>
    </div>
  );
};

export default Appointment;
