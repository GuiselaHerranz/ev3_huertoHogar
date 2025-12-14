import React from "react";

function FormularioContacto() {

    return (
        <div className="content-wrapper">
            {/* Content Header (Page header) */}
            <section className="content-header">
                <div className="container-fluid">
                    <div className="row mb-2">
                        <div className="col-sm-6">
                            <h1>Contáctanos</h1>
                        </div>
                        <div className="col-sm-6">
                            <ol className="breadcrumb float-sm-right">
                                <li className="breadcrumb-item"><a href="/">Inicio</a></li>
                                <li className="breadcrumb-item active">Contáctanos</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </section>
            
            {/* Main content */}
            <section className="content">
                <div className="container-fluid">
                    <div className="row justify-content-center">
                        <div className="col-lg-10">
                            <div className="card card-success shadow">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        <i className="fas fa-envelope mr-2"></i>
                                        Escríbenos
                                    </h3>
                                </div>
                                <div className="card-body row">
                                    {/* Información de contacto - Lado izquierdo */}
                                    <div className="col-md-5 text-center d-flex align-items-center justify-content-center p-4">
                                        <div>
                                            <div className="mb-4">
                                                <img 
                                                    src="/dist/img/banner/Logo.png" 
                                                    alt="HuertoHogar" 
                                                    className="img-fluid mb-3" 
                                                    style={{ maxHeight: '80px' }}
                                                />
                                                <h2 className="text-success fw-bold">Huerto<strong>Hogar</strong></h2>
                                            </div>
                                            
                                            <div className="text-left">
                                                <div className="mb-3">
                                                    <h5 className="text-success">
                                                        <i className="fas fa-map-marker-alt mr-2"></i>
                                                        Ubicación
                                                    </h5>
                                                    <p className="mb-0">Av. Principal 1234</p>
                                                    <p className="mb-0">Santiago, Región Metropolitana</p>
                                                    <p>Chile</p>
                                                </div>
                                                
                                                <div className="mb-3">
                                                    <h5 className="text-success">
                                                        <i className="fas fa-phone mr-2"></i>
                                                        Teléfono
                                                    </h5>
                                                    <p>+56 9 1234 5678</p>
                                                </div>
                                                
                                                <div className="mb-3">
                                                    <h5 className="text-success">
                                                        <i className="fas fa-envelope mr-2"></i>
                                                        Email
                                                    </h5>
                                                    <p>contacto@huertohogar.cl</p>
                                                </div>
                                                
                                                <div className="mb-3">
                                                    <h5 className="text-success">
                                                        <i className="fas fa-clock mr-2"></i>
                                                        Horario de atención
                                                    </h5>
                                                    <p className="mb-0">Lunes a Viernes: 9:00 - 18:00 hrs</p>
                                                    <p>Sábado: 9:00 - 14:00 hrs</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    {/* Formulario - Lado derecho */}
                                    <div className="col-md-7 p-4">
                                        <p className="text-muted mb-4">
                                            ¿Tienes alguna consulta, sugerencia o necesitas ayuda con tu pedido? 
                                            ¡Estamos aquí para ayudarte!
                                        </p>
                                        
                                        <div className="form-group">
                                            <label htmlFor="inputName" className="text-success fw-bold">
                                                <i className="fas fa-user mr-1"></i>
                                                Nombre completo
                                            </label>
                                            <input 
                                                type="text" 
                                                id="inputName" 
                                                className="form-control" 
                                                placeholder="Ingresa tu nombre"
                                            />
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="inputEmail" className="text-success fw-bold">
                                                <i className="fas fa-envelope mr-1"></i>
                                                Correo electrónico
                                            </label>
                                            <input 
                                                type="email" 
                                                id="inputEmail" 
                                                className="form-control" 
                                                placeholder="ejemplo@correo.com"
                                            />
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="inputSubject" className="text-success fw-bold">
                                                <i className="fas fa-tag mr-1"></i>
                                                Asunto
                                            </label>
                                            <select id="inputSubject" className="form-control">
                                                <option value="">Selecciona un asunto</option>
                                                <option value="consulta">Consulta general</option>
                                                <option value="pedido">Seguimiento de pedido</option>
                                                <option value="producto">Información de producto</option>
                                                <option value="devolucion">Devolución o reclamo</option>
                                                <option value="sugerencia">Sugerencia</option>
                                                <option value="otro">Otro</option>
                                            </select>
                                        </div>
                                        
                                        <div className="form-group">
                                            <label htmlFor="inputMessage" className="text-success fw-bold">
                                                <i className="fas fa-comment-dots mr-1"></i>
                                                Mensaje
                                            </label>
                                            <textarea 
                                                id="inputMessage" 
                                                className="form-control" 
                                                rows={5} 
                                                placeholder="Escribe tu mensaje aquí..."
                                            />
                                        </div>
                                        
                                        <div className="form-group mt-4">
                                            <button className="btn btn-success btn-lg w-100">
                                                <i className="fas fa-paper-plane mr-2"></i>
                                                Enviar mensaje
                                            </button>
                                        </div>
                                        
                                        <div className="mt-3 text-center">
                                            <p className="text-muted small">
                                                <i className="fas fa-info-circle mr-1"></i>
                                                Te responderemos dentro de las próximas 24 horas hábiles.
                                            </p>
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

export default FormularioContacto;