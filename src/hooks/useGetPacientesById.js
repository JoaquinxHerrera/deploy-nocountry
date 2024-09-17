import { useState, useEffect } from "react";
import { getPacientesById } from "../api/getPacientById";


const useGetPacientesById = (idPaciente) => {
  const [paciente, setPaciente] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPaciente = async () => {
      setLoading(true);
      setError(null);
      try {
        const pacienteData = await getPacientesById(idPaciente);
        setPaciente(pacienteData);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    if (idPaciente) {
      fetchPaciente();
    }
  }, [idPaciente]);

  return { paciente, loading, error };
};

export default useGetPacientesById;
