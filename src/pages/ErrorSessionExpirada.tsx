
import { Link } from 'react-router-dom'

function ErrorSesionExpirada() {

  return (
    <>
      <div className="container">
        <div className="row no-gutters height-self-center">
          <div className="col-sm-12 text-center align-self-center">
            <div className="iq-error position-relative">
              <img src="assets/images/error/500.png" className="img-fluid iq-error-img" alt="" />
              <h2 className="mb-0">Oops! Tu sesion expiro.</h2>
              <p>Ingresa nuevamente con tus credenciales</p>
              <Link to={'/login'}>
                <a className="btn btn-primary d-inline-flex align-items-center mt-3" href="index.html"><i className="ri-home-4-line"></i>Ingresar</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ErrorSesionExpirada