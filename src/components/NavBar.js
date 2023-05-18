import Container from 'react-bootstrap/Container';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Distintivo from './Distintivo';
import { Link } from 'react-router-dom';


function NavBar() {


  return (

    <Navbar bg="primary" variant="dark">
      <Container>
        <Nav.Link as={Link} to={'/'}><h4 className='text-white'><span class="material-symbols-outlined">
auto_awesome
</span> Jess MakeUp</h4></Nav.Link>
        <Nav>
          <Nav.Link as={Link} to={'/'}>Produtos</Nav.Link>
          <Nav.Link as={Link} to={'/cart'}>Carrinho</Nav.Link>
          <Distintivo />
        </Nav>
      </Container>
    </Navbar>


  );
}

export default NavBar;