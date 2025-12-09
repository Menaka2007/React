import {Link} from "react-router-dom";
function Navbar(){
    return(
        <nav>
            <Link to="/">Home</Link>
             <Link to="/products">Products</Link>
              <Link to="/cart">Card</Link>
               <Link to="/contact">Contact Us</Link>
        </nav>
    )
}
export default Navbar
