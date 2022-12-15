import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

function NavBar() {
  const { cart } = useContext(CartContext)
  return ( 
    <Navbar bg='primary' variant='dark'>
      <Container>
        <Navbar.Brand>Real Fake Store</Navbar.Brand>
        <Nav>
            { cart.length > 0 && <NavLink to='/checkout' className='nav-link' style={{fontWeight: 'bold', color: 'yellow'}}>Checkout</NavLink> }
            <NavLink to='/' className='nav-link'>Home</NavLink>  
            <NavLink to='/products' className='nav-link'>Products</NavLink>
            <NavLink to='/cart' className='nav-link'>Cart ({cart.length})</NavLink>
        </Nav>
      </Container>
    </Navbar>
   );
}

export default NavBar;