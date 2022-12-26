import React, { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { IToken } from '../request/Token';
import { activarCuentaWS } from '../services/LoginServiceAPI';

function PaginaActivarCuenta() {

    const [searchParams] = useSearchParams();
    const tokenParam = searchParams.get('token');
    const [error, seterror] = useState(false);

    React.useEffect(() => {
        console.log('-- Ingresa Pagina ACTIVAS CUENTA')
        if (tokenParam === undefined) {
            seterror(true);
        } else {
            ActivarCuenta();
        }
    }, []);

    const ActivarCuenta = async () => {
        try {
            const request: IToken = { token: tokenParam! }
            const response = await activarCuentaWS(request);
            seterror(false);
        } catch (error: any) {
            console.log('Fallo Activacion de Cuenta');
            seterror(true);
        }
    };


    return (
        <>
            <div className="wrapper">
                <section className="login-content">
                    <img src="assets/images/login/02.png" className="lb-img" alt="" />
                    <img src="assets/images/login/03.png" className="rb-img" alt="" />
                    {!error ?
                        <div className="container h-100">
                            <div className="row align-items-center justify-content-center h-100">
                                <div className="col-12">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 mb-lg-0 mb-4 mt-lg-0 mt-4">
                                            <img src="assets/images/login/01.png" className="img-fluid w-80" alt="" />
                                        </div>
                                        <div className="col-lg-6">
                                            <h2 className="mt-3 mb-0">Cuenta Activada !</h2>
                                            <p className="cnf-mail mb-1">Tu cuenta se activo con exito, ahora puedes disfrutar de todos los beneficion de NOMBRE</p>
                                            <div className="d-inline-block w-100">
                                                <Link to={'/login'}>
                                                    <button type="button" className="btn btn-primary mt-3">Ingresar</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        :
                        <div className="container h-100">
                            <div className="row align-items-center justify-content-center h-100">
                                <div className="col-12">
                                    <div className="row align-items-center">
                                        <div className="col-lg-6 mb-lg-0 mb-4 mt-lg-0 mt-4">
                                            <img src="assets/images/login/01.png" className="img-fluid w-80" alt="" />
                                        </div>
                                        <div className="col-lg-6">
                                            <h2 className="mt-3 mb-0">Link Incorrecto !</h2>
                                            <p className="cnf-mail mb-1">El link ingresado es incorrecto, porfavor intenta nuevamente</p>
                                            <div className="d-inline-block w-100">
                                                <Link to={'/'}>
                                                    <button type="button" className="btn btn-primary mt-3">Volver al Inicio</button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                </section>
            </div>
        </>
    )
}

export default PaginaActivarCuenta