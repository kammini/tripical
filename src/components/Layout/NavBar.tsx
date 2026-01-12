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
        <header className='bg-white shadow-md sticky top-0'>
            <nav className="container mx-auto p-4 flex items-center justify-between h-25">
                <div>
                    <Link to="/">
                        <img src={logo} alt="Tripical Logo" className="w-28 h-auto"/>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className='hidden md:flex items-center space-x-8'>
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
                    <button className='w-full cursor-pointer bg-yellow-500 px-3 py-2 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-opacity-75 transition-colors duration-300'>Book Now</button>
                </div>

                {/* Mobile Menu Hamburger */}
                <div className="md:hidden flex items-center">
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