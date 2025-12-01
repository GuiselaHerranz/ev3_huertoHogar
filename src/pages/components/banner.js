import React from 'react';

function Banner() {
    return (
        <div className="content-header">
            <div className="container-fluid">
                <div className="row mb-2">
                    <div className="col-sm-12">
                        <div id="carouselHuerto" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselHuerto" data-bs-slide-to="0" className="active"></button>
                                <button type="button" data-bs-target="#carouselHuerto" data-bs-slide-to="1"></button>
                                <button type="button" data-bs-target="#carouselHuerto" data-bs-slide-to="2"></button>
                            </div>
                            
                            <div className="carousel-inner rounded">
                                <div className="carousel-item active">
                                    <img 
                                        src="/dist/img/banner/banner1.png" 
                                        className="d-block w-100" 
                                        alt="Huerto orgánico"
                                        style={{ height: '400px', objectFit: 'cover' }}
                                    />
                                    
                                </div>
                                
                                <div className="carousel-item">
                                    <img 
                                        src="/dist/img/banner/banner2.png" 
                                        className="d-block w-100" 
                                        alt="Productos frescos"
                                        style={{ height: '400px', objectFit: 'cover' }}
                                    />
                                    
                                </div>
                                
                                <div className="carousel-item">
                                    <img 
                                        src="/dist/img/banner/banner3.png" 
                                        className="d-block w-100" 
                                        alt="Cultivo sostenible"
                                        style={{ height: '400px', objectFit: 'cover' }}
                                    />
                                    
                                </div>
                            </div>
                            
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselHuerto" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Anterior</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselHuerto" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Siguiente</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;