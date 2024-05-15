import NavBar from './components/navbar/NavBar'
import ItemListContainer from './components/ItemListConteiner/ItemListContainer'
import ItemDetailConteiner from './components/ItemDetailContainer/ItemDetailConteiner'
import './App.css'
import { BrowserRouter, Routes,Route } from 'react-router-dom'

function App() {
  

  return (
<div>
  <BrowserRouter>
   <NavBar />
  <Routes>

      <Route path="/" element={ <ItemListContainer saludo="" /> } />
      <Route path="/categoria/:idCategoria" element={ <ItemListContainer /> } />
      <Route path="/detail/:idproducto" element={ <ItemDetailConteiner />} />
  </Routes>
  </BrowserRouter>
</div>
  );
}

export default App
