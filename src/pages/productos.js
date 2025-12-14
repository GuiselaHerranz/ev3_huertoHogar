import React from 'react';
import NavBarPrincipal from './components/navbar';
import SideMenu from './components/sidemenu';
import ListaProductos from './components/lista_productos';
import Footer from './components/footer';



function Producto() {

    return (
        <div>
            <NavBarPrincipal />
            <SideMenu />
            <ListaProductos  />
            <Footer/>
        </div>

    );
}

export default Producto;
