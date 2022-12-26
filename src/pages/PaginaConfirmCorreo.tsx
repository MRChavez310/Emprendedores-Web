import React from 'react'
import { Link } from 'react-router-dom'

function PaginaConfirmCorreo() {
    return (
        <>
            <div className="wrapper">
                <section className="login-content">
                    <img src="assets/images/login/02.png" className="lb-img" alt="" />
                    <img src="assets/images/login/03.png" className="rb-img" alt="" />
                    <div className="container h-100">
                        <div className="row align-items-center justify-content-center h-100">
                            <div className="col-12">
                                <div className="row align-items-center">
                                    <div className="col-lg-6 mb-lg-0 mb-4 mt-lg-0 mt-4">
                                        <img src="assets/images/login/01.png" className="img-fluid w-80" alt="" />
                                    </div>
                                    <div className="col-lg-6">
                                        <img src="../assets/images/login/mail.png" className="img-fluid" width="80" alt="" />
                                        <h2 className="mt-3 mb-0">Activa tu cuenta !</h2>
                                        <p className="cnf-mail mb-1">Un email fue enviado a tu correo electronico. Porfavor revisa tu bandeja de entrada y bandeja de spam
                                            y sigue las instrucciones para activar tu cuenta.</p>
                                        <div className="d-inline-block w-100">
                                            <Link to={'/'}>
                                                <button type="button" className="btn btn-primary mt-3">Regresar</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default PaginaConfirmCorreo