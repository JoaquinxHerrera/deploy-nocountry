import { useState } from "react"
import { deleteAppointment } from "../api/deleteAppointment";

const useDeleteAppointment = () => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(null);

    const handleDeleteAppointment = async (id, motivo) =>{
        setLoading(true);
        setError(null);
        setSuccess(null);
        try{
            const result = await deleteAppointment(id, motivo);
            setSuccess('Consulta eliminada con éxito');
            return result;
        } catch(err){
            setError('Error al eliminar la consulta');
            console.error('Error detallado:', err.response ? err.response.data : err.message);
        } finally{
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