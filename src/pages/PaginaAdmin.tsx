import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import { AppContext } from "../context";
import { IToken } from '../request/Token';
import { checkTokenWS } from '../services/LoginServiceAPI';
import jwt_decode from "jwt-decode";

function PaginaAdmin() {

  const { token } = useContext(AppContext);
  const [id, setid] = useState();
  const navigate = useNavigate();

  React.useEffect(() => {
    console.log('-- Ingresa Pagina ADMIN')
		if(token === undefined){
      navigate("/login")
    } else{
      const json:any = jwt_decode(token);
      setid(json.jti)
    }
	}, []);

  
  return (
    <body className=" color-light ">
      <div className="wrapper">
        <div className="iq-sidebar  sidebar-default ">
          <div className="iq-sidebar-logo d-flex align-items-center justify-content-between">
            <div  className="header-logo">
              <img src="assets/images/logo.png" className="img-fluid rounded-normal" alt="logo" />
            </div>
            <div className="iq-menu-bt-sidebar">
              <i className="las la-bars wrapper-menu"></i>
            </div>
          </div>
          <div className="data-scrollbar" data-scroll="1">
            <Sidebar></Sidebar>
            <div className="p-3"></div>
          </div>
        </div>       <div className="iq-top-navbar">
          <div className="iq-navbar-custom">
            <Navbar></Navbar>
          </div>
        </div>
        <div className="content-page">
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-12">
                {'EL ID DEL LOGIN ES: '+id}
              </div>
            </div>
          </div>
        </div>
      </div>
      <footer className="iq-footer">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-6">
              <ul className="list-inline mb-0">
                <li className="list-inline-item"><a href="backend/privacy-policy.html">Privacy Policy</a></li>
                <li className="list-inline-item"><a href="backend/terms-of-service.html">Terms of Use</a></li>
              </ul>
            </div>
            <div className="col-lg-6 text-right">
              Copyright 2020 <a href="#">ProX</a> All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </body>
  )
}

export default PaginaAdmin