import React from 'react';

function Footer() {
    return (
        <footer className="mt-5 py-3" style={{ 
            backgroundColor: '#2e8b57ff',
            color: 'white'
        }}>
            <div className="container">
                <div className="text-center">
                    {/* Copyright */}
                    <p className="mb-2 fw-bold" style={{ color: '#daffc6ff' }}>
                        <i className="fas fa-leaf me-2"></i> Huerto Hogar © {new Date().getFullYear()}
                    </p>
                    
                    {/* Información en una línea */}
                    <div className="mb-2" style={{ fontSize: '0.9rem' }}>
                        <span className="me-3">
                            <i className="fas fa-map-marker-alt me-1"></i> Santiago, Chile
                        </span>
                        <span className="me-3"> • </span>
                        <span className="me-3">
                            <i className="fas fa-phone me-1"></i> +56 9 1234 5678
                        </span>
                        <span className="me-3"> • </span>
                        <span>
                            <i className="fas fa-envelope me-1"></i> contacto@huertohogar.cl
                        </span>
                    </div>
                    
                    {/* Derechos reservados */}
                    <p className="mb-0" style={{ fontSize: '0.85rem', color: '#e0e0e0' }}>
                        Todos los derechos reservados
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;