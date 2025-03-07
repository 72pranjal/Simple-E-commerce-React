import React, { useState } from "react";
import ViewModel from "./ViewModel";

export default function ProductCard({ product, cartItems, setCartItems }) {
  const [isOpen, setIsOpen] = useState(false);
  const openModel = () => {
    setIsOpen(true)
  };
  return (
    <>
      <div className="product-card-container">
        {product && (
          <div className="product-card">
            <img
              src={product.image}
              alt={product.title}
              className="product-image"
            />
            <h3 className="product-title">{product.title.slice(0, 20)}...</h3>

            <div className="product-info">
              <span className="product-price">₹ {product.price}</span>
              <span className="product-rating">⭐ {product.rating.rate}</span>
            </div>

            <button onClick={openModel} className="view-button">
              View More
            </button>
          </div>
        )}
      </div>

      { isOpen &&
          <ViewModel product={product} isOpen={isOpen} setIsOpen={setIsOpen} cartItems={cartItems} setCartItems={setCartItems} />
      }
    </>
  );
}
