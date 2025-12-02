import React, { useEffect, useState } from 'react';

function KpisProductos() {

    const [productos, setProductos] = useState([]);

    useEffect(() => {
        fetch("http://localhost:3001/api/productos")
            .then(res => res.json())
            .then(data => setProductos(data))
            .catch(() => setProductos([]));
    }, []);

    const totalProductos = productos.length;
    const stockBajo = productos.filter(p => p.stock <= 5).length;
    const totalCategorias = new Set(productos.map(p => p.category)).size;

    return (
        <div className="content-wrapper">

            {/* HEADER */}
            <div className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1 className="m-0">Panel de Productos</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="/">Inicio</a></li>
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            {/* CONTENIDO */}
            <section className="content">
                <div className="container-fluid">

                    <div className="row">

                        {/* TOTAL PRODUCTOS */}
                        <div className="col-lg-4 col-6">
                            <div className="small-box bg-info">
                                <div className="inner">
                                    <h3>{totalProductos}</h3>
                                    <p>Total de Productos</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-box-open"></i>
                                </div>
                                <a href="/productos" className="small-box-footer">
                                    Ver productos <i className="fas fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div>

                        {/* STOCK BAJO */}
                        <div className="col-lg-4 col-6">
                            <div className="small-box bg-warning">
                                <div className="inner">
                                    <h3>{stockBajo}</h3>
                                    <p>Productos con Stock Bajo</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-exclamation-triangle"></i>
                                </div>
                                <a href="/productos" className="small-box-footer">
                                    Revisar stock <i className="fas fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div>

                        {/* TOTAL CATEGORÍAS */}
                        <div className="col-lg-4 col-6">
                            <div className="small-box bg-success">
                                <div className="inner">
                                    <h3>{totalCategorias}</h3>
                                    <p>Categorías Registradas</p>
                                </div>
                                <div className="icon">
                                    <i className="fas fa-tags"></i>
                                </div>
                                <a href="/productos" className="small-box-footer">
                                    Ver categorías <i className="fas fa-arrow-circle-right"></i>
                                </a>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
}

export default KpisProductos;
