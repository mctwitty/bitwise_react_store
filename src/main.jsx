import React from 'react'
import ReactDOM from 'react-dom/client'
// import './index.css'
import { createBrowserRouter, RouterProvider, Route } from 'react-router-dom'
import Root from './routes/root'
import FeaturedProducts, { loader as featuredLoader } from './routes/featured';
import ProductList, { loader as productsLoader } from './routes/products';
import ProductDetails, { loader as productDetailLoader } from './routes/productDetails';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root/>,
    // loader: rootLoader,
    errorElement: <div>whoopsie</div>,
    children: [
      {
        path: '/featured',
        index: true,
        element: <FeaturedProducts />,
        loader: featuredLoader
      },
      {
        path: '/products/',
        element: <ProductList/>,
        loader: productsLoader,
      },
      {
        path: '/products/:productId',
        element: <ProductDetails/>,
        loader: productDetailLoader,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
