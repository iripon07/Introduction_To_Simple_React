import "./Cart.css";
import PropTypes from "prop-types";

const Cart = ({ cart, handleRemoveFromCart }) => {
  
  return (
    <div>
      <h4>
        Cart: {cart.length}
        <div className="cart-container">
          {cart.map((bottle) => (
            <div key={bottle.id}>
              <img src={bottle.img} alt={bottle.name}></img>
              <button onClick={handleRemoveFromCart(bottle.id)}>Remove</button>
            </div>
          ))}
        </div>
      </h4>
    </div>
  );
};

Cart.propTypes = {
  cart: PropTypes.array.isRequired,
  handleRemoveFromCart:PropTypes.func.isRequired
};
export default Cart;
