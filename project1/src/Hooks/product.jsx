import React, { useState } from "react";

export default function ProductManager() {
  const [products, setProducts] = useState([]);

  const addProduct = () => {
    if (products.length >= 5) return;
    const newProduct = {
      id: Date.now(),
      name: `Product ${products.length + 1}`,
      quantity: 1,
      price: 100,
    };
    setProducts([...products, newProduct]);
  };

  const removeProduct = (id) => {
    setProducts(products.filter(product => product.id !== id));
  };

  const increaseQuantityAndPrice = (id) => {
    setProducts(products.map(product =>
      product.id === id
        ? {
            ...product,
            quantity: product.quantity + 1,
            price: product.price + 100,
          }
        : product
    ));
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2> Product Manager</h2>

      <button onClick={addProduct} disabled={products.length >= 5}>
        + Add Product
      </button>

      <ul style={{ listStyle: "none", padding: 0 }}>
        {products.map((product) => (
          <li
            key={product.id}
            style={{
              margin: "10px 0",
              border: "1px solid #ccc",
              padding: "10px",
              borderRadius: "8px",
            }}
          >
            <strong>{product.name}</strong>
            <br />
            Quantity: {product.quantity}, Price: ₹{product.price}
            <div style={{ marginTop: "5px" }}>
              <button onClick={() => increaseQuantityAndPrice(product.id)}>
                + Increase
              </button>
              <button
                onClick={() => removeProduct(product.id)}
                style={{ marginLeft: "10px", color: "red" }}
              >
                 -- Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}