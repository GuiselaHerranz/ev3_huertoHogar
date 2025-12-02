import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

function ListaProductos() {
    const [productos, setProductos] = useState([]);


    
    useEffect(() => {
        axios.get("hhttp://localhost:3001/api/productos")
            .then((response) => setProductos(response.data))
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    console.log(productos);

    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Productos</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="#">Dashboard</a></li>
                                <li className="breadcrumb-item active">Productos</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main content */}
            <section className="content">
                <div className="card card-solid">
                    <div className="card-body pb-0">
                        <div className="row">
                            {productos.map((producto) => {
                                return (
                                    <div key={producto.id} className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column">
                                        <div className="card bg-light d-flex flex-fill">
                                            <div className="card-header text-muted border-bottom-0">
                                                {producto.categoria}
                                            </div>
                                            <div className="card-body pt-0">
                                                <div className="row">
                                                    <div className="col-7">
                                                        <h2 className="lead"><b>{producto.name}</b></h2>
                                                        <p className="text-muted text-sm"><b>Descripción: </b> {producto.descripcion}</p>
                                                        <ul className="ml-4 mb-0 fa-ul text-muted">
                                                            <li className="small">
                                                                <span className="fa-li">
                                                                    <i className="fas fa-lg fa-dollar-sign" />
                                                                </span> 
                                                                Precio: ${producto.price.toLocaleString()} CLP
                                                            </li>
                                                            <li className="small">
                                                                <span className="fa-li">
                                                                    <i className="fas fa-lg fa-weight" />
                                                                </span> 
                                                                Unidad: {producto.unidad}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                    <div className="col-5 text-center">
                                                        <img src={producto.image} alt="product-image" className="img-circle img-fluid" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="card-footer">
                                                <div className="text-right">
                                                    <a href="#" className="btn btn-sm bg-teal">
                                                        <i className="fas fa-cart-plus" />
                                                    </a>
                                                    <a href={'/productos/' + producto.id} className="btn btn-sm btn-primary">
                                                        <i className="fas fa-eye" /> Ver Detalle
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="card-footer">
                        <nav aria-label="Products Page Navigation">
                            <ul className="pagination justify-content-center m-0">
                                <li className="page-item active"><a className="page-link" href="#">1</a></li>
                                <li className="page-item"><a className="page-link" href="#">2</a></li>
                                <li className="page-item"><a className="page-link" href="#">3</a></li>
                                <li className="page-item"><a className="page-link" href="#">4</a></li>
                                <li className="page-item"><a className="page-link" href="#">5</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ListaProductos;