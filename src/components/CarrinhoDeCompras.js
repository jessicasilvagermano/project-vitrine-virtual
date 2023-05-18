import React, { useContext } from 'react';
import { CartContext } from "../contexts/CartContext";
import Card from 'react-bootstrap/Card';
import { BsFillCartDashFill } from 'react-icons/bs'
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



function CarrinhoDeCompras() {
  const { cart, removeToCart } = useContext(CartContext);



  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.qtd * curr.price,
    0
  );


  return (

    <div >

      <div  >
        <div className='d-flex justify-content-around my-5 shadow p-3 mb-5 bg-body rounded'>
        <h3 className=' text-start text-center' >Carrinho de Produtos</h3>
        <h5 className='text-danger' >Total :R$ {totalPrice.toFixed(2)} </h5>
        <Button as={Link} to={'/payment'}>Finalizar Pedido</Button>
      </div>
       
        <p className='d-flex justify-content-center text-center row m-5'>

          <br></br>
          {cart.map((item) => (
            <Card className=' col-2 mx-1 my-1' key={item.id} style={{ width: '16rem' }}>
              <Card.Body className='justify-content-center text-center row' >
                <img style={{ width: '18rem' }} src={item.img} alt='Imagem Shoes' />
                <p className='text-primary'>{item.name}</p>
                <p> R${item.price}{" "}</p>
              </Card.Body>
              <button className='border-0 mx-4'>
                <b> QTD: </b> {item.qtd} 
                <BsFillCartDashFill className='border-0 mx-4 text-danger' onClick={() => removeToCart(item)}></BsFillCartDashFill>
                <br></br>
                <b>TOTAL: </b>R${item.price * item.qtd}  </button>

            </Card>
          ))}
        </p>
      </div>
      
    </div>
  )
};


export default CarrinhoDeCompras;