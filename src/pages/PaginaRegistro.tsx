import React, { useContext, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from "../context";
import useStorage from '../hooks/storage/useStorage';
import { ILogin } from '../request/Login';
import { IRegistro } from '../request/Registro';
import { sendLoginDataWS, sendRegistroDataWS } from '../services/LoginServiceAPI';


function PaginaRegistro() {

  const { token, setearToken } = useContext(AppContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat, setRepeat] = useState("");
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  const AccionRegistro = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if(password==repeat){
      console.log('PASS coinciden')
      let objectToPost: IRegistro = {
        email: email,
        password: password,
      };
      try {
        const response = await sendRegistroDataWS(objectToPost);
        setearToken(response.data);
        setError(false);
        navigate("/confirm")
      } catch (error: any) {
        console.log('Fallo Autenticacion');
        setError(true);
      }
    }else{
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
                    <h2 className="mb-2">Registro</h2>
                    {error ?
                      <p style={{ color: 'red' }}><strong>Los passwords no coinciden.</strong> Intenta nuevamente</p>
                      :
                      <p>Ingresa tu correo electronico y un password para crear tu cuenta</p>
                    }
                    <form onSubmit={(e) => AccionRegistro(e)} autoComplete="off">
                      <div className="row">
                        <div className="col-lg-12">
                          <div className="floating-label form-group">
                            <input className="floating-input form-control" autoComplete='off' type="text" placeholder=" " onChange={(e) => setEmail(e.target.value)}/>
                            <label>E-Mail</label>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="floating-label form-group">
                            <input className="floating-input form-control" type="password" autoComplete="new-password" placeholder=" " onChange={(e) => setPassword(e.target.value)}/>
                            <label>Password</label>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="floating-label form-group">
                            <input className="floating-input form-control" type="password" placeholder=" " onChange={(e) => setRepeat(e.target.value)}/>
                            <label>Confirmar Password</label>
                          </div>
                        </div>
                        <div className="col-lg-12">
                          <div className="custom-control custom-checkbox mb-3">
                            <input type="checkbox" className="custom-control-input" id="customCheck1" />
                            <label className="custom-control-label" htmlFor="customCheck1">Acepto los terminos y condiciones</label>
                          </div>
                        </div>
                      </div>
                      <button type="submit" className="btn btn-primary">Registrarme</button>
                      <p className="mt-3">
                        ¿Ya tienes una cuenta? <Link to={'/login'} className="text-primary">Ingresa aqui</Link>
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

export default PaginaRegistro