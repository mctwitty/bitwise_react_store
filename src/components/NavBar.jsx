// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function NavBar() {
  const { cart } = useContext(CartContext)
  console.log('cart length', cart)
  return ( 
    <Navbar bg='primary' variant='dark'>
      <Container>
        <Navbar.Brand>Real Fake Store</Navbar.Brand>
        <Nav>
            <NavLink className='nav-link'>Home</NavLink>  
            <NavLink to='/products' className='nav-link'>Products</NavLink>
            <NavLink to='/cart' className='nav-link'>Cart ({cart.length})</NavLink>
          {/* <Nav.Item>
            <input type="search" />
          </Nav.Item> */}
        </Nav>
      </Container>
    </Navbar>
   );
}

export default NavBar;