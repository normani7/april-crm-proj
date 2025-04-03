import axios from "axios";

 export const AnilibriaService = () => {
    const BASE_URL = 'https://anilibria.top/api/docs/v1'

    const getAnimeList = async () => {
        

        try{
            const response = await axios.get(`${BASE_URL}/anime/catalog/releases`) 
            console.log(response);
            
        }catch(error) {
            console.log(error);
            
        }
    }

    return {
        getAnimeList
    }
}

export default  AnilibriaService 