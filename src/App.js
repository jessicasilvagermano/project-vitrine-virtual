import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import VitrineList from './components/VitrineList';
import CarrinhoDeCompras from './components/CarrinhoDeCompras';
import { CartProvider } from "./contexts/CartContext";
import Payment from './components/Payment';
import Footer from './components/Footer';





export default function App() {

  return (
    <CartProvider>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<VitrineList/>} />
        <Route path='/cart' element={<CarrinhoDeCompras/>} />
        <Route path='/payment' element={<Payment/>} />
      </Routes>
    <Footer/>
    </CartProvider>


  )
}
