import { Link, Outlet } from 'react-router-dom';
import { Nav, Navbar } from 'rsuite';
import './index.css';

export const Layout = () => {
  return (
    <div>
      <Navbar classPrefix="navbar menu">
        <Navbar.Brand className="menu-title" as={Link} to={'/'}>
          Stock Data Explorer
        </Navbar.Brand>
        <Nav pullRight>
          <Nav.Item as={Link} to="/">
            Home
          </Nav.Item>
          <Nav.Item as={Link} to="/acoes">
            Ações
          </Nav.Item>
        </Nav>
      </Navbar>
      <div style={{ marginTop: 24 }}>
        <Outlet />
      </div>
    </div>
  );
};
