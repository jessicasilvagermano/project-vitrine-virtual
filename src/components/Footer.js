import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer() {
    return (
        <>
            <Navbar   variant="dark"  className='bg-light p-0 fixed-bottom text-white'>
                <Container className='d-block text-center'>
                    <h6 className='text-dark' >Desenvolvido por Jéssica Silva</h6>
                    
                </Container>
            </Navbar>
        </>
    );
}

export default Footer;

