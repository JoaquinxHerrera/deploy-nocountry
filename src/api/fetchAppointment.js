import axios from "axios";

const BACKEND_ENDPOINT = import.meta.env.VITE_BACKEND_URL;

export const fetchAppointments = async (idPaciente) => {
    try {
        const response = await axios.get(`${BACKEND_ENDPOINT}/consultas/${idPaciente}`);
        return response.data.content;
    } catch (error) {
        if (error.response) {
            // El servidor respondió con un código de estado fuera del rango 2xx
            console.error('Error en la respuesta del servidor:', error.response.data);
            console.error('Código de estado:', error.response.status);
            console.error('Encabezados:', error.response.headers);
        } else if (error.request) {
            // La solicitud fue hecha pero no se recibió respuesta
            console.error('No se recibió respuesta del servidor:', error.request);
        } else {
            // Algo pasó al configurar la solicitud que desencadenó un error
            console.error('Error al configurar la solicitud:', error.message);
        }
        throw error;
    }
};
