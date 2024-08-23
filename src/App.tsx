import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Inicio } from './pages/Inicio';
import { Acoes } from './pages/Acoes';
import { Detalhes } from './pages/Detalhes';
import { Layout } from './pages/Layout';

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index={true} element={<Inicio />} />
          <Route path="/acoes" element={<Acoes />} />
          <Route path="/acoes/detalhes/:id" element={<Detalhes />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
