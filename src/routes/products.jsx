// import { CardGroup, Row } from 'react-bootstrap';
import CardGroup from 'react-bootstrap/CardGroup'
import { useLoaderData } from 'react-router-dom';

import ProductCard from '../components/ProductCard';



export const loader = async ({params}) => {
  const response = await fetch('https://fakestoreapi.com/products')
  const products = await response.json()
  const productId = params.productId
  return { products, productId }
}

function ProductList() {
  const { products, productId } = useLoaderData()
  // console.log(productId)
  return ( 
    <div>
      <h2>Products</h2>
      {/* <Row xs={1} md={4} className='g-4'> */}
      <CardGroup>
        { products?.map( product => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            price={product.price}
            description={product.description}
            category={product.category}
            image={product.image}
          />
        ))}
      </CardGroup>
    </div>
   );
}

export default ProductList;