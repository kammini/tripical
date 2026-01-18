import { useState } from 'react'
import  { Link, NavLink } from 'react-router-dom'
import logo from '../../assets/logo.png'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function NavBar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinkClasses = ({ isActive } : { isActive: boolean}) =>
        `text-gray-600 transition-colors duration-300 hover:text-yellow-700 
        ${isActive ? 'font-bold text-yellow-700' 
            : 'font-medium'}`;

    return(
        <header className='bg-white shadow-md sticky top-0 z-50'>
            <nav className="container mx-auto p-4 sm:px-6 flex items-center justify-between h-25">
                <div className='flex-shrink-0'>
                    <Link to="/">
                        <img src={logo} alt="Tripical Logo" className="w-28 h-auto"/>
                    </Link>
                </div>

                {/* Desktop Menu */}
                <div className='hidden md:flex items-center space-x-8'>
                    <NavLink to="/" className={navLinkClasses}>
                        Home
                    </NavLink>
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
                    <Link to="/contact" className='cursor-pointer bg-yellow-500 px-6 py-2 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 focus:outline-none focus:ring-opacity-75 transition-colors duration-300'>Book Now</Link>
                </div>

                {/* Mobile Menu Hamburger */}
                <div className="md:hidden flex items-center">
                    <button onClick={() => setIsOpen(!isOpen)} aria-label="Toggle menu">
                        {isOpen ?
                            <XMarkIcon className="h-8 w-8 text-gray-700 cursor-pointer"/>
                            :
                            <Bars3Icon className="h-8 w-8 text-gray-700 cursor-pointer"/>
                        }
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            {isOpen && (
                <div className='md:hidden bg-white shadow-lg'>
                    <div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                        <NavLink to='/' className={navLinkClasses} onClick={() => setIsOpen(false)}>
                            <span className='block px-3 py-2 rounded-md text-base'>Home</span>
                        </NavLink>
                        <NavLink to='/details' className={navLinkClasses} onClick={() => setIsOpen(false)}>
                            <span className='block px-3 py-2 rounded-md text-base'>Details</span>
                        </NavLink>
                        <NavLink to='/about' className={navLinkClasses} onClick={() => setIsOpen(false)}>
                            <span className='block px-3 py-2 rounded-md text-base'>About Us</span>
                        </NavLink>
                        <NavLink to='/contact' className={navLinkClasses} onClick={() => setIsOpen(false)}>
                            <span className='block px-3 py-2 rounded-md text-base'>Contact Us</span>
                        </NavLink>
                        <div>
                            <Link to="/contact" className='block text-center w-full bg-yellow-500 px-6 py-2 text-white font-semibold rounded-lg shddow-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75 transition-colors duration-300 cursor-pointer'>Book Now</Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}