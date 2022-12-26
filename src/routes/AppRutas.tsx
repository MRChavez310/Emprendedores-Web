import { Fragment, useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { AppContext } from "../context";
import { obtenerSubdominio } from "../helpers/Subdominio";
import ErrorSesionExpirada from "../pages/ErrorSessionExpirada";
import PaginaActivarCuenta from "../pages/PaginaActivarCuenta";
import PaginaAdmin from "../pages/PaginaAdmin";
import PaginaConfirmCorreo from "../pages/PaginaConfirmCorreo";
import PaginaLanding from "../pages/PaginaLanding";
import PaginaLogin from "../pages/PaginaLogin";
import PaginaNegocio from "../pages/PaginaNegocio";
import PaginaRegistro from "../pages/PaginaRegistro";


function AppRutas() {

  const { token } = useContext(AppContext);

  return (
    <Fragment>
      <Routes>
        {obtenerSubdominio() !== 'land' &&
          <Route path="/" element={<PaginaAdmin ></PaginaAdmin>} />
        }
        {obtenerSubdominio() === 'land' &&
          <>
            <Route path="/" element={<PaginaLanding ></PaginaLanding>} />
            <Route path="/login" element={<PaginaLogin ></PaginaLogin>} />
            <Route path="/register" element={<PaginaRegistro ></PaginaRegistro>} />
            <Route path="/confirm" element={<PaginaConfirmCorreo ></PaginaConfirmCorreo>} />
            <Route path="/activate" element={<PaginaActivarCuenta ></PaginaActivarCuenta>} />
            <Route path="/expired" element={<ErrorSesionExpirada ></ErrorSesionExpirada>} />
            {token !== undefined && <Route path="/administracion" element={<PaginaAdmin></PaginaAdmin>} />}
            {token !== undefined && <Route path="/administracion/negocios" element={<PaginaAdmin></PaginaAdmin>} />}
          </>
        }
      </Routes>
    </Fragment>
  );
}

export default AppRutas;
