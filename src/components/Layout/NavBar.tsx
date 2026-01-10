import { useState } from 'react'
import  { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinkClasses = ({ isActive } : { isActive: boolean}) =>
        `text-gray-600 transition-colors duration-300 hover:text-green-700 
        ${isActive ? 'font-bold text-green-700' 
            : 'font-medium'}`;

    return(
        <header>
            <nav className="flex">
                <div>
                    <Link to="/">
                        <img src={logo} alt="Tripical Logo" className="w-28 h-auto"/>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div>
                    <NavLink to="/details" className={navLinkClasses}>
                        Details
                    </NavLink>
                    <NavLink to="/about" className={navLinkClasses}>
                        About Us
                    </NavLink>
                    <NavLink to="/contact" className={navLinkClasses}>
                        Contact Us
                    </NavLink>
                </div>

                <div className="hidden md:block">
                    <button>Book Now</button>
                </div>

                {/* Mobile Menu Hamburger */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                        {isOpen ?
                            <XMarkIcon className="h-8 w-8 text-gray-700"/>
                            :
                            <Bars3Icon className="h-8 w-8 text-gray-700"/>
                        }
                    </button>
                </div>
            </nav>
        </header>
    )
}