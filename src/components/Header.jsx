import { useState } from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-green-200 border-b border-black">
      <div className="container mx-auto flex justify-between items-center py-5 px-4">
        {/* Logo */}
        <NavLink to="/">
          <img src="/images/sweet-safari-logo.png" alt="Sweet Safari Logo" width="64" />
        </NavLink>

        {/* Hamburger and Close Icons */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-green-800 focus:outline-none z-20 relative"
        >
          {menuOpen ? (
            <i className="bi bi-x-lg text-2xl"></i> // X icon
          ) : (
            <i className="bi bi-list text-2xl"></i> // Hamburger menu icon
          )}
        </button>

        {/* Navigation Menu */}
        <nav
          className={`fixed top-0 left-0 w-full h-full bg-green-400 transition-transform duration-300 ${
            menuOpen ? 'translate-y-0' : '-translate-y-full'
          } lg:static lg:translate-y-0 lg:bg-transparent z-10`}
        >
          <ul className="flex flex-col lg:flex-row lg:space-x-8 font-bold text-green-900 p-8 lg:p-0">
            <li>
              <NavLink
                to="/"
                className="block px-4 py-2 lg:py-0 hover:text-green-500"
                onClick={() => setMenuOpen(false)}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/menu"
                className="block px-4 py-2 lg:py-0 hover:text-green-500"
                onClick={() => setMenuOpen(false)}
              >
                Menu
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/staff"
                className="block px-4 py-2 lg:py-0 hover:text-green-500"
                onClick={() => setMenuOpen(false)}
              >
                Staff
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                className="block px-4 py-2 lg:py-0 hover:text-green-500"
                onClick={() => setMenuOpen(false)}
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
