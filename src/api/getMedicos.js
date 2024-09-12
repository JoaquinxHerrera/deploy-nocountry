import axios from "axios";

const BACKEND_ENDPOINT = import.meta.env.VITE_BACKEND_URL;

export const getMedicos = async () => {
    try {
        let allMedicos = [];
        let page = 0;
        let totalPages = 1; 
        while (page < totalPages) {
            const response = await axios.get(`${BACKEND_ENDPOINT}/medicos/medicos?page=${page}`);
            const { content, totalPages: pages } = response.data;
       
            if (Array.isArray(content)) {
                allMedicos = [...allMedicos, ...content];
            } else {
                console.error("Error: la respuesta no contiene un array de médicos.");
            }
            totalPages = pages; 
            page += 1; 
        }

        return allMedicos;
    } catch (error) {
        console.error('Error al obtener los médicos:', error);
        throw error;
    }
};
