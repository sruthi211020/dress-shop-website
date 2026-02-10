function Product({ name, price, image }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      padding: "10px",
      width: "200px",
      margin: "10px",
      textAlign: "center"
    }}>
      <img
        src={image}
        alt={name}
        style={{ width: "100%", height: "250px", objectFit: "cover" }}
      />
      <h4>{name}</h4>
      <p>₹{price}</p>
      <button>Add to Cart</button>
    </div>
  );
}

export default Product;

 