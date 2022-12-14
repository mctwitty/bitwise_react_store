// import { useContext } from 'react';
// import { CartContext } from '../contexts/CartContext';

import { Button } from 'react-bootstrap';

const CartItemCard = ({id, title, price, quantity, removeFromCart}) => {
  // const { removeFromCart } = useContext(CartContext)
  const handleClick = (e) => {
    console.log('removeFromCart', id)
    removeFromCart(id)
  }

  return ( 
    <>
      <p>Title: {title}</p>
      <p>Quantity: {quantity}</p>
      <p>Price: {price}</p>
      <p>Subtotal: {quantity * price}</p>
      <Button variant='danger' onClick={handleClick}>remove</Button>
    </>
  )
}

export default CartItemCard;