import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';

function Home() {
  const navigate = useNavigate();

  const handleShopCollection = () => {
    navigate('/Products');
  };
    return (
        <div className="home">
            <section className="hero">
                <div className="hero-content">
                    <h1>Fashion Paradise</h1>
                    <p>Discover the latest trends in women's & men's fashion</p>
                    <button className="cta-btn" onClick={handleShopCollection}>Shop Collection</button>
                </div>
            </section>
            
            <section className="categories">
                <div className="category">
                    <h3>Women's Dresses</h3>
                    <p>Elegant & Stylish</p>
                </div>
                <div className="category">
                    <h3>Men's Fashion</h3>
                    <p>Classic & Modern</p>
                </div>
                <div className="category">
                    <h3>Accessories</h3>
                    <p>Complete Your Look</p>
                </div>
            </section>
        </div>
    );
}
export default Home;