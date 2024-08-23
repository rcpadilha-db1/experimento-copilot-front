import { Table, Button } from 'rsuite';
import { Link } from 'react-router-dom';
import { IAcao } from '../../../../interfaces/acoes';

const { Column, HeaderCell, Cell } = Table;

interface AcoesTableProps {
  data: IAcao[];
  loading: boolean;
}

const AcoesTable: React.FC<AcoesTableProps> = ({ data, loading }) => {
  return (
    <Table height={400} data={data} loading={loading}>
      <Column flexGrow={0.4} fixed="right">
        <HeaderCell>Simbolo</HeaderCell>
        <Cell style={{ padding: '6px' }}>
          {(rowData) => (
            <Button
              as={Link}
              appearance="link"
              to={`detalhes/${rowData.symbol}`}
            >
              {rowData.symbol}
            </Button>
          )}
        </Cell>
      </Column>
      <Column flexGrow={1}>
        <HeaderCell>Nome</HeaderCell>
        <Cell dataKey="name" />
      </Column>
      <Column width={150}>
        <HeaderCell>Tipo</HeaderCell>
        <Cell dataKey="type" />
      </Column>
    </Table>
  );
};

export default AcoesTable;
