import { useState } from "react"; 
import { products } from "./ProductData";

function ProductDetails({ productId }) {
    const { id } = useParams();


    const product = products.find(p => p._id === id);
    const  handleAddToCart  = () => {
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingItem = existingCart.find(item => item._id === product._id);

        if (existingItem) {
            existingItem.quantity += 1;
        } else {
            existingCart.push({ ...product, quantity: 1 });
        }
        localStorage.setItem("cart", JSON.stringify(existingCart));
    };

    if(!product) {
        return <div>Product not found</div>;
    }
    return (
        <div>
            <h1>{Product.name}</h1>
            <img src={Product.image} alt={Product.name} />
            <p>{Product.description}</p>
            <p>Price: ₹{Product.price}</p>
            <button onClick={handleAddToCart}>Add to Cart</button>
            <button onClick={handleBuyNow}>Buy Now</button>
        </div>
    );
}

export default ProductDetails;