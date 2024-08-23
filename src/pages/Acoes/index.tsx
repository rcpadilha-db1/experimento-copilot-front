import { useState } from 'react';
import { Button, Input } from 'rsuite';
import AcoesTable from './components/Tabela';
import { useApi } from '../../hooks/useApi';
import './index.css';
import { IAcao } from '../../interfaces/acoes';

export const Acoes = () => {
  const [search, setSearch] = useState('');
  const { data:acoes, loading, error, refetch } = useApi<IAcao[]>(
    `entity/search?search=${search}`,
    'get'
  );

  const handleSearchChange = (value: string) => {
    setSearch(value);
  };

  return (
    <div className="acoes-container">
      <div className="acoes-search">
        <Input
          placeholder="Pesquise por nome ou símbolo"
          className="acoes-input"
          onChange={handleSearchChange}
        />
        <Button
          className="acoes-button"
          onClick={refetch}
          disabled={!search.length}
        >
          Pesquisar
        </Button>
      </div>
      {error && <div>Erro ao carregar dados</div>}
      <AcoesTable data={acoes ?? []} loading={loading} />
    </div>
  );
};