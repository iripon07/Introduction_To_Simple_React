import { useEffect, useState } from "react";
import {
  addToLS,
  getStoredCart,
  removeFromLS,
} from "../../utilities/localStorage";
import Bottle from "../Bottle/Bottle";
import Cart from "../Cart/Cart";
import "./Bottles.css";

const Bottles = () => {
  const [bottles, setBottles] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    fetch("bottles.json")
      .then((res) => res.json())
      .then((data) => setBottles(data));
  }, []);

  useEffect(() => {
    if (bottles.length) {
      const storedCart = getStoredCart();
      const savedCart = [];
      for (const id of storedCart) {
        const bottle = bottles.find((bottle) => bottle.id === id);
        if (bottle) {
          savedCart.push(bottle);
        }
      }
      setCart(savedCart);
    }
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    setCart([...cart, bottle]);
    addToLS(bottle.id);
  };

  const handleRemoveFromCart = (id) => {
    const remainingBottle = cart.filter((bottle) => bottle.id !== id);
    setCart(remainingBottle);
    removeFromLS(id);
  };

  return (
    <div>
      <h4>Bottles :{bottles.length}</h4>
      <Cart cart={cart} handleRemoveFromCart={handleRemoveFromCart}></Cart>
      <div className="bottle-container">
        {bottles.map((bottle) => (
          <Bottle
            bottle={bottle}
            key={bottle.id}
            handleAddToCart={handleAddToCart}
          ></Bottle>
        ))}
      </div>
    </div>
  );
};

export default Bottles;
