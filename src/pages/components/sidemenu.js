import React from 'react';
import { Link } from 'react-router-dom';

function SideMenu() {
    return (
        <aside className="main-sidebar sidebar-dark-primary elevation-4">
            {/* Brand Logo */}
            <Link to="/" className="brand-link">
                <img 
                    src="/dist/img/banner/Logo.png" 
                    alt="HuertoHogar Logo" 
                    className="brand-image img-circle elevation-3"
                    style={{ opacity: '.8', width: '33px', height: '33px' }}
                />
                <span className="brand-text font-weight-light">Huerto Hogar</span>
            </Link>

            {/* Sidebar */}
            <div className="sidebar">
                {/* Sidebar Menu */}
                <nav className="mt-2">
                    <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
                        
                        {/* Dashboard */}
                        <li className="nav-item">
                            <Link to="/dashboard" className="nav-link">
                                <i className="nav-icon fas fa-tachometer-alt"></i>
                                <p>Dashboard</p>
                            </Link>
                        </li>

                        {/* Cultivos */}
                        <li className="nav-item">
                            <Link to="/cultivos" className="nav-link">
                                <i className="nav-icon fas fa-seedling"></i>
                                <p>Mis Cultivos</p>
                            </Link>
                        </li>

                        {/* Productos */}
                        <li className="nav-item">
                            <Link to="/productos" className="nav-link">
                                <i className="nav-icon fas fa-shopping-basket"></i>
                                <p>Productos</p>
                            </Link>
                        </li>

                        {/* Calculadora */}
                        <li className="nav-item">
                            <Link to="/calculadora" className="nav-link">
                                <i className="nav-icon fas fa-calculator"></i>
                                <p>Calculadora</p>
                            </Link>
                        </li>

                        {/* Calendario */}
                        <li className="nav-item">
                            <Link to="/calendario" className="nav-link">
                                <i className="nav-icon fas fa-calendar-alt"></i>
                                <p>Calendario</p>
                            </Link>
                        </li>

                        {/* Separador */}
                        <li className="nav-header">CONFIGURACIÓN</li>

                        {/* Perfil */}
                        <li className="nav-item">
                            <Link to="/perfil" className="nav-link">
                                <i className="nav-icon fas fa-user"></i>
                                <p>Mi Perfil</p>
                            </Link>
                        </li>

                        {/* Configuración */}
                        <li className="nav-item">
                            <Link to="/configuracion" className="nav-link">
                                <i className="nav-icon fas fa-cog"></i>
                                <p>Configuración</p>
                            </Link>
                        </li>

                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default SideMenu;