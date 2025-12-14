import React from 'react';
import NavBarPrincipal from './components/navbar';
import SideMenu from './components/sidemenu';
import BannerHuerto from './components/banner';
import FormularioContacto from './components/contacto';

function Contacto() {

    return (
        <div>
            <NavBarPrincipal />
            <SideMenu />
            <FormularioContacto/>
        </div>

    );
}

export default Contacto;