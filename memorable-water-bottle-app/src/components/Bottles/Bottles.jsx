import { useEffect, useState } from "react";
import { addToLS, getStoredCart } from "../../utilities/localStorage";
import Bottle from "../Bottle/Bottle";
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
    if (bottles > 0) {
      const storedCart = getStoredCart();
      console.log(storedCart);
    }
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    setCart([...cart, bottle]);
    addToLS(bottle.id);
  };

  return (
    <div>
      <h4>Bottles :{bottles.length}</h4>
      <h5>Cart: {cart.length}</h5>
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
