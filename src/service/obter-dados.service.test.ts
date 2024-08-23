import axios from "axios";
import { ApiResponse, CompanyData } from "../interface/obter-dados.inteface";
import { obterDados } from "./obter-dados.service";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("obterDados", () => {
  it("Deve retornar os dados filtrados", async () => {
    const mockData: CompanyData[] = [
      {
        symbol: "AAPL",
        name: "Apple Inc.",
        type: "Equity",
      },
    ];
    const mockResponse: ApiResponse = {
      meta: { found: 1, returned: 1, limit: 50, page: 1 },
      data: mockData,
    };
    mockedAxios.get.mockResolvedValue({ data: mockResponse });

    const result = await obterDados("aapl");
    
    expect(result).toEqual(mockData);
    expect(mockedAxios.get).toHaveBeenCalledWith(
      expect.stringContaining(
        "https://api.stockdata.org/v1/entity/search?search=aapl&api_token=sFmCVrJ2Uj7p6Yh0L41YT3oE7TLHCT2cfUDhNcby"
      )
    );
  });
});
