import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"

export default function Footer() {
const linkClasses = "text-gray-300 hover:text-white transition-colors"

    return (
        <footer className="bg-gray-800 text-white">
            <div className='container mx-auto py-3 sm:px-6 lg:px-6 py-12 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0'>
                <div className="flex flex-col items-center space-y-4">
                    <Link to="/">
                        <img src={logo} alt="logo" className="w-28 h-auto"/>
                    </Link>
                    <p className="text-sm text-gray-400">Tripical &copy; {new Date().getFullYear()}</p>
                </div>

                <div className="flex flex-wrap justify-center gap-x-6 sm:gap-x-8">
                    <Link to="/" className={linkClasses}>
                        Home
                    </Link>
                    <Link to="/details" className={linkClasses}>
                        Details
                    </Link>
                    <Link to="/about" className={linkClasses}>
                        About Us
                    </Link>
                    <Link to="/contact" className={linkClasses}>
                        Contact Us
                    </Link>
                </div>
            </div>
        </footer>
    )
}