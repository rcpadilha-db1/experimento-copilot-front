import { CompanyDetails, DetalhesResponse } from "../interface/detalhes.interface";

const API_TOKEN = 'IDFHb6GAq2FhvsB3VQ5aIGGWOkFWHcqD3ptW1mWE';
const API_TOKEN_2 = 'sFmCVrJ2Uj7p6Yh0L41YT3oE7TLHCT2cfUDhNcby'
const BASE_URL = 'https://api.stockdata.org/v1/data/quote';

export const detalhes = async (symbol: string): Promise<CompanyDetails[]> => {
    const url = `${BASE_URL}?symbols=${symbol}&api_token=${API_TOKEN_2}`;
    
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }

    const data: DetalhesResponse = await response.json();
    return data.data;
};