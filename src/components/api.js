// import axios from 'axios';



import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = "e4a8d978b5a90a96d1374af1e4a4f8da";

export const fetchTrending = async () => {
    const response = await axios.get(`/trending/all/day?api_key=${API_KEY}&language=en-US`);
    return response;
  };