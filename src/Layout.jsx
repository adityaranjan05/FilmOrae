import { Outlet } from 'react-router';
import Navbar from './Components/Navbar';
import ScrollToTop from './Components/ScrollToTop';

function Layout() {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;