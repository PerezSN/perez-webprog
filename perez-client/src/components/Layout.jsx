import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';

const Layout = () => {
  return (
    <div className='min-h-screen bg-zinc-950 text-zinc-50'>
      <NavBar />
      <main className='pb-16 pt-20'>
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;