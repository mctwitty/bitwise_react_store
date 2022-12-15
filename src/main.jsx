import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'

// Contexts
import CartProvider from './contexts/CartContext';

// Routes
import Root from './routes/root'
import ProductList, { loader as productsLoader } from './routes/products';
import ProductDetails, { loader as productDetailLoader } from './routes/productDetails';
import Cart from './routes/cart'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    // loader: rootLoader,
    errorElement: <div>whoopsie</div>,
    children: [
      {
        path: '/products',
        element: <ProductList/>,
        loader: productsLoader,
      },
      {
        path: '/products/:productId',
        element: <ProductDetails/>,
        loader: productDetailLoader,
      },
      {
        path: '/cart',
        element: <Cart/>,
      },
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
