import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';
import React, { useContext } from 'react';
import { CartContext } from "../contexts/CartContext";
import { BsFillCartCheckFill,BsCart } from 'react-icons/bs';



function Distintivo() {
  const {cart, quantity} = useContext(CartContext);


  
  return (
    <Button  className=' bg-primary border-0 d-flex p-2 w-100' >
       
      {
      cart.length >= 1 ?
              (<BsFillCartCheckFill />) :
              (<BsCart />) 
              
              }
 <Badge className='bg-light text-primary col  mx-1 '>{quantity}</Badge>
      <span className="visually-hidden"></span>
    </Button>
  );
}

export default Distintivo;