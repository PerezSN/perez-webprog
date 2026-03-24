import { NavLink } from 'react-router-dom';
import Logo from '../assets/logog.png';

const links = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Articles', to: '/articles' },
];

const navLinkClassName = ({ isActive }) =>
  [
    'rounded-full border px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.24em] transition-all duration-300',
    isActive
      ? 'border-purple-500/50 bg-purple-500/10 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.15)]'
      : 'border-transparent text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50',
  ].join(' ');

const NavBar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        
        {/* LOGO ABOVE TEXT */}
        <NavLink to="/" className="flex flex-col items-center gap-1 group">
          <img src={Logo} alt="GameSphere Logo" className="h-10 w-auto transition-transform duration-300 group-hover:scale-110" />
          <div className="text-center">
            <p className="text-xl font-bold tracking-wide text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-600">
              GameSphere
            </p>
          </div>
        </NavLink>

        {/* NAV LINKS */}
        <nav className="hidden items-center gap-2 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={navLinkClassName}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

      </div>
    </header>
  );
};

export default NavBar;