import { BrowserRouter,Routes,Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home";
import Product from "./Product";
import Card from "./Card";
import Contact from "./Contact";

function App(){
  return(
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
          <Route path="/Products" element={<Product/>}/>
            <Route path="/cart" element={<Card/>}/>
              <Route path="/contact" element={<Contact/>}/>
      </Routes>
  </BrowserRouter>
  )
}
export default App;