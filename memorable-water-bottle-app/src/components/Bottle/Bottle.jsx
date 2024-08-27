import './Bottle.css'

const Bottle = ({ bottle }) => {
  const { img, name, price } = bottle;
  return (
    <div className='bottle'>
      <h3>Bottle: {name}</h3>
      <img className='bottle-img' src={img} alt="" />
      <p>{price}</p>
    </div>
  );
};

export default Bottle;
