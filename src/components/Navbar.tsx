import React, { useContext } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../context';
import useStorage from '../hooks/storage/useStorage';

function Navbar() {

    const history = useNavigate();
    const { deleteItem } = useStorage()
    const { token, setearToken } = useContext(AppContext);

    const LogoutAction = () => {
        console.log('Entra accion logout')
        if (token !== undefined) {
            console.log('Token existente')
            deleteItem("token")
            /*setear token undefines pendiente*/
            history("/")
        }else{
            console.log('Token falta')
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light p-0">
            <div className="iq-navbar-logo d-flex align-items-center justify-content-between">
                <i className="ri-menu-line wrapper-menu"></i>
                <a href="index.html" className="header-logo">
                    <img src="assets/images/logo.png" className="img-fluid rounded-normal" alt="logo" />
                </a>
            </div>
            <div className="iq-search-bar device-search">
                <form action="#" className="searchbox">
                    <input type="text" className="text search-input" placeholder="Type here to search..." />
                    <a className="search-link" href="#"><i className="ri-search-line"></i></a>
                </form>
            </div>
            <div className="d-flex align-items-center">
                <div className="change-mode">
                    <div className="custom-control custom-switch custom-switch-icon custom-control-inline">
                        <div className="custom-switch-inner">
                            <p className="mb-0"> </p>
                            <input type="checkbox" className="custom-control-input" id="dark-mode" data-active="true" />
                            <label className="custom-control-label" htmlFor="dark-mode" data-mode="toggle">
                                <span className="switch-icon-left"><i className="a-left"></i></span>
                                <span className="switch-icon-right"><i className="a-right"></i></span>
                            </label>
                        </div>
                    </div>
                </div>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-label="Toggle navigation">
                    <i className="ri-menu-3-line"></i>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ml-auto navbar-list align-items-center">
                        <li className="nav-item nav-icon search-content">
                            <a href="#" className="search-toggle rounded" id="dropdownSearch" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="ri-search-line"></i>
                            </a>
                            <div className="iq-search-bar iq-sub-dropdown dropdown-menu" aria-labelledby="dropdownSearch">
                                <form action="#" className="searchbox p-2">
                                    <div className="form-group mb-0 position-relative">
                                        <input type="text" className="text search-input font-size-12" placeholder="type here to search..." />
                                        <a href="#" className="search-link"><i className="las la-search"></i></a>
                                    </div>
                                </form>
                            </div>
                        </li>
                        <li className="nav-item lang">
                            <a className="search-toggle language-title dropdown-toggle" id="dropdownMenuButton4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" href="#"><span className="ripple rippleEffect" style={{ width: '98px', height: '98px', top: '-15px', left: '56.2969px' }}></span>
                                <img src="assets/images/small/flag-01.png" alt="img-flaf" className="img-fluid mr-1" style={{ height: '16px', width: '16px', minWidth: '16px' }} /> EN <i className="ri-arrow-down-s-line"></i></a>
                            <div className="iq-sub-dropdown dropdown-menu" aria-labelledby="dropdownMenuButton4">
                                <div className="p-3">
                                    <a className="iq-sub-card" href="#"><img src="assets/images/small/flag-02.png" alt="img-flaf" className="img-fluid mr-2" />French</a>
                                    <a className="iq-sub-card" href="#"><img src="assets/images/small/flag-03.png" alt="img-flaf" className="img-fluid mr-2" />Spanish</a>
                                    <a className="iq-sub-card" href="#"><img src="assets/images/small/flag-04.png" alt="img-flaf" className="img-fluid mr-2" />Italian</a>
                                    <a className="iq-sub-card" href="#"><img src="assets/images/small/flag-05.png" alt="img-flaf" className="img-fluid mr-2" />German</a>
                                    <a className="iq-sub-card" href="#"><img src="assets/images/small/flag-06.png" alt="img-flaf" className="img-fluid mr-2" />Japanese</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item nav-icon dropdown">
                            <a href="#" className="search-toggle dropdown-toggle" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="ri-mail-line"></i>
                                <span className="bg-primary count-mail"></span>
                            </a>
                            <div className="iq-sub-dropdown dropdown-menu" aria-labelledby="dropdownMenuButton2">
                                <div className="card shadow-none m-0">
                                    <div className="card-body p-0 ">
                                        <div className="cust-title p-3">
                                            <h5 className="mb-0">All Messages</h5>
                                        </div>
                                        <div className="p-3">
                                            <a href="#" className="iq-sub-card">
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded-small" src="assets/images/user/01.jpg" alt="01" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0">Barry Emma Watson <small className="badge badge-success float-right">New</small></h6>
                                                        <small className="float-left font-size-12">12:00 PM</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="iq-sub-card">
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded-small" src="assets/images/user/02.jpg" alt="02" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Lorem Ipsum Watson</h6>
                                                        <small className="float-left font-size-12">20 Apr</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="iq-sub-card">
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded-small" src="assets/images/user/03.jpg" alt="03" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Why do we use it? <small className="badge badge-success float-right">New</small></h6>
                                                        <small className="float-left font-size-12">1:24 PM</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="iq-sub-card" >
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded-small" src="assets/images/user/04.jpg" alt="04" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0">Variations Passages <small className="badge badge-success float-right">New</small></h6>
                                                        <small className="float-left font-size-12">5:45 PM</small>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="iq-sub-card" >
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded-small" src="assets/images/user/05.jpg" alt="05" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Lorem Ipsum generators</h6>
                                                        <small className="float-left font-size-12">1 day ago</small>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <a className="right-ic btn btn-primary btn-block position-relative p-2" href="#" role="button">
                                            <div className="dd-icon"><i className="las la-arrow-right mr-0"></i></div>
                                            View All
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item nav-icon dropdown">
                            <a href="#" className="search-toggle dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" >
                                <i className="ri-notification-line"></i>
                                <span className="bg-primary dots"></span>
                            </a>
                            <div className="iq-sub-dropdown dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <div className="card shadow-none m-0">
                                    <div className="card-body p-0 ">
                                        <div className="cust-title p-3">
                                            <h5 className="mb-0">All Notifications</h5>
                                        </div>
                                        <div className="p-3">
                                            <a href="#" className="iq-sub-card" >
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded-small" src="assets/images/user/01.jpg" alt="01" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0">Emma Watson Barry <small className="badge badge-success float-right">New</small></h6>
                                                        <p className="mb-0">95 MB</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="iq-sub-card" >
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded-small" src="assets/images/user/02.jpg" alt="02" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">New customer is join</h6>
                                                        <p className="mb-0">Cyst Barry</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="iq-sub-card" >
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded-small" src="assets/images/user/03.jpg" alt="03" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Two customer is left</h6>
                                                        <p className="mb-0">Cyst Barry</p>
                                                    </div>
                                                </div>
                                            </a>
                                            <a href="#" className="iq-sub-card" >
                                                <div className="media align-items-center">
                                                    <div className="">
                                                        <img className="avatar-40 rounded-small" src="assets/images/user/04.jpg" alt="04" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">New Mail from Fenny <small className="badge badge-success float-right">New</small></h6>
                                                        <p className="mb-0">Cyst Barry</p>
                                                    </div>
                                                </div>
                                            </a>
                                        </div>
                                        <a className="right-ic btn btn-primary btn-block position-relative p-2" href="#" role="button">
                                            <div className="dd-icon"><i className="las la-arrow-right mr-0"></i></div>
                                            View All
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item nav-icon dropdown">
                            <a href="#" className="search-toggle rounded dropdown-toggle" id="dropdownMenuButton3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <i className="ri-shopping-cart-2-line"></i>
                                <span className="badge badge-danger count-cart rounded">3</span>
                            </a>
                            <div className="iq-sub-dropdown dropdown-menu" aria-labelledby="dropdownMenuButton3">
                                <div className="card shadow-none m-0">
                                    <div className="card-body p-0 toggle-cart-info">
                                        <div className="cust-title d-flex align-items-center justify-content-between p-3">
                                            <h5 className="mb-0">Your Cart</h5>
                                            <h5 className="badge bg-primary-light text-primary p-2">Total: <strong>$214</strong></h5>
                                        </div>
                                        <div className="p-3">
                                            <a href="#" className="iq-sub-card">
                                                <div className="media align-items-center">
                                                    <div className="crt-img">
                                                        <img className="rounded-small avatar-40" src="assets/images/layouts/layout-9/05.png" alt="05" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">Night People book</h6>
                                                        <p className="mb-0">$32</p>
                                                    </div>
                                                    <div className="float-right font-size-24 text-danger"><i className="las la-trash-alt"></i></div>
                                                </div>
                                            </a>
                                            <a href="#" className="iq-sub-card">
                                                <div className="media align-items-center">
                                                    <div className="crt-img">
                                                        <img className="rounded-small" src="assets/images/layouts/layout-9/08.png" alt="08" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">The Sin Eater Book</h6>
                                                        <p className="mb-0">$40</p>
                                                    </div>
                                                    <div className="float-right font-size-24 text-danger"><i className="las la-trash-alt"></i></div>
                                                </div>
                                            </a>
                                            <a href="#" className="iq-sub-card">
                                                <div className="media align-items-center">
                                                    <div className="crt-img">
                                                        <img className="rounded-small" src="assets/images/layouts/layout-9/06.png" alt="06" />
                                                    </div>
                                                    <div className="media-body ml-3">
                                                        <h6 className="mb-0 ">the Orange Tree</h6>
                                                        <p className="mb-0">$30</p>
                                                    </div>
                                                    <div className="float-right font-size-24 text-danger"><i className="las la-trash-alt"></i></div>
                                                </div>
                                            </a>
                                        </div>
                                        <div className="d-flex align-items-center text-center">
                                            <a className="right-ic btn btn-primary btn-block position-relative p-2" href="#" role="button">
                                                <div className="dd-icon"><i className="las la-arrow-right mr-0"></i></div>
                                                Checkout
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item iq-full-screen"><a href="#" className="" id="btnFullscreen"><i className="ri-fullscreen-line"></i></a></li>
                        <li className="caption-content">
                            <a href="#" className="iq-user-toggle">
                                <img src="assets/images/user/1.jpg" className="img-fluid rounded" alt="user" />
                            </a>
                            <div className="iq-user-dropdown">
                                <div className="card">
                                    <div className="card-header d-flex justify-content-between align-items-center mb-0">
                                        <div className="header-title">
                                            <h4 className="card-title mb-0">Profile</h4>
                                        </div>
                                        <div className="close-data text-right badge badge-primary cursor-pointer"><i className="ri-close-fill"></i></div>
                                    </div>
                                    <div className="data-scrollbar" data-scroll="2">
                                        <div className="card-body">
                                            <div className="profile-header">
                                                <div className="cover-container text-center">
                                                    <img src="assets/images/user/1.jpg" alt="profile-bg" className="rounded img-fluid avatar-80" />
                                                    <div className="profile-detail mt-3">
                                                        <h3>Barry Tech</h3>
                                                        <p className="mb-1">Web designer</p>
                                                    </div>
                                                    <button type='button' onClick={()=>LogoutAction()}  className="btn btn-primary">Cerrar Sesion</button>
                                                </div>
                                                <div className="profile-details my-4">
                                                    <a href="app/user-profile.html" className="iq-sub-card bg-primary-light rounded-small p-2">
                                                        <div className="media align-items-center">
                                                            <div className="rounded iq-card-icon-small">
                                                                <i className="ri-file-user-line"></i>
                                                            </div>
                                                            <div className="media-body ml-3">
                                                                <h6 className="mb-0 ">My Profile</h6>
                                                                <p className="mb-0 font-size-12">View personal profile details.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="app/user-profile-edit.html" className="iq-sub-card bg-danger-light rounded-small p-2">
                                                        <div className="media align-items-center">
                                                            <div className="rounded iq-card-icon-small">
                                                                <i className="ri-profile-line"></i>
                                                            </div>
                                                            <div className="media-body ml-3">
                                                                <h6 className="mb-0 ">Edit Profile</h6>
                                                                <p className="mb-0 font-size-12">Modify your personal details.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="app/user-account-setting.html" className="iq-sub-card bg-success-light rounded-small p-2">
                                                        <div className="media align-items-center">
                                                            <div className="rounded iq-card-icon-small">
                                                                <i className="ri-account-box-line"></i>
                                                            </div>
                                                            <div className="media-body ml-3">
                                                                <h6 className="mb-0 ">Account settings</h6>
                                                                <p className="mb-0 font-size-12">Manage your account parameters.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                    <a href="app/user-privacy-setting.html" className="iq-sub-card bg-info-light rounded-small p-2">
                                                        <div className="media align-items-center">
                                                            <div className="rounded iq-card-icon-small">
                                                                <i className="ri-lock-line"></i>
                                                            </div>
                                                            <div className="media-body ml-3">
                                                                <h6 className="mb-0 ">Privacy Settings</h6>
                                                                <p className="mb-0 font-size-12">Control your privacy parameters.</p>
                                                            </div>
                                                        </div>
                                                    </a>
                                                </div>
                                                <div className="personal-details">
                                                    <h5 className="card-title mb-3 mt-3">Personal Details</h5>
                                                    <div className="row align-items-center mb-2">
                                                        <div className="col-sm-6">
                                                            <h6>Birthday</h6>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <p className="mb-0">3rd March</p>
                                                        </div>
                                                    </div>
                                                    <div className="row align-items-center mb-2">
                                                        <div className="col-sm-6">
                                                            <h6>Address</h6>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <p className="mb-0">Landon</p>
                                                        </div>
                                                    </div>
                                                    <div className="row align-items-center mb-2">
                                                        <div className="col-sm-6">
                                                            <h6>Phone</h6>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <p className="mb-0">(010)987 543 201</p>
                                                        </div>
                                                    </div>
                                                    <div className="row align-items-center mb-2">
                                                        <div className="col-sm-6">
                                                            <h6>Email</h6>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <p className="mb-0">Barry@example.com</p>
                                                        </div>
                                                    </div>
                                                    <div className="row align-items-center mb-2">
                                                        <div className="col-sm-6">
                                                            <h6>Twitter</h6>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <p className="mb-0">@Barry</p>
                                                        </div>
                                                    </div>
                                                    <div className="row align-items-center mb-2">
                                                        <div className="col-sm-6">
                                                            <h6>Facebook</h6>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <p className="mb-0">@Barry_Tech</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="p-3"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar