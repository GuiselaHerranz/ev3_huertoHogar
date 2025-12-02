import React, { useEffect, useState } from "react";
import NavBarPrincipal from "../pages/components/navbar";
import SideMenu from "../pages/components/sidemenu";
import Banner from "../pages/components/banner";
import Kpisproductos from "../pages/components/kpisproductos";


function Dashboard() {
    return (
        <div>
            <NavBarPrincipal/>
            <SideMenu/>
            <Banner/>
            <Kpisproductos/>
        </div>
    );
}

export default Dashboard;
