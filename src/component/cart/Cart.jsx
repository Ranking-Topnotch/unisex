import React from 'react'
import { remove } from '../../store/cartSlice';
import { useSelector, useDispatch } from 'react-redux'

const Cart = () => {
  const cartProducts = useSelector(state => state.cart);
  const [number, setNumber] = React.useState(1)

  const dispatch = useDispatch()

  const handleIncrease = id => {
    setNumber(prevState => ({
      ...prevState,
      [id]: (prevState[id] || 1) + 1
    }));
  };

  const handleDecrease = id => {
    setNumber(prevState => ({
      ...prevState,
      [id]: (prevState[id] || 1) - 1
    }));
  };

  const removeCart = id => {
    dispatch(remove(id))
  }

  const calculateTotal = () => {
    let total = 0;

    cartProducts.forEach(product => {
      const amount = product.price * (number[product.id] || 1);
      total += amount;
    });

    return total;
  };
  const rawData = cartProducts.map(product => {
    const amount = product.price * number[product.id] || product.price
    const firstLetter = product.category.charAt(0).toUpperCase()
    const remainingLetter = firstLetter + product.category.slice(1)

      return <div className='product' key={product.id}>
         <section>
          <img src={product.image} alt='pro' />
            <div>
                <p className='catergory'>{remainingLetter}</p>
                <p>{product.description}</p>
                <p>${product.price}</p>
            </div>
         </section>

          <footer>
            <button className='remove' onClick={() => removeCart(product.id)}>Remove cart</button>

            <div className='count'>
              <div>
              <span onClick={() => handleIncrease(product.id)}>+</span>
              <span>{number[product.id] || 1}</span>
              <span onClick={() => handleDecrease(product.id)}>-</span>
              </div>
              <div>
                ${amount}
              </div>
            </div>
          </footer>

      </div>
  })
  
  return (
    <div className='cart'>
      <div className='cart_detail'>
        {rawData}
      </div>
      <h2>Total = {calculateTotal()}</h2>
    </div>
  )
}

export default Cart



//const Nav = () => {
    