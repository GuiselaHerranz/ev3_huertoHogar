import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import DetalleProducto from './pages/productodetalle';
import Productos from './pages/productos';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Dashboard/>}></Route>
        <Route path='/productos' element={<Productos/>}></Route>
        <Route path='/productos/:id' element={<DetalleProducto/>}></Route>
      </Routes>
    </Router>    
  );
}

export default App;

