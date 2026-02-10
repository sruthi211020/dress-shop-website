import { useState } from "react";
import Cart from "./Cart";

function App() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "White T-Shirt",
      category: "T-Shirt",
      price: 499,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab",
    },
    {
      id: 2,
      name: "black T-Shirt",
      category: "T-Shirt",
      price: 599,
      image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb",
    },
    {
      id: 3,
      name: "T.shirt",
      category: "T.shirts",
      price: 299,
      image: "https://images.unsplash.com/photo-1618354691373-d851c5c3a990",
    },
    {
      id: 4,
      name: "Casual shirts",
      category: "shirts",
      price: 999,
      image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf",
    },
    {
      id: 5,
      name: " Jeans Pant",
      category: "Pants",
      price: 1299,
      image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246",
    },
    {
      id: 6,
      name: "Casual pants",
      category: "Pants",
      price: 899,
      image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1",
    },
  ];

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Dress Shop </h1>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 20 }}>
        {products.map((item) => (
          <div
            key={item.id}
            style={{
              border: "1px solid #ccc",
              padding: 10,
              width: 220,
            }}
          >
            <img
              src={item.image}
              alt={item.name}
              width="200"
              height="200"
              style={{ objectFit: "cover" }}
            />
            <h4>{item.name}</h4>
            <p>{item.category}</p>
            <p>₹{item.price}</p>

            <button onClick={() => addToCart(item)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <Cart cart={cart} />
    </div>
  );
}

export default App;
