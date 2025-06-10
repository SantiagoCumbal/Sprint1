import axios from "axios";
import { toast } from "react-toastify";

function useFetch() {
    const fetchDataBackend = async (url, form = null, method = "Post") =>{
        try {
            let respuesta
            if(method==="POST"){
                respuesta = await axios.post(url, form)
                
            }else if(method === "GET"){
                respuesta = await axios.get(url)
            }
            toast.success(respuesta?.data?.msg)
            return respuesta?.data
        } catch (error) {
            toast.error(error.response?.data?.msg)
            const error_mensaje = error.response?.data?.msg || 'Error desconocido'
            throw new Error(error_mensaje)
        }
    }
    return { fetchDataBackend }
    
}

export default useFetch;
