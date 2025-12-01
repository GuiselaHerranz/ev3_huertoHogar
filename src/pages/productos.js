import React from 'react';
import NavBarPrincipal from './components/navbar';
import SideMenu from './components/sidemenu';
import DetalleProducto from './components/detalle_producto';
import ListaProductos from './components/lista_productos';


function Producto() {

    return (
        <div>
            <NavBarPrincipal />
            <SideMenu />
            <ListaProductos />
        </div>

    );
}

export default Producto;
