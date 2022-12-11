import { Nav } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
function NavBar() {
  return ( 
    <Nav className='justify-content-center'>
      <Nav.Item>
        Home
      </Nav.Item>
      <Nav.Item>
        <NavLink to='/featured'>Featured</NavLink>
      </Nav.Item>
      <Nav.Item>
        <NavLink to='/products'>Products</NavLink>
      </Nav.Item>
      <Nav.Item>
        Cart
      </Nav.Item>
      <Nav.Item>
        <input type="search" />
      </Nav.Item>
    </Nav>
   );
}

export default NavBar;