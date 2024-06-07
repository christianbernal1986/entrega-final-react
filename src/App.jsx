import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/ItemListConteiner/ItemListContainer'
import ItemDetailConteiner from './components/ItemDetailContainer/ItemDetailConteiner'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Cart from './components/Cart/Cart'
import Checkout from './components/Checkout/Checkout'

import './App.css'


function App() {
  

  return (
<div>
  
  <BrowserRouter>
    <CartProvider>
      <NavBar />
      <Routes>

        <Route path="/" element={ <ItemListContainer saludo="" /> } />
        <Route path="/categoria/:idCategoria" element={ <ItemListContainer /> } />
        <Route path="/detail/:idproducto" element={ <ItemDetailConteiner />} />
        <Route path="/cart" element={ <Cart /> } />
        <Route path="/checkout" element={ <Checkout/> }/>
        
      </Routes>
  </CartProvider>
  </BrowserRouter>
</div>
  );
}

export default App
