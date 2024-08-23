import dotenv from 'dotenv';
import axios from 'axios';

dotenv.config();

const apiToken = process.env.API_TOKEN;
const baseUrl = process.env.URL;

const url = `${baseUrl}${apiToken}`;

axios.get(url)
    .then(response => response.data)
    .catch(error => console.error('Error:', error));