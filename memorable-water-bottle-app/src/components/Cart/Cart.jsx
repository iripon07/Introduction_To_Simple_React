import "./Cart.css";

const Cart = ({ cart }) => {
  return (
    <div>
      <h4>
        Cart: {cart.length}
        <div className="cart-container">
          {cart.map((bottle) => (
            <img key={bottle.id} src={bottle.img} alt={bottle.name}></img>
          ))}
        </div>
      </h4>
    </div>
  );
};

export default Cart;
