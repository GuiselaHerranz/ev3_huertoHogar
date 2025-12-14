import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductosDestacados() {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3001/api/productos")
            .then((response) => {
                setProductos(response.data.slice(0, 3));// Solo toma 3 productos
            })
            .catch((error) => console.error("Error:", error));
    }, []);

    return (
        <div className='content-wrapper bg-light py-5'>
            <div className='container mt-3'>
                {/* Título */}
                <div className='row'>
                    <div className='col-lg-12 mb-4'>
                        <h1 className='fw-bold text-center text-success'>Productos Destacados</h1>
                    </div>
                </div>


                <div className='row justify-content-center'>
                    {productos.map((producto) => (
                        <div key={producto.id} className='col-lg-4 col-md-6 mb-4'>
                            <Card className='h-100 shadow border-0 rounded-bottom'>
                                <Card.Img
                                    variant="top"
                                    src={producto.image}
                                    alt={producto.name}
                                    className="rounded-top"
                                    style={{ height: '200px', objectFit: 'cover' }}
                                    onError={(e) => {
                                        e.target.src = "https://via.placeholder.com/300x200/28a745/ffffff?text=Producto";
                                    }}
                                />
                                <Card.Body className='d-flex flex-column'>
                                    <Card.Title>{producto.name}</Card.Title>
                                    <Card.Text className='flex-grow-1'>
                                        {producto.description || 'Producto fresco cultivado localmente.'}
                                    </Card.Text>
                                    <div className='d-flex justify-content-between align-items-center mt-auto'>
                                        <span className='fw-bold text-success fs-5'>
                                            ${producto.price.toLocaleString()}/{producto.unit}
                                        </span>
                                        <div className="d-flex gap-2">
                                            <Button variant="success" size="sm">
                                                <i className="fas fa-cart-plus"></i>
                                            </Button>
                                            <Link 
                                                to={`/productos/${producto.id}`}
                                                className="btn btn-primary btn-sm"
                                            >
                                                <i className="fas fa-eye"></i>
                                            </Link>
                                        </div>
                                    </div>
                                </Card.Body>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    
    );
}

export default ProductosDestacados;