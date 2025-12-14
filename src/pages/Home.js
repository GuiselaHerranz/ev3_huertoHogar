import React from 'react';
import NavBarPrincipal from './components/navbar';
import SideMenu from './components/sidemenu';
import BannerHuerto from './components/banner';
import ProductosDestacados from './components/productos_destacados';
import Footer from './components/footer';



function Home() {

    return (
        <div>
            <NavBarPrincipal />
            <SideMenu />
            <BannerHuerto/>
            <ProductosDestacados/>
            <Footer/>
        </div>

    );
}

export default Home;