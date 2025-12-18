import {Link} from "react-router-dom";
import './Navbar.css';

function Navbar(){
    return(
        <nav className="navbar">
            <Link to="/" className="nav-link">Home</Link>
            <Link to="/products" className="nav-link">Products</Link>
            <Link to="/cart" className="nav-link">Cart</Link>
            <Link to="/contact" className="nav-link">Contact Us</Link>
        </nav>
    )
}
export default Navbar
