import React from 'react';
import NavBarPrincipal from './components/navbar';
import Banner from './components/banner';
import SideMenu from './components/sidemenu';


function Dashboard() {
    return (
        <div>
            <NavBarPrincipal/>
            <SideMenu/>
            <Banner/>
        </div>
    );
}

export default Dashboard;