import { useLoaderData } from 'react-router-dom'
import { Row } from 'react-bootstrap'


import ProductCard from '../components/ProductCard'

/**
 * @returns array of featuredProducts
 */
export const loader = async () => {
  const response = await fetch('https://fakestoreapi.com/products?limit=5')
  const products = await response.json()
  return { products }
}

function FeaturedProducts() {
  const { products } = useLoaderData()
  // console.log('Products: ', products)
  console.log(typeof(products))
  products.forEach(product => console.log('Item: ', product))
  return ( 
    <>
      <h2>Featured Products</h2>
      <Row>
      {/* { products.map((item) => {{<div>Card</div>}})} */}
      { products?.map(product => (<ProductCard key={product.id} title={product.title} price={product.price} />)) }
      </Row>
    </>
   );
}

export default FeaturedProducts;