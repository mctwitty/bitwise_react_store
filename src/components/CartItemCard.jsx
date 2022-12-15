// import { useContext } from 'react';
// import { CartContext } from '../contexts/CartContext';

import { Button } from 'react-bootstrap';

const CartItemCard = ({id, title, price, quantity, removeFromCart}) => {
  const handleClick = (e) => {
    console.log('removeFromCart', id)
    removeFromCart(id)
  }

  return ( 
    <>
      <p>{title}</p>
      <p>Quantity: {quantity}</p>
      <p>Price: ${price.toFixed(2)}</p>
      <p>Subtotal: ${(quantity * price).toFixed(2)}</p>
      <Button variant='danger' onClick={handleClick}>remove</Button>
    </>
  )
}

export default CartItemCard;