import { Card } from 'react-bootstrap';

function CheckoutItem({title, price, quantity}) {
  return ( 
    <Card style={{ width: '60ch', padding: '1em'}}>
      <Card.Title>{title}</Card.Title>
      <Card.Text>Price: ${price.toFixed(2)}</Card.Text>
      <Card.Text>Quantity: {quantity}</Card.Text>
    </Card>
   );
}

export default CheckoutItem;