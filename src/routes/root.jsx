import { Outlet, useLoaderData } from 'react-router-dom';
import { Row } from 'react-bootstrap';
import ProductCard from '../components/ProductCard';
import NavBar from '../components/NavBar';
// import FeaturedProducts from '../components/Featured';
import 'bootstrap/dist/css/bootstrap.min.css';





function Root() {
  // const { featuredProducts } = useLoaderData()
  return ( 
    <>
      <NavBar />
      {/* <FeaturedProducts/> */}
      <div>Root</div>
      <Outlet/>
    </>
  )
}

export default Root;