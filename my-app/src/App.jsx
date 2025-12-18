import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Product from "./Product";
import Cart from "./Cart";
import Contact from "./Contact";
import { CartProvider } from "./CartContext";
import "./App.css";

function App(){
  return(
    <CartProvider>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/Products" element={<Product/>}/>
          <Route path="/cart" element={<Cart/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
export default App;