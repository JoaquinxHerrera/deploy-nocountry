import axios from "axios";

// const BACKEND_ENDPOINT = import.meta.env.VITE_BACKEND_URL;

export const fetchAppointments = async (idPaciente, token) => {
    try {
        const response = await axios.get(`/api/consultas/${idPaciente}`,{
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data.content;
    } catch (error) {
        if (error.response) {
            console.error('Error en la respuesta del servidor:', error.response.data);
            console.error('Código de estado:', error.response.status);
            console.error('Encabezados:', error.response.headers);
        } else if (error.request) {
            console.error('No se recibió respuesta del servidor:', error.request);
        } else {
            console.error('Error al configurar la solicitud:', error.message);
        }
        throw error;
    }
};
