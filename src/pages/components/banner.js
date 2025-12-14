import React from 'react';

function BannerHuerto() {
    return (
        <div className='content-wrapper' style={{ backgroundColor: '#f4f6f9' }}>
            {/* Título */}
            <div className="text-center py-4">
                <h2 style={{
                    color: '#2e8b57ff',
                    fontWeight: 'bold',
                    fontSize: '2.8rem', 
                    marginBottom: '0',
                    textShadow: '1px 1px 2px rgba(0,0,0,0.1)', 
                    marginBottom: '0'
                }}>
                    Bienvenidos a Huerto Hogar
                </h2>
            </div>

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
                            <img src="/dist/img/banner/banner1.png" alt="Huerto Hogar" style={{
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
        </div>
    );
}

export default BannerHuerto;