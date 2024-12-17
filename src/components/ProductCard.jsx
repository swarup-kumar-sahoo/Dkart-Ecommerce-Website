import React from "react";
import { Link } from "react-router-dom";
import "./ProductCard.css";

const ProductCard = ({ product }) => {
  const handleAddToCart = () => {
    alert(`Added "${product.title}" to the cart!`);
  };

  const handleBuyNow = () => {
    alert(`Proceeding to buy "${product.title}"`);
  };

  return (
    <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h3>{product.title}</h3>
      <p>Category: {product.category}</p>
      <p>${product.price}</p>
      <div className="product-actions">
        <button onClick={handleAddToCart} className="btn add-to-cart">
          Add to Cart
        </button>
        <button onClick={handleBuyNow} className="btn buy-now">
          Buy Now
        </button>
      </div>
      <Link to={`/product/${product.id}`} className="btn details-btn">
        View Details
      </Link>
    </div>
  );
};

export default ProductCard;
