import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import ListaProductos from './pages/components/lista_productos';
import DetalleProducto from './pages/components/detalle_producto';
import Producto from './pages/productos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/productos' element={<Producto/>}></Route>
        <Route path='/productos/:id' element={<DetalleProducto/>}></Route>
      </Routes>
    </Router>    
  );
}

export default App;

