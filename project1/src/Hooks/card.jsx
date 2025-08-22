import React from "react";

const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: "$99",
    description: "High-quality wireless headphones with noise cancellation.",
    image: "https://images-na.ssl-images-amazon.com/images/I/71Rz4nN%2BNFL._AC_SL1500_.jpg"
  },
  {
    id: 2,
    name: "Smart Watch",
    price: "$149",
    description: "Track your fitness and receive notifications.",
    image: "https://tse2.mm.bing.net/th/id/OIP.XincheCxdxdwSJr5Bh4idgHaHa?pid=Api&P=0&h=180"
  },
  {
    id: 3,
    name: "Laptop",
    price: "$799",
    description: "Powerful and portable laptop for all your needs.",
    image: "https://tse3.mm.bing.net/th/id/OIP.TmdVZty6FfKab0vUeFwvaAHaEm?pid=Api&P=0&h=180"
  },
  {
    id: 4,
    name: "Bluetooth Speaker",
    price: "$49",
    description: "Portable speaker with deep bass and long battery life.",
    image: "https://tse2.mm.bing.net/th/id/OIP.rNxkdzB6EsyKwx3tG_OZvAHaHa?pid=Api&P=0&h=180"
  },
  {
    id: 5,
    name: "Gaming Mouse",
    price: "$29",
    description: "Ergonomic design with customizable buttons.",
    image: "https://m.media-amazon.com/images/I/61QY3V6A-NL.jpg"
  }
];

export default function ProductCards() {
  return (
    <div style={styles.container}>
      {products.map((product) => (
        <div key={product.id} style={styles.card}>
          <img src={product.image} alt={product.name} style={styles.image} />
          <h2 style={styles.name}>{product.name}</h2>
          <p style={styles.price}>{product.price}</p>
          <p style={styles.description}>{product.description}</p>
        </div>
      ))}
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "20px",
    padding: "20px"
  },
  card: {
    width: "200px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    padding: "10px",
    textAlign: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
  },
  image: {
    width: "50%",
    borderRadius: "8px"
  },
  name: {
    fontSize: "18px",
    margin: "10px 0 5px"
  },
  price: {
    color: "green",
    fontWeight: "bold"
  },
  description: {
    fontSize: "14px",
    color: "#555"
  }
};