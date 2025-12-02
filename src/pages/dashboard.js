import React from 'react';
import NavBarPrincipal from "../pages/components/navbar";
import SideMenu from "../pages/components/sidemenu";
import Kpisproductos from "../pages/components/kpisproductos";


function Dashboard() {
    return (
        <div>
            <NavBarPrincipal/>
            <SideMenu/>
            <Kpisproductos/>
        </div>
    );
}

export default Dashboard;
