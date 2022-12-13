import { createContext, useState } from 'react';

export const CartContext = createContext(null)

const CartProvider = ({children}) => {

  const [cart, setCart] = useState([])

  /**
   * @param {item} 
   * @todo add logic that checks if new item already present and if so add increase quantity
   */
  const addToCart = ({id, quantity, title, price}) => {
    let newCart = cart

    // check if item id already exists in cart. if not, add item. else, update quantity
    const index = newCart.findIndex(item => id == item.id)
    if(index == -1) {
      newCart.push({ id, quantity, title, price })
    } else {
      newCart[index] = {
        ...cart[index],
        quantity: cart[index].quantity + quantity
      }
    }
    setCart(newCart)
    console.log(cart)
  }
  const removeFromCart = (id) => {
    let newCart = cart
    console.log('cart', cart)
    console.log('newCart', newCart)
    console.log('id', id)
    const index = newCart.findIndex(item => id == item.id)
    console.log('index', index)
    if(index != -1) {
      newCart.splice(index, 1)
    }
    setCart(newCart)
    console.log(cart)
  }
  return ( 
    <CartContext.Provider value={{cart, addToCart, removeFromCart}}>
      {children}
    </CartContext.Provider>
   );
}

export default CartProvider;