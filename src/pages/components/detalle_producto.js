import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function DetalleProducto() {
    const { id } = useParams();
    const [productoNombre, setProductoNombre] = useState('');
    const [productoCategoria, setProductoCategoria] = useState('');
    const [productoPrecio, setProductoPrecio] = useState(0);
    const [productoUnidad, setProductoUnidad] = useState('');
    const [productoDescripcion, setProductoDescripcion] = useState('');
    const [productoOrigen, setProductoOrigen] = useState('');
    const [productoImage, setProductoImage] = useState('');
    const [productoStock, setProductoStock] = useState(0);


    console.log('valor de id:', id);

    useEffect(() => {
        axios.get('http://localhost:3001/api/productos/' + id)
            .then((response) => {
                setProductoNombre(response.data.name);
                setProductoCategoria(response.data.category);
                setProductoPrecio(response.data.price);
                setProductoUnidad(response.data.unit);
                setProductoDescripcion(response.data.description);
                setProductoOrigen(response.data.origin);
                setProductoImage(response.data.image);
                setProductoStock(response.data.stock); 
            })
            .catch((error) => console.error(error));
    }, [id]);

    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Detalle del Producto</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item"><a href="/productos">Productos</a></li>
                                <li className="breadcrumb-item active">{productoNombre}</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main content */}
            <section className="content">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-3">
                            {/* Product Image */}
                            <div className="card card-primary card-outline">
                                <div className="card-body box-profile">
                                    <div className="text-center">
                                        <img className="img-fluid rounded" src={productoImage} alt={productoNombre} style={{ maxHeight: '250px', objectFit: 'cover' }} />
                                    </div>
                                    <h3 className="profile-username text-center">{productoNombre}</h3>
                                    <p className="text-muted text-center">{productoCategoria}</p>
                                    <ul className="list-group list-group-unbordered mb-3">
                                        <li className="list-group-item">
                                            <b>Precio</b> <span className="float-right">${productoPrecio.toLocaleString()} CLP</span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Unidad</b> <span className="float-right">{productoUnidad}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Origen</b> <span className="float-right">{productoOrigen}</span>
                                        </li>
                                        <li className="list-group-item">
                                            <b>Stock</b> <span className="float-right">{productoStock} {productoUnidad}</span>
                                        </li>
                                    </ul>
                                    <a href="#" className="btn btn-primary btn-block"><b>Agregar al Carrito</b></a>
                                </div>
                            </div>

                            {/* About Product Box */}
                            <div className="card card-primary">
                                <div className="card-header">
                                    <h3 className="card-title">Información del Producto</h3>
                                </div>
                                <div className="card-body">
                                    <strong><i className="fas fa-tag mr-1"></i> Categoría</strong>
                                    <p className="text-muted">{productoCategoria}</p>
                                    <hr />

                                    <strong><i className="fas fa-map-marker-alt mr-1"></i> Origen</strong>
                                    <p className="text-muted">{productoOrigen}</p>
                                    <hr />

                                    <strong><i className="fas fa-weight mr-1"></i> Unidad</strong>
                                    <p className="text-muted">{productoUnidad}</p>
                                    <hr />
                                    <strong><i className="fas fa-cubes mr-1"></i> Stock Disponible</strong>
                                    <p className="text-muted">{productoStock} {productoUnidad}</p>
                                    <hr />

                                    <strong><i className="fas fa-dollar-sign mr-1"></i> Precio</strong>
                                    <p className="text-muted">${productoPrecio.toLocaleString()} CLP</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-9">
                            <div className="card">
                                <div className="card-header p-2">
                                    <ul className="nav nav-pills">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#descripcion" data-toggle="tab">Descripción</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#sostenibilidad" data-toggle="tab">Sostenibilidad</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#recetas" data-toggle="tab">Recetas Sugeridas</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#impacto" data-toggle="tab">Impacto Ambiental</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="card-body">
                                    <div className="tab-content">
                                        {/* Descripción Tab */}
                                        <div className="active tab-pane" id="descripcion">
                                            <div className="post">
                                                <div className="user-block">
                                                    <img className="img-circle img-bordered-sm" src="/dist/img/banner/Logo.png" alt="HuertoHogar" />
                                                    <span className="username">
                                                        <a href="#">HuertoHogar</a>
                                                    </span>
                                                    <span className="description">Producto fresco y de calidad</span>
                                                </div>
                                                <p>{productoDescripcion}</p>
                                            </div>
                                        </div>

                                        {/* Sostenibilidad Tab */}
                                        <div className="tab-pane" id="sostenibilidad">
                                            <h4>Compromiso con la Sostenibilidad</h4>
                                            <p>
                                                Este producto de <strong>{productoOrigen}</strong> es cultivado
                                                bajo prácticas agrícolas sostenibles que garantizan su calidad
                                                y valor nutricional, apoyando a comunidades locales y reduciendo
                                                la huella de carbono.
                                            </p>
                                            <div className="callout callout-info mt-3">
                                                <h5>🌱 Nuestro Compromiso</h5>
                                                <p className="mb-0">
                                                    Al comprar este producto, apoyas la agricultura local sostenible
                                                    y contribuyes a un modelo de consumo más responsable.
                                                </p>
                                            </div>
                                        </div>

                                        {/* Recetas Sugeridas Tab */}
                                        <div className="tab-pane" id="recetas">
                                            <h4>Recetas Sugeridas con {productoNombre}</h4>
                                            <p>
                                                ¡Inspírate! Aquí tienes algunas ideas para incorporar este producto en tu cocina diaria:
                                            </p>
                                            <ul className="list-group list-group-unbordered mb-3">
                                                <li className="list-group-item">
                                                    <i className="fas fa-utensils mr-2"></i> Ensalada fresca de {productoNombre} y nueces.
                                                </li>
                                                <li className="list-group-item">
                                                    <i className="fas fa-utensils mr-2"></i> Batido energizante de {productoNombre} y jengibre.
                                                </li>
                                                <li className="list-group-item">
                                                    <i className="fas fa-utensils mr-2"></i> Tarta rústica de {productoNombre} y miel.
                                                </li>
                                            </ul>
                                            <p className="text-muted mt-3">
                                                *Nota: Esta es una sección de ejemplo. En una aplicación real, estos datos vendrían de una base de datos.
                                            </p>
                                        </div>

                                        {/* Impacto Ambiental Tab */}
                                        <div className="tab-pane" id="impacto">
                                            <h4>Huella de Carbono y Contribución Local</h4>
                                            <div className="callout callout-success">
                                                <h5><i className="fas fa-leaf mr-2"></i> Huella de Carbono</h5>
                                                <p>
                                                    La huella de carbono de este producto es un <strong>20% menor</strong> que el promedio, gracias a su origen local en <strong>{productoOrigen}</strong> y el uso de transporte eficiente.
                                                </p>
                                            </div>
                                            <div className="callout callout-warning">
                                                <h5><i className="fas fa-hand-holding-heart mr-2"></i> Contribución Local</h5>
                                                <p>
                                                    Tu compra apoya directamente a <strong>pequeños agricultores</strong> de la zona, fomentando la economía circular y la producción responsable.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default DetalleProducto;