// LayoutInspo.jsx
import { Outlet } from 'react-router-dom';
import Search from './Search';
import Nav from './NavInspo';
import Disclaimer from './DisclaimerInspo';

const Layout = () => (
  <div className="App" data-testid="app-wrapper">
    <Search />
    <Nav />
    <Outlet />
    <Disclaimer />
  </div>
);

export default Layout;