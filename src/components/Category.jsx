import React from "react";
import productList from "../data/productList";
import ProductCard from "./ProductCard";

const Category = ({ productCategory, cartItems, setCartItems }) => {
  const newProductList = productList.filter(
    (product) => product.category === productCategory
  );
  return (
    <div className="category-layout">
      <h1> {productCategory.toUpperCase()}</h1>
      <div className="product-list">
        {newProductList.map((value) => (
          <ProductCard key={value.id} product={value}  cartItems={cartItems} setCartItems={setCartItems} />
        ))}
      </div>
    </div>
  );
};

export default Category;
