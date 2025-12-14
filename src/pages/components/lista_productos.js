import { useEffect, useState } from "react";
import axios from "axios";

function ListaProductos() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:3001/api/productos")
            .then((response) => setProductos(response.data))
            .catch((error) =>
                console.error("Error fetching products:", error)
            );
    }, []);

    const agregarAlCarrito = (producto) => {
        const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

        const existe = carrito.find(p => p.id === producto.id);

        if (existe) {
            existe.cantidad += 1;
        } else {
            carrito.push({ ...producto, cantidad: 1 });
        }

        localStorage.setItem("carrito", JSON.stringify(carrito));
    };

    return (
        <div className="content-wrapper">
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Productos</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="/">Home</a></li>
                                <li className="breadcrumb-item active"><a href="/productos">Productos</a></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>

            <section className="content">
                <div className="card card-solid">
                    <div className="card-body pb-0">
                        <div className="row">
                            {productos.map((producto) => (
                                <div
                                    key={producto.id}
                                    className="col-12 col-sm-6 col-md-4 d-flex align-items-stretch flex-column"
                                >
                                    <div className="card bg-light d-flex flex-fill">
                                        <div className="card-header text-muted border-bottom-0">
                                            {producto.category}
                                        </div>

                                        <div className="card-body pt-0">
                                            <div className="row">
                                                <div className="col-7">
                                                    <h2 className="lead">
                                                        <b>{producto.name}</b>
                                                    </h2>
                                                    <p className="text-muted text-sm">
                                                        {producto.descripcion}
                                                    </p>
                                                    <ul className="ml-4 mb-0 fa-ul text-muted">
                                                        <li className="small">
                                                            <span className="fa-li">
                                                                <i className="fas fa-dollar-sign" />
                                                            </span>
                                                            ${producto.price.toLocaleString()} CLP
                                                        </li>
                                                    </ul>
                                                </div>

                                                <div className="col-5 text-center">
                                                    <img
                                                        src={producto.image}
                                                        alt={producto.name}
                                                        className="img-fluid rounded"
                                                        style={{
                                                            aspectRatio: "1 / 1",
                                                            objectFit: "cover",
                                                            maxHeight: "150px",
                                                        }}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="card-footer">
                                            <div className="text-right">
                                                <button
                                                    className="btn btn-sm bg-teal mr-2"
                                                    onClick={() => agregarAlCarrito(producto)}
                                                >
                                                    <i className="fas fa-cart-plus" /> Agregar
                                                </button>
                                                <a
                                                    href={`/productos/${producto.id}`}
                                                    className="btn btn-sm btn-primary"
                                                >
                                                    <i className="fas fa-eye" /> Ver Detalle
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ListaProductos;
