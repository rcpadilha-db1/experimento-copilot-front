import { useState } from "react";
import { useNavigate } from "react-router";
import { Input } from "rsuite";
import { Botao } from "../../components/Botao";
import { Pagina } from "../../components/Pagina";
import { obterDados } from "../../service/obter-dados.service";

export const Home = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState<
    { symbol: string; name: string; type: string }[]
  >([]);
  const navigate = useNavigate();
  const handleSearch = async () => {
    const response = await obterDados(search);
    setData(response);
  };

  const handleDetails = (symbol: string) => {
    navigate(`/detalhes/${symbol}`);
  };

  return (
    <>
      <div>
        <Pagina>
          <div style={{ display: "flex", gap: 8 }}>
            <Input
              value={search}
              onChange={(value) => setSearch(value)}
              placeholder="Pesquise por nome ou símbolo"
              style={{ width: '300px', borderRadius: '6px', border: '1px solid #ccc' }}
            />
            <Botao onClick={handleSearch}>Pesquisar</Botao>
          </div>
        </Pagina>
      </div>
      {data.length > 0 && (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <table style={{ width: "40%", marginTop: "20px", textAlign: "center", border: "1px solid #ccc", borderCollapse: "collapse" }}>
          <thead>
            <tr>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Símbolo</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Nome</th>
              <th style={{ border: "1px solid #ccc", padding: "8px" }}>Tipo</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, index) => (
              <tr key={index}>
                <td 
                  onClick={() => handleDetails(item.symbol)} 
                  style={{ color: "blue", textDecoration: "underline", cursor: "pointer", border: "1px solid #ccc", padding: "8px" }}
                >
                  {item.symbol}
                </td>
                <td style={{ border: "1px solid #ccc", padding: "8px", textAlign:'left' }}>{item.name}</td>
                <td style={{ border: "1px solid #ccc", padding: "8px", textTransform: 'capitalize'}}>{item.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
    </>
  );
};
