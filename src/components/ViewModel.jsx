import React from "react";
import { ImCross } from "react-icons/im";

const ViewModel = ({ product, isOpen, setIsOpen, cartItems, setCartItems }) => {
    const addToCart = ()=> {
      setCartItems([...cartItems, product])
      setIsOpen(false)
    }
    return (
      <div className="model-popup">
        <div className="view-model">
          <div className="view-model-card">
            <div className="view-model-header">
              <ImCross onClick={()=> setIsOpen(false)} className="close-button" />
            </div>
            <div className="view-model-body">
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <h3 className="product-title">{product.title}</h3>
              <p className="product-description">{product.description}</p>
              <div className="product-info">
                <span className="product-price">₹ {product.price}</span>
                <span className="product-rating">⭐ {product.rating.rate}</span>
              </div>
              <button onClick={addToCart} className="view-button">
               Add To Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    );
}
export default ViewModel;