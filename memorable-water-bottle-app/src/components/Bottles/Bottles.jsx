import { useEffect, useState } from "react";
import { addToLS, getStoredCart } from "../../utilities/localStorage";
import Bottle from "../Bottle/Bottle";
import "./Bottles.css";
import Cart from "../Cart/Cart";

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
      console.log("bottle save", savedCart);
      setCart(savedCart);
    }
  }, [bottles]);

  const handleAddToCart = (bottle) => {
    setCart([...cart, bottle]);
    addToLS(bottle.id);
  };

  return (
    <div>
      <h4>Bottles :{bottles.length}</h4>
      <Cart cart={cart}></Cart>
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
