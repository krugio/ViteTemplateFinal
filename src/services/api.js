import axios from "axios";

const api = axios.create({
    baseURL: 'http://www.baurudoporto.kinghost.net:21075/api/',
  });
  

  async function buscaCategorias() {
    try {
      const response = await api.get('categorias');   
      return response;
    } catch (error) {
      const { response } = error;
      const { data } = response;
     
    }
  }

  export { buscaCategorias};
export default api;