import { Outlet } from 'react-router-dom';
import Header from './HeaderInspo';
import Search from './SearchInspo';
import Nav from './NavInspo';
import Disclaimer from './DisclaimerInspo';

const Layout = () => (
  <div className="App" data-testid="app-wrapper">
    <Header />
    <Search />
    <Nav />
    <Outlet />
    <Disclaimer />
  </div>
);

export default Layout;
