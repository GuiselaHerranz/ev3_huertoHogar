import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import DetalleProducto from './pages/productodetalle';
import Productos from './pages/productos';
import Home from './pages/Home';
import SobreNosotros from './pages/Nosotros';
import Contacto from './pages/contact';
import Carrito from './pages/Carrito';



function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/productos' element={<Productos/>}></Route>
        <Route path='/carrito' element={<Carrito/>}></Route>
        <Route path='/productos/:id' element={<DetalleProducto/>}></Route>
        <Route path='/nosotros' element={<SobreNosotros/>}></Route>
        <Route path='/contacto' element={<Contacto/>}></Route>
      </Routes>
    </Router>    
  );
}

export default App;

