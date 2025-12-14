import React from 'react';
import NavBarPrincipal from './components/navbar';
import SideMenu from './components/sidemenu';
import Us from './components/sobre_nosotros';
import Footer from './components/footer';



function SobreNosotros() {

    return (
        <div>
            <NavBarPrincipal />
            <SideMenu />
            <Us/>
            <Footer/>
        </div>

    );
}

export default SobreNosotros;