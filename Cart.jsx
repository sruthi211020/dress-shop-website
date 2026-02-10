function Cart({ cart }) {
  return (
    <div style={{ marginTop: 30 }}>
      <h2>🛒 Cart Page</h2>

      {cart.length === 0 ? (
        <p>Cart empty</p>
      ) : (
        cart.map((item, index) => (
          <div key={index} style={{ borderBottom: "1px solid #ddd" }}>
            <p>{item.name}</p>
            <p>{item.category}</p>
            <p>₹{item.price}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default Cart;
