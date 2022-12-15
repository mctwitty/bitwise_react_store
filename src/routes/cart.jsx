import { useContext, useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import CartItemCard from '../components/CartItemCard'

// Contexts
import { CartContext } from '../contexts/CartContext'

const Cart = () => {
  const { cart, removeFromCart, cartTotal } = useContext(CartContext)

  return (
    <div>
      <h3>Cart</h3>
      { cart.length == 0 && <p>Your cart is empty. Don't you want to buy <Link to='/products'>something?</Link></p> }
      { cart?.map(item => (
        <CartItemCard
          key={item.id}
          title={item.title}
          quantity={item.quantity}
          price={item.price}
          id={item.id}
          removeFromCart={removeFromCart}
        />
      ))}
      {/* <h3>Total: ${cartTotal.toFixed(2)}</h3> */}
      { cart.length > 0 && <Link to='/checkout'><Button variant='success'>Checkout</Button></Link>}
    </div>
  )

}
export default Cart