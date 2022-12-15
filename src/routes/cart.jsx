import { useContext, useEffect, useState } from 'react'
import CartItemCard from '../components/CartItemCard'

// Contexts
import { CartContext } from '../contexts/CartContext'

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext)
  const [total, setTotal] = useState(0)
  
  useEffect(() => {
    let subtotal = 0
    cart.forEach(({quantity, price}) => subtotal += quantity * price)
    setTotal(subtotal)
  }, [cart])

  return (
    <div>
      <h2>Cart</h2>
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
      <h3>Total: {total}</h3>
    </div>
  )

}
export default Cart