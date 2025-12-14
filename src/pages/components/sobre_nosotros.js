import React from 'react';

function Us() {
    return (
        <div className="wrapper">
            <div className="content-wrapper" style={{ backgroundColor: '#f4f6f9', minHeight: '100vh' }}>

                {/* Banner*/}
                <div className="container-fluid mb-4">
                    <div className="row">
                        <div className="col-12">
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                backgroundColor: '#f4f6f9',
                                padding: '20px 0'
                            }}>
                                <img src="/dist/img/banner/banner3.png" alt="Huerto Hogar" style={{
                                    width: '90%',
                                    maxWidth: '1200px',
                                    height: 'auto',
                                    maxHeight: '500px',
                                    borderRadius: '15px',
                                    objectFit: 'contain'
                                }}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Header */}
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row mb-2">
                            <div className="col-sm-12">
                                <h1 className="m-0 text-center text-success">Sobre Nosotros</h1>
                            </div>
                        </div>
                    </div>
                </div>

                 {/* Main content */}
                <section className="content">
                    <div className="container-fluid">
                        
                        <div className="row justify-content-center">
                            <div className="col-xl-10 col-lg-11"> 
                                
                                <div className="row justify-content-center">
                                    {/* Tarjeta 1: Misión */}
                                    <div className="col-lg-6 col-md-6 mb-4">
                                        <div className="card card-success h-100 shadow border-0">
                                            <div className="card-header" style={{ backgroundColor: '#37a968ff', borderBottom: '2px solid #2e8b57ff' }}>
                                                <h3 className="card-title mb-0">
                                                    <i className="fas fa-bullseye mr-2"></i>
                                                    🍋 Nuestra Misión
                                                </h3>
                                            </div>
                                            <div className="card-body">
                                                <p className="mb-4">
                                                    En HuertoHogar, llevamos más de 6 años acercando la frescura y calidad del campo
                                                    chileno directamente a tu puerta. Operamos en 9 puntos estratégicos a lo largo del país,
                                                    garantizando productos siempre frescos y naturales.
                                                </p>

                                                <h5 className="fw-bold mb-3 text-dark">Lo que nos hace diferentes</h5>
                                                <div className="mb-3">
                                                    <div className="d-flex align-items-center mb-2">
                                                        <span className="text-success me-2">🍓</span>
                                                        <span>Productos directamente del campo</span>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-2">
                                                        <span className="text-success me-2">🍉</span>
                                                        <span>Apoyo a agricultores locales</span>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-2">
                                                        <span className="text-success me-2">🍑</span>
                                                        <span>Frescura garantizada</span>
                                                    </div>
                                                    <div className="d-flex align-items-center mb-2">
                                                        <span className="text-success me-2">🫐</span>
                                                        <span>Envíos a todo Chile</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Tarjeta 2: Ubicaciones */}
                                    <div className="col-lg-6 col-md-6 mb-4">
                                        <div className="card card-success h-100 shadow border-0">
                                            <div className="card-header" style={{ backgroundColor: '#37a968ff', borderBottom: '2px solid #2e8b57ff' }}>
                                                <h3 className="card-title mb-0">
                                                    <i className="fas fa-map-marker-alt mr-2"></i>
                                                    🍋 Nuestras Ubicaciones
                                                </h3>
                                            </div>
                                            <div className="card-body">
                                                <p className="mb-3">Estamos presentes en 7 ciudades principales:</p>

                                                <div className="row mb-4">
                                                    <div className="col-6">
                                                        <div className="d-flex align-items-center mb-2">
                                                            <span className="text-success me-2">🫑</span>
                                                            <span>Santiago</span>
                                                        </div>
                                                        <div className="d-flex align-items-center mb-2">
                                                            <span className="text-success me-2">🍅</span>
                                                            <span>Puerto Montt</span>
                                                        </div>
                                                        <div className="d-flex align-items-center mb-2">
                                                            <span className="text-success me-2">🥕</span>
                                                            <span>Villarica</span>
                                                        </div>
                                                        <div className="d-flex align-items-center mb-2">
                                                            <span className="text-success me-2">🥑</span>
                                                            <span>Nacimiento</span>
                                                        </div>
                                                    </div>
                                                    <div className="col-6">
                                                        <div className="d-flex align-items-center mb-2">
                                                            <span className="text-success me-2">🥬</span>
                                                            <span>Viña del Mar</span>
                                                        </div>
                                                        <div className="d-flex align-items-center mb-2">
                                                            <span className="text-success me-2">🌽</span>
                                                            <span>Valparaíso</span>
                                                        </div>
                                                        <div className="d-flex align-items-center mb-2">
                                                            <span className="text-success me-2">🥦</span>
                                                            <span>Concepción</span>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Experiencia */}
                                                <div className="text-center p-3" style={{
                                                    backgroundColor: 'white',
                                                    borderRadius: '10px',
                                                    border: '2px solid #37a968ff',
                                                    marginTop: 'auto'
                                                }}>
                                                    <div className="fw-bold text-success fs-4">6+ años</div>
                                                    <p className="text-muted mb-0">de experiencia sirviendo a familias chilenas</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/*Nujestros valores*/}
                                <div className="row mt-4">
                                    <div className="col-12">
                                        <div className="card shadow border-0" style={{ 
                                            backgroundColor: '#f0f9f0',
                                            borderRadius: '15px',
                                            border: '2px solid #37a968ff'
                                        }}>
                                            <div className="card-header border-0" style={{ 
                                                backgroundColor: '#37a968ff',
                                                borderRadius: '15px 15px 0 0'
                                            }}>
                                                <h3 className="card-title mb-0 text-white">
                                                    <i className="fas fa-heart mr-2"></i>
                                                    Nuestros Valores
                                                </h3>
                                            </div>
                                            <div className="card-body">
                                                <div className="row justify-content-center">
                                                    <div className="col-xl-3 col-md-6 col-sm-6 text-center mb-3">
                                                        <div className="p-4 rounded" style={{ 
                                                            backgroundColor: 'white',
                                                            border: '2px solid #37a968ff',
                                                            height: '100%',
                                                            borderRadius: '10px'
                                                        }}>
                                                            <div className="mb-3" style={{ fontSize: '3rem', color: '#37a968ff' }}>🌱</div>
                                                            <h5 className="fw-bold mb-2" style={{ color: '#2e8b57ff' }}>Sustentabilidad</h5>
                                                            <p className="small text-muted mb-0">Cultivos responsables con el medio ambiente</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3 col-md-6 col-sm-6 text-center mb-3">
                                                        <div className="p-4 rounded" style={{ 
                                                            backgroundColor: 'white',
                                                            border: '2px solid #37a968ff',
                                                            height: '100%',
                                                            borderRadius: '10px'
                                                        }}>
                                                            <div className="mb-3" style={{ fontSize: '3rem', color: '#37a968ff' }}>🤝</div>
                                                            <h5 className="fw-bold mb-2" style={{ color: '#2e8b57ff' }}>Comunidad</h5>
                                                            <p className="small text-muted mb-0">Apoyo a productores y agricultores locales</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3 col-md-6 col-sm-6 text-center mb-3">
                                                        <div className="p-4 rounded" style={{ 
                                                            backgroundColor: 'white',
                                                            border: '2px solid #37a968ff',
                                                            height: '100%',
                                                            borderRadius: '10px'
                                                        }}>
                                                            <div className="mb-3" style={{ fontSize: '3rem', color: '#37a968ff' }}>⭐</div>
                                                            <h5 className="fw-bold mb-2" style={{ color: '#2e8b57ff' }}>Calidad</h5>
                                                            <p className="small text-muted mb-0">Productos premium seleccionados cuidadosamente</p>
                                                        </div>
                                                    </div>
                                                    <div className="col-xl-3 col-md-6 col-sm-6 text-center mb-3">
                                                        <div className="p-4 rounded" style={{ 
                                                            backgroundColor: 'white',
                                                            border: '2px solid #37a968ff',
                                                            height: '100%',
                                                            borderRadius: '10px'
                                                        }}>
                                                            <div className="mb-3" style={{ fontSize: '3rem', color: '#37a968ff' }}>🚚</div>
                                                            <h5 className="fw-bold mb-2" style={{ color: '#2e8b57ff' }}>Entrega Rápida</h5>
                                                            <p className="small text-muted mb-0">Frescura garantizada en cada entrega</p>
                                                        </div>
                                                    </div>
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
        </div>
    );
}

export default Us;