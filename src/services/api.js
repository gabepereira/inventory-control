import axios from 'axios';

const graphql = axios.create({
    baseURL: 'https://shiba.azurewebsites.net',
});

const api = data => graphql.post('/', { query: data });

export default api;