import React, { useEffect } from "react";
import "../assets/Loader.css";

import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/ShopCart/ProductSlice";
import { addToCart } from "../features/ShopCart/CartSlice";

const ProductList = () => {
  const { items: products, status } = useSelector((state) => state.products);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchProducts());
    }
  }, [status]);

  if (status === "loading")
    return (
      <div className="loader">
        <div className="spinner"></div>
        <p style={{ paddingTop: 10 }}>Loading Products...</p>
      </div>
    );

  if (status === "failed")
    return (
      <div className="error">
        <p>Error : Failed to load Products</p>
        <button onClick={() => window.location.reload()}>Try Again</button>
      </div>
    );

  return (
    <div>
      <div className="product-list">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.image} alt={product.title} />
            <h2>
              {product.title.length > 20
                ? `${product.title.slice(0, 30)}...`
                : product.title}
            </h2>
            <p>Price : ${product.price}</p>
            <button onClick={()=>dispatch(addToCart(product))}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
