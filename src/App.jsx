import './App.css'
import NavBar from './Componentes/NavBar/NavBar'
import ItemListContainer from './Componentes/ItemListContainer/ItemListContainer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import ItemDetailContainer from './Componentes/ItemDetailContainer/ItemDetailContainer'

const App = () => {
  return (
    <div>

      <BrowserRouter>

          <NavBar/>

          <Routes>
              <Route path="/" element={<ItemListContainer/>}></Route>
              <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}></Route>
              <Route path="/item/:idItem" element={<ItemDetailContainer/>}></Route>
          </Routes>

      </BrowserRouter>
        
    </div>
  )
}

export default App