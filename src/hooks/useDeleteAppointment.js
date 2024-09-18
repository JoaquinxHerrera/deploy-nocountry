import { useState } from "react";
import { deleteAppointment } from "../api/deleteAppointment"; // Asegúrate de que esta función esté bien implementada

const useDeleteAppointment = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleDeleteAppointment = async (id, motivo) => {
        setLoading(true);
        setError(null);
        setSuccess(null);
        try {
            const result = await deleteAppointment(id, motivo); // Asegúrate de que esta función sea correcta
            setSuccess('Consulta eliminada con éxito');
            return result;
        } catch (err) {
            // Manejo del error
            if (err.response) {
                setError(err.response.data.message); 
                console.error('Error detallado:', err.response.data);
            } else {
                setError('Error al eliminar la consulta');
                console.error('Error detallado:', err.message);
            }
        } finally {
            setLoading(false);
        }
    };

    return {
        handleDeleteAppointment,
        loading,
        error,
        success,
    };
};

export default useDeleteAppointment;
