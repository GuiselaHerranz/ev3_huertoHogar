import React from 'react';

function NavBarPrincipal() {
    return (
        <nav className="main-header navbar navbar-expand navbar-dark" style={{ backgroundColor: '#2e8b57ff' }}>
            
            {/* Left navbar links */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
                </li>
                <a href="/" className="navbar-brand">
                <img
                    src="/dist/img/banner/Logo.png"
                    alt="HuertoHogar Logo"
                    width="40"
                    height="40"
                    className="d-inline-block align-top mr-2"
                />
                 Huerto Hogar
            </a>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="/productos" className="nav-link">Productos</a>
                </li>
                <li className="nav-item d-none d-sm-inline-block">
                    <a href="/contacto" className="nav-link">Contacto</a>
                </li>
            </ul>
            {/* Right navbar links */}
            <ul className="navbar-nav ml-auto">
                {/* Navbar Search */}
                <li className="nav-item">
                    <a className="nav-link" data-widget="navbar-search" href="#" role="button">
                        <i className="fas fa-search" />
                    </a>
                    <div className="navbar-search-block">
                        <form className="form-inline">
                            <div className="input-group input-group-sm">
                                <input className="form-control form-control-navbar" type="search" placeholder="Search" aria-label="Search" />
                                <div className="input-group-append">
                                    <button className="btn btn-navbar" type="submit">
                                        <i className="fas fa-search" />
                                    </button>
                                    <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                        <i className="fas fa-times" />
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default NavBarPrincipal;