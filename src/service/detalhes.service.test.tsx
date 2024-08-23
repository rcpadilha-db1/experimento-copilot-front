import "@testing-library/jest-dom/extend-expect";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import { MemoryRouter } from 'react-router-dom';
import { DetalhesTicker } from "../components/DetalhesTicket";
import { detalhes } from "./detalhes.service";

jest.mock("axios");
const mockAxios = axios as jest.Mocked<typeof axios>;

const mockDetalhes = detalhes as jest.MockedFunction<typeof detalhes>;

describe("DetalhesTicker", () => {
  it("Deve retornar os dados corretos ao chamar a função detalhes", async () => {
    const mockData=
      {
        ticker: "AAPL",
        name: "Apple Inc.",
        day_change: 0.6,
        price: 145.86,
        day_high: 146.7,
        day_low: 144.6,
        previous_close_price: 145.26,
        "52_week_high": 150.0,
        "52_week_low": 107.32,
      }
    
    const mockResponse = {
      meta: { requested: 1, returned: 1 },
      data: [mockData],
    };
    mockAxios.get.mockResolvedValue({ data: mockResponse });
    render(
      <MemoryRouter>
      <DetalhesTicker
        ticker={mockData.ticker}
        name={mockData.name}
        day_change={mockData.day_change}
        price={mockData.price}
        day_high={mockData.day_high}
        day_low={mockData.day_low}
        previous_close_price={mockData.previous_close_price}
        {...{ '52_week_high': mockData['52_week_high'], '52_week_low': mockData['52_week_low'] }}
      />
      </MemoryRouter>
    );
    expect(screen.getByText("AAPL")).toBeInTheDocument();
    expect(screen.getByText("- Apple Inc.")).toBeInTheDocument();
    expect(screen.getByText("+0.6%")).toBeInTheDocument();
    expect(screen.getByText("$145.86")).toBeInTheDocument();
    expect(screen.getByText("$146.7")).toBeInTheDocument();
    expect(screen.getByText("$144.6")).toBeInTheDocument();
    expect(screen.getByText("$145.26")).toBeInTheDocument();
    expect(screen.getByText("$150")).toBeInTheDocument();
    expect(screen.getByText("$107.32")).toBeInTheDocument();
  });
});
