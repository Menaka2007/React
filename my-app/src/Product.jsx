import React from 'react';
import { useCart } from './CartContext';
import './Product.css';

function Product() {
  const { addToCart } = useCart();
  const products = [
    { id: 1, name: "Designer Wear", price: "$200", image: "https://i.pinimg.com/736x/c9/af/3b/c9af3b6baacda1ac0f9601b6f82fbaf7.jpg" },
    { id: 2, name: "Vintage Style", price: "$85", image: "https://heartmycloset.me/cdn/shop/files/IMG_9543.jpg?v=1695927407" },
    { id: 12, name: "Modern Chic", price: "$90", image: "https://img.freepik.com/free-photo/young-business-woman-casual-outfit-by-business-center_1303-20481.jpg?semt=ais_hybrid&w=740&q=80" },
    { id: 13, name: "Boho Dress", price: "$78", image: "https://assets.myntassets.com/dpr_1.5,q_30,w_400,c_limit,fl_progressive/assets/images/2024/AUGUST/13/xbT93mtg_238ec6c07791420f9ca7d678181a1ee0.jpg" },
    { id: 14, name: "Cocktail Dress", price: "$135", image: "https://cdn-appdata.seasonsindia.com/uploads/feature_images/331-86201.jpg" },
    { id: 15, name: "Street Style", price: "$68", image: "https://img.freepik.com/free-photo/neighborhood-lifestyle-friends_23-2149746740.jpg?semt=ais_hybrid&w=740&q=80" },
    { id: 16, name: "Maxi Dress", price: "$92", image: "https://www.iwearmystyle.in/cdn/shop/files/mm2-scaled.jpg?v=1747491242" },
    { id: 17, name: "Business Casual", price: "$105", image: "https://images.cdn.inspogroup.net/YvUpYJAOq05EK_3-XpBq90TmGDoVPH4C2ng6YtShQGw/bg:ffffff/ex:1/g:ce/h:667/w:500/aHR0c/DovL2/1hZ2F6aW5lZW51cy53cGVuZ2luZS5jb20vd3AtY29udGVudC91cGxvYWRzLzIwMjQvMDkvUlpfR2V0dHlJbWFnZXMtMjE1ODI3NTY3N19DaHJpc3RpYW4tVmllcmlnLmpwZw" },
    { id: 18, name: "Floral Print", price: "$73", image: "https://www.vastranand.in/cdn/shop/files/4_376b7403-b410-4b6a-8d22-a87393b41c9f.jpg?v=1743074768" },
    { id: 19, name: "Little Black Dress", price: "$125", image: "https://www.zapakasa.com/cdn/shop/products/ZPKYYZL021_1_first.jpg?v=1690367097" },
    { id: 20, name: "Midi Dress", price: "$88", image: "https://sassafras.in/cdn/shop/files/SFDRSS12276-1_29bf9bc8-a1ca-4969-9898-e4690d774173_1800x.jpg?v=1757493600" },
    { id: 21, name: "Wrap Dress", price: "$95", image: "https://neon-star.com/cdn/shop/files/dress-the-stretch-wrap-dress-tropical-rainbow-the-stretch-wrap-dress-tropical-rainbow-dubai-outfit-dress-curve-modest-brunch-1197150441_600x.progressive.jpg?v=1760171206" },
    { id: 22, name: "A-Line Dress", price: "$82", image: "https://assets.myntassets.com/h_1440,q_75,w_1080/v1/assets/images/29347488/2024/5/4/4160fae6-2d8f-4673-8214-7a951b3802861714761320081AmbraeeLinenA-LineMidiDress1.jpg" },
    { id: 23, name: "Shift Dress", price: "$76", image: "https://xcdn.next.co.uk/Common/Items/Default/Default/ItemImages/3_4Ratio/SearchINT/Lge/AK5352.jpg?im=Resize,width=450" }
  ];

  return (
    <div className="products">
      <h1>Fashion Collection</h1>
      <div className="featured-products">
        <div className="product-row">
          {products.slice(0, 3).map(product => (
            <div key={product.id} className="product-item featured">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">{product.price}</p>
                <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="product-grid">
        {products.slice(3).map(product => (
          <div key={product.id} className="product-item">
            <img src={product.image} alt={product.name} className="product-image" />
            <div className="product-info">
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
              <button className="add-to-cart-btn" onClick={() => addToCart(product)}>Add to Cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
