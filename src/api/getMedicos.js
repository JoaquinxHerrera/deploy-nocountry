import axios from "axios";

export const getMedicos = async () => {
    try {
        let allMedicos = [];
        let page = 0;
        let totalPages = 1;
        
        while (page < totalPages) {
            const response = await axios.get(`/api/medicos/medicos?page=${page}`);

            // Imprimir toda la respuesta para depurar
            console.log("Respuesta del servidor:", response);

            if (response.data && response.data.content && response.data.totalPages !== undefined) {
                const { content, totalPages: pages } = response.data;

                // Verificar que content sea un array
                if (Array.isArray(content)) {
                    allMedicos = [...allMedicos, ...content];
                } else {
                    console.error("Error: la respuesta no contiene un array de médicos. Verifica la estructura del servidor.");
                    break;
                }
                totalPages = pages;
                page += 1;
            } else {
                console.error("Error: La respuesta del servidor no tiene el formato esperado. Verifica que 'content' y 'totalPages' existan.");
                break;
            }
        }

        return allMedicos;
    } catch (error) {
        console.error('Error al obtener los médicos:', error);
        throw error;
    }
};
