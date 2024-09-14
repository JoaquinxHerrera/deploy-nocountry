import { useAuth0 } from '@auth0/auth0-react';
import { useState, useEffect } from 'react';
import { fetchAppointments } from '../api/fetchAppointment';
import { getMedicos } from '../api/getMedicos';

// eslint-disable-next-line no-unused-vars
const useFetchAppointments = (idPaciente) => {
    // const {getAccessTokenSilently} = useAuth0();
    const [appointments, setAppointments] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try{
                // const token = await getAccessTokenSilently({
                //     authorizationParams: {
                //         audience: import.meta.env.VITE_AUTH0_AUDIENCE,
                //     },
                // });
                // console.log('token obtenido:', token)
                const Appointmentsdata = await fetchAppointments(1);
                const medicosData = await getMedicos();

                const AppointmentsAndMedicos = Appointmentsdata.map(appointment => {
                    const doctor = medicosData.find(medico => medico.id === appointment.idMedico);
                    return {
                        ...appointment,
                        doctorName: doctor ? doctor.nombre : 'Desconocido',
                        especialidad: doctor ? doctor.especialidad : 'Desconocida',
                    };
                })
                setAppointments(AppointmentsAndMedicos);
                console.log(AppointmentsAndMedicos)
            } catch(error){
                console.log(error)
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };

       fetchData();
    }, []);

    return { appointments, loading, error}

};

export default useFetchAppointments;
