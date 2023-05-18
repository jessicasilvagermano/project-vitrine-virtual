import React, { useEffect, useContext } from 'react';
import { CartContext } from '../contexts/CartContext';
import axios from 'axios';
import Card from 'react-bootstrap/Card';
import { BsFillCartFill, BsFillCartCheckFill } from 'react-icons/bs'




function VitrineList() {
  const { addToCart, dados, setDados, cart} = useContext(CartContext);




  useEffect(() => {

    axios.get('http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline')
      .then(response => setDados(response.data))
      .catch(error => console.error(error));
  },

    [setDados]);


  return (
    <div className='d-flex justify-content-center text-center row m-5' >

      {dados.map((item) => (
        <Card className='col-2 mx-1 my-2 border-1' key={item.id} style={{ width: '16rem' }}>
          <Card.Body className=' d-flex  row' >
            <img style={{ width: '13rem' }} src={item.image_link} alt='Imagem Shoes' />
            <p className='text-primary'>{item.name}</p>
            <p > <b>R${item.price}{" "}</b></p>
          </Card.Body>
          <button className='my-3 w-100 bg-primary border-0 '  onClick={() => addToCart(item)}>
           
            {cart.some((itemCart) => itemCart.id === item.id) ?
              (<BsFillCartCheckFill className='text-warning mx-2'/>) :
              (<BsFillCartFill className='text-white mx-2' />)
            }

          </button>



        </Card>
      ))}

    </div>
  )
}

export default VitrineList;


