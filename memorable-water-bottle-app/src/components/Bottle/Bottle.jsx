import './Bottle.css'

const Bottle = ({ bottle, handleAddToCart }) => {
  const { img, name, price, } = bottle;
  return (
    <div className='bottle'>
      <h3>Bottle: {name}</h3>
      <img className='bottle-img' src={img} alt="" />
      <p>{price}</p>
      <button onClick={()=>handleAddToCart(bottle)}>Purchase</button>
    </div>
  );
};

export default Bottle;
