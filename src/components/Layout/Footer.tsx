import { Link } from "react-router-dom"
import logo from "../../assets/logo.png"

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white">
            <div>
                <Link to="/">
                    <img src={logo} alt="logo" className="w-28 h-auto"/>
                </Link>
                <p>Tripical &copy; {new Date().getFullYear()}</p>
            </div>

            <div>
                <Link to="/">
                    Home
                </Link>
                <Link to="/">
                    Details
                </Link>
                <Link to="/">
                    About Us
                </Link>
                <Link to="/">
                    Contact Us
                </Link>
            </div>
        </footer>
    )
}