import React from 'react'
import ReactDOM from 'react-dom/client'
import { createHashRouter, RouterProvider } from 'react-router-dom'

// Contexts
import CartProvider from './contexts/CartContext';

// Routes
import Root from './routes/root'
import ProductList, { loader as productsLoader } from './routes/products';
import ProductDetails, { loader as productDetailLoader } from './routes/productDetails';
import Cart from './routes/cart'
import CheckoutPage from './routes/checkout'; 

const router = createHashRouter([
  {
    path: '/',
    element: <Root/>,
    errorElement: <div>whoopsie</div>,
    children: [
      {
        path: '/products',
        index: true,
        element: <ProductList/>,
        loader: productsLoader,
      },
      {
        path: '/products/:productId',
        element: <ProductDetails/>,
        loader: productDetailLoader,
        errorElement: <div>d'oh</div>
      },
      {
        path: '/cart',
        element: <Cart/>,
      },
      {
        path: '/checkout',
        element: <CheckoutPage/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
      <RouterProvider router={router}/>
    </CartProvider>
  </React.StrictMode>,
)
