import { Outlet, useLoaderData } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import NavBar from '../components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';

import './styles.css'

function Root() {
  return ( 
    <>
      <NavBar/>
      <div className='container'>
        <Outlet/>
      </div>
    </>
  )
}

export default Root;