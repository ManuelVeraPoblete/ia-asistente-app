import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.yourai.com/v1', // URL de la API de IA
  headers: {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${process.env.REACT_APP_AI_API_KEY}`,
  },
});

export default api;