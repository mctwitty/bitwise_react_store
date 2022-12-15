import { Button, Card } from 'react-bootstrap';

const CartItemCard = ({id, title, price, quantity, removeFromCart}) => {
  const handleClick = (e) => {
    console.log('removeFromCart', id)
    removeFromCart(id)
  }

  return ( 
    <>
      <Card style={{ width: '60ch', padding: '1em' }}>
        
      <Card.Title>{title}</Card.Title>
      <p>Quantity: {quantity}</p>
      {/* <p>Price: ${price.toFixed(2)}</p>
      <p>Subtotal: ${(quantity * price).toFixed(2)}</p> */}
      <Button variant='danger' onClick={handleClick}>remove</Button>
      </Card>
    </>
  )
}

export default CartItemCard;