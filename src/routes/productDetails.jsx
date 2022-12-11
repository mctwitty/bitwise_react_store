import { useState } from 'react';
import { Button } from 'react-bootstrap';

import { useLoaderData } from 'react-router-dom';

export const loader = async ({params}) => {
  const { productId } = params
  const response = await fetch(`https://fakestoreapi.com/products/${productId}`)
  const product = await response.json()
  return { product }
}


function ProductDetails() {
  const [quantity, setQuantity] = useState(1)
  const { product } = useLoaderData()
  const { id, title, description, image, price } = product
  console.log(quantity)
  const handleSubmit = (e) => {
    e.preventDefault()
    // insert cart functionality
    console.log("Quantity", quantity)
  }
  const handleQuantityChange = (e) => {
    const q = Math.max(1, e.target.value)
    setQuantity(q)
  }

  return ( 
    <>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{description}</p>
      <p>${price.toFixed(2)}</p>
      <form onSubmit={handleSubmit}>
        <input type='number' name='quantity' value={quantity} onChange={(e) => handleQuantityChange(e)} />
        <Button variant='primary' type='submit'>Buy</Button>
      </form>
    </>
   );
}

export default ProductDetails;