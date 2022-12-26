import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from "../context";
import useStorage from '../hooks/storage/useStorage';
import { ILogin } from '../request/Login';
import { sendLoginDataWS } from '../services/LoginServiceAPI';


function PaginaLogin() {

  const { token, setearToken } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const { saveItem } = useStorage();
  const navigate = useNavigate();

  const AccionLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    let objectToPost: ILogin = {
      email: email,
      password: password,
    };
    try {
      const response = await sendLoginDataWS(objectToPost);
      setearToken(response.data);
      setError(false);
      saveItem("token", response.data);
      navigate("/administracion")
    } catch (error: any) {
      console.log('Fallo Autenticacion');
      setError(true);
    }
  };


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
                    <h2 className="mb-2">Bienvenido</h2>
                    {error ?
                      <p style={{ color: 'red' }}><strong>Credenciales incorrectas.</strong> Intenta nuevamente</p>
                      :
                      <p>Ingresa tu correo electronico y password para acceder a los servicios.</p>
                    }
                    <form onSubmit={(e) => AccionLogin(e)} autoComplete='off'>
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="floating-label form-group">
                            <input className="floating-input form-control" type="email" placeholder=" " autoComplete='off' onChange={(e) => setEmail(e.target.value)}/>
                            <label>Email</label>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="floating-label form-group">
                            <input className="floating-input form-control" type="password" placeholder=" " autoComplete="new-password" onChange={(e) => setPassword(e.target.value)}/>
                            <label>Password</label>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="custom-control custom-checkbox mb-3">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Recordarme</label>
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <a href="auth-recoverpw.html" className="text-primary float-right">¿Olvidaste tu password?</a>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary" >Ingresar</button>
                      <p className="mt-3" >
                        ¿Aun no tienes cuenta? <Link to={'/register'} className="text-primary">Registrarme</Link>
                      </p>
                    </form>
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

export default PaginaLogin