import { useState } from 'react'; // imports the useState hook to manage the menu's open/close state
import { NavLink } from 'react-router-dom'; // imports the NavLink for navigation between pages without reloading

function Header() {
    const [menuOpen, setMenuOpen] = useState(false); // state to track if the menu is open (true) or closed (false)

    return (
        <header className="bg-green-200 border-b border-black">
            {/* container for the header's content */}
            <div className="container mx-auto flex justify-between items-center py-5 px-4">

                {/* logo section, links back to the homepage */}
                <NavLink to="/">
                    <img src="/images/sweet-safari-logo.png" alt="Sweet Safari Logo" width="64" />
                </NavLink>

                {/* button to toggle the menu on smaller screens for responsiveness */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)} // toggles the menu state between open and closed
                    className="lg:hidden text-green-800 focus:outline-none z-20 relative"
                >
                    {menuOpen ? (
                        <i className="bi bi-x-lg text-2xl"></i> // shows the X icon when the menu is open
                    ) : (
                        <i className="bi bi-list text-2xl"></i> // shows the hamburger icon when the menu is closed
                    )}
                </button>

                {/* nav menu for mobile responsiveness */}
                <nav
                    className={`fixed top-0 left-0 w-full h-full bg-green-400 transition-transform duration-300 ${menuOpen ? 'translate-y-0' : '-translate-y-full'
                        } lg:static lg:translate-y-0 lg:bg-transparent z-10`}
                >


                    {/* list of navigation links */}
                    <ul className="flex flex-col lg:flex-row lg:space-x-8 font-bold text-green-900 p-8 lg:p-0">

                        <li>
                            <NavLink
                                to="/" // route to the Home page
                                className="block px-4 py-2 lg:py-0 hover:text-green-500"
                                onClick={() => setMenuOpen(false)} // closes the menu when a link is clicked
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/menu" // route to the menu page
                                className="block px-4 py-2 lg:py-0 hover:text-green-500"
                                onClick={() => setMenuOpen(false)} // closes the menu when a link is clicked
                            >
                                Menu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/staff" // Route to the staff page
                                className="block px-4 py-2 lg:py-0 hover:text-green-500"
                                onClick={() => setMenuOpen(false)} // closes the menu when a link is clicked
                            >
                                Staff
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact" // route to the Contact page
                                className="block px-4 py-2 lg:py-0 hover:text-green-500"
                                onClick={() => setMenuOpen(false)} // closes the menu when a link is clicked
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
