import axios from "axios";
import { ApiResponse, CompanyData } from "../interface/obter-dados.inteface";


const API_TOKEN = 'IDFHb6GAq2FhvsB3VQ5aIGGWOkFWHcqD3ptW1mWE';
const API_TOKEN_2 = 'sFmCVrJ2Uj7p6Yh0L41YT3oE7TLHCT2cfUDhNcby'
const BASE_URL = 'https://api.stockdata.org/v1/entity/search';

export const obterDados = async (search: string): Promise<CompanyData[]> => {
    const url = `${BASE_URL}?search=${search}&api_token=${API_TOKEN_2}`;
    
    try {
        const response = await axios.get<ApiResponse>(url);
        return response.data.data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw new Error('Failed to fetch data');
    }
};
