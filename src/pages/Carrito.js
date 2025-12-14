import React from "react";
import CalculoCarrito from './components/useCalculoCarrito.js';
import NavBarPrincipal from './components/navbar';
import SideMenu from './components/sidemenu';

function Carrito() {
  return (
    <>
      <NavBarPrincipal />
      <SideMenu />
      <CalculoCarrito />
    </>
  );
}

export default Carrito;
