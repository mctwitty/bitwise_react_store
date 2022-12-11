import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function ProductCard({title, price, description, category, image, id}) {
  // console.log(title)
  return ( 
    // <Col>
      <Card style={{ flex: '0 0 20rem' }}>
        <Card.Img variant='top' src={image} alt={title} style={{ maxHeight: '250px' }}/>
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>${price.toFixed(2)}</Card.Text>
          {/* <Card.Text>{description}</Card.Text> */}
        </Card.Body>
        <Link to={`/products/${id}`}>
          <Card.Footer>details</Card.Footer>
        </Link>
      </Card>
    // </Col>
  );
}

export default ProductCard;