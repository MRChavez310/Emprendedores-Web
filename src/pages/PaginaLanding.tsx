import { Link } from 'react-router-dom'

function PaginaLanding() {

    return (
        <div className="landing-saas ">
            <header className="main-header l-header-2 header-saas">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12">
                            <nav className="navbar navbar-expand-lg navbar-light">
                                <a className="navbar-brand" href="index.html">
                                    <img src="../assets/images/logo-white.png" className="img-fluid sticky-logo" alt="img" />
                                </a>
                                <button className="navbar-toggler" type="button" data-toggle="collapse"
                                    data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                    aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="menu-btn d-inline-block" id="menu-btn">
                                        <span className="line"></span>
                                        <span className="line"></span>
                                        <span className="line"></span>
                                    </span>
                                    <span className="ion-navicon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav mr-auto w-100 justify-content-end">
                                        <li className="nav-item">
                                            <a className="nav-link active" href="#iq-home">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#iq-about">About us</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#iq-feature">Features</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#iq-blog">Blog</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#iq-contact">Contact Us</a>
                                        </li>
                                        <li className="nav-item" style={{backgroundColor:'white', paddingLeft:'10px',paddingRight:'10px',borderRadius:'10px'}}>
                                            <a className="nav-link" style={{color:'#2C74B3'}} href="/login"><strong>INGRESAR</strong></a>
                                        </li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </header>
            <div id="iq-home" className="iq-banner-06 iq-bg-over iq-over-blue-85  postion-relative overflow-hidden"
                style={{ background: 'url(../assets/images/landing-page/landing-1/01.jpg)', backgroundRepeat: 'no-repeat' }}>
                <div className="container">
                    <div className="banner-text text-center">
                        <div className="row">
                            <div className="col-md-12">
                                <h1 className="text-white">Software SaaS Platform</h1>
                                <p className="text-white pt-2 mb-2">Lorem Ipsum is simply dummy text of the printing. Lorem Ipsum has
                                    been the industry's standard dummy text <br />ever since the 1500s, when an unknown printer took a
                                    galley,</p>
                            </div>
                            <div className="col-md-12">
                                <img className="banner-img img-fluid center-block img-fluid"
                                    src="../assets/images/landing-page/landing-1/09.png" alt="" />
                            </div>

                        </div>
                    </div>
                </div>
                <div className="banner-objects">
                    <span className="banner-objects-02 iq-fadebounce">
                        <span className="iq-round"></span>
                    </span>
                    <span className="banner-objects-03 iq-fadebounce">
                        <span className="iq-round"></span>
                    </span>
                </div>
            </div>

            <div className="wrapper">
                <div className="main-content pt-5" id="iq-about">
                    <section className="pt-5 prox-fullrside-img">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="title-box text-left wow fadeInUp" data-wow-delay=".3s">
                                        <h2>Get tips & tricks on how to skyrocket your sales.</h2>
                                        <p>Faff about only a quid blower I don’t want no agro bleeding chimney<br /> pot burke tosser cras
                                            nice one boot fanny.!</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                            <div className="text-left  ">
                                                <ul className="iq-list wow fadeInUp">
                                                    <li><i className="fa fa-check"></i><span>Boost SEO ranking </span></li>
                                                    <li><i className="fa fa-check"></i><span>Marketing</span></li>
                                                    <li><i className="fa fa-check"></i><span>Visual Reviews</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="text-left  ">
                                                <ul className="iq-list wow fadeInUp" data-wow-delay=".3s">
                                                    <li><i className="fa fa-check"></i><span>Social Sharing</span></li>
                                                    <li><i className="fa fa-check"></i><span>Retention</span></li>
                                                    <li><i className="fa fa-check"></i><span>Reviews Generation</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="landing-button btn-purple mt-5" href="#"> Read More</a>
                                </div>
                                <div className="col-lg-6 mt-5 mt-lg-0 ">
                                    <div className="color-palette  mr-lg-5 mr-0  text-left purple-hover purple-arrow wow fadeInUp"
                                        data-wow-delay=".3s">
                                        <div className="media">
                                            <div className="circle-icon">
                                                <i className="las la-user-cog"></i>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="color-text mb-2">Easy to Customize</h4>
                                                <p className="mb-0">There are many variations of passages of Lorem Ipsum available.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="color-palette ml-lg-5 ml-0  text-left org-hover org-arrow wow fadeInUp"
                                        data-wow-delay=".3s">
                                        <div className="media">
                                            <div className="circle-icon">
                                                <i className="lab la-buffer"></i>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="color-text mb-2">Multipurpose layout</h4>
                                                <p className="mb-0">There are many variations of passages of Lorem Ipsum available.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="color-palette mr-lg-5 mr-0  text-left green-hover wow fadeInUp" data-wow-delay=".3s">
                                        <div className="media">
                                            <div className="circle-icon">
                                                <i className="las la-pencil-ruler"></i>
                                            </div>
                                            <div className="media-body">
                                                <h4 className="color-text mb-2">Unique Design</h4>
                                                <p className="mb-0">There are many variations of passages of Lorem Ipsum available.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="layer_wrap iq-objects  style-one right-top"><span className="iq-objects-01">
                                        <img src="../assets/images/landing-page/landing-1/400.png" alt="drive02"
                                            className="w-100 img-fluid" />
                                    </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="iq-feature" className="popup-images align-left pt-0 pb-4">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <div className="popup-images align-left  ">
                                        <div className="img-one wow fadeInUp" data-wow-delay=".3s">
                                            <img src="../assets/images/landing-page/landing-1/401.png" alt="image1" />
                                        </div>
                                        <div className="d-block"></div>
                                    </div>
                                    <div className="layer_wrap iq-objects  style-two left-top"><span className="iq-objects-02">
                                        <img src="../assets/images/landing-page/landing-1/07.png" alt="drive02" />
                                    </span><span className="iq-objects-03">
                                            <img src="../assets/images/landing-page/landing-1/08.png" alt="drive02" />
                                        </span>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="title-box text-left">
                                        <h2>Plan & Run a Dream Event with prox</h2>
                                        <p>Faff about only a quid blower I don’t want no agro bleeding chimney<br /> pot burke tosser cras
                                            nice one boot fanny.!</p>
                                    </div>
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <div className="text-left">
                                                <ul className="iq-list wow fadeInUpUp mb-0 wow fadeInUp" data-wow-delay=".3s">
                                                    <li><i className="fa fa-check"></i><span> Boost SEO </span></li>
                                                    <li><i className="fa fa-check"></i><span>Ranking</span></li>
                                                    <li><i className="fa fa-check"></i><span>Marketing</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="col-lg-6">
                                            <div className="text-left">
                                                <ul className="iq-list wow fadeInUpUp mb-0 wow fadeInUp" data-wow-delay=".3s">
                                                    <li><i className="fa fa-check"></i><span> Boost SEO </span></li>
                                                    <li><i className="fa fa-check"></i><span>Ranking</span></li>
                                                    <li><i className="fa fa-check"></i><span>Marketing</span></li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="layer_wrap iq-objects  style-one right-top"><span className="iq-objects-01">
                                            <img src="../assets/images/landing-page/landing-1/400.png" alt="drive02" />
                                        </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="prox-gradient-bg-top pb-0"
                        style={{ background: 'url(../assets/images/landing-page/landing-10/15.png)', backgroundRepeat: 'no-repeat !important', backgroundPosition: '0 0 !important' }}>
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-6">
                                    <h2 className="mb-3 wow fadeInUp" data-wow-delay=".3s">How Clients React</h2>
                                    <div className="owl-carousel our-testimonial" data-autoplay="true" data-loop="true" data-nav="false"
                                        data-dots="true" data-items="1" data-items-laptop="1" data-items-tab="1" data-items-mobile="1"
                                        data-items-mobile-sm="1">
                                        <div className="item text-left">
                                            <div className="iq-testimonial wow fadeInUp" data-wow-delay=".3s">
                                                <div className="testimonial-info">
                                                    <div className="testimonial-name mb-3">
                                                        <h5 className="d-inline mr-3">Marcal Hansh</h5>
                                                        <span className="sub-title">Business Advisor</span>
                                                    </div>
                                                </div>
                                                <p>Consectetur Lorem ipsum dolor sit amet, consectetur adip isicing elit, dolor sed do
                                                    eiusmod tempor consectetur adip isicing elit tempor.</p>
                                            </div>
                                        </div>
                                        <div className="item text-left">
                                            <div className="iq-testimonial wow fadeInUp" data-wow-delay=".3s">
                                                <div className="testimonial-info">
                                                    <div className="testimonial-name mb-3">
                                                        <h5 className="d-inline mr-3">Jancy Hanck</h5>
                                                        <span className="sub-title">CEO ProX</span>
                                                    </div>
                                                </div>
                                                <p>Richard McClintock, a Latin professor at Hampden-Sydney consectetur adip isicing
                                                    elit, sed dolore magna aliqua hampden elit.</p>
                                            </div>
                                        </div>
                                        <div className="item text-left">
                                            <div className="iq-testimonial">
                                                <div className="testimonial-info wow fadeInUp" data-wow-delay=".3s">
                                                    <div className="testimonial-name mb-3">
                                                        <h5 className="d-inline mr-3">Walhan Bobe</h5>
                                                        <span className="sub-title">CEO ProX</span>
                                                    </div>
                                                </div>
                                                <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt
                                                    ut labore et dolore Sed omnis iste ut perspiciatis.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="testimonial-circle postion-relative  ">
                                        <div className="testimonial-img">
                                            <ul className="list-inline mb-0 wow fadeIn" data-wow-delay=".3s">
                                                <li className="list-inline-item"><img className="img-fluid client-img wow fadeInUp"
                                                    src="../assets/images/landing-page/landing-1/404.jpeg" alt="image0" /></li>
                                                <li className="list-inline-item"><img className="img-fluid client-img wow fadeInUp"
                                                    src="../assets/images/landing-page/landing-1/405.jpeg" alt="image0" /></li>
                                                <li className="list-inline-item"><img className="img-fluid client-img wow fadeInUp"
                                                    src="../assets/images/landing-page/landing-1/406.jpeg" alt="image0" /></li>
                                                <li className="list-inline-item"><img className="img-fluid client-img wow fadeInUp"
                                                    src="../assets/images/landing-page/landing-1/407.jpeg" alt="image0" /></li>
                                                <li className="list-inline-item"><img className="img-fluid client-img wow fadeInUp"
                                                    src="../assets/images/landing-page/landing-1/408.jpeg" alt="image0" /></li>
                                                <li className="list-inline-item"><img className="img-fluid client-img wow fadeInUp"
                                                    src="../assets/images/landing-page/landing-1/409.jpeg" alt="image0" /></li>
                                                <li className="list-inline-item"><img className="img-fluid client-img wow fadeInUp"
                                                    src="../assets/images/landing-page/landing-1/410.jpeg" alt="image0" /></li>
                                                <li className="list-inline-item"><img className="img-fluid client-img wow fadeInUp"
                                                    src="../assets/images/landing-page/landing-1/411.jpeg" alt="image0" /></li>
                                            </ul>
                                            <div className="dot-circle">
                                                <div className="effect-circle"></div>
                                            </div>
                                            <div className="main-circle " data-wow-delay=".3s">
                                                <div className="circle-bg">
                                                    <img src="../assets/images/logo-white.png" alt="image" className="img-fluid" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section id="iq-blog" className="iq-section-pb-70">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="title-box wow fadeInUp" data-wow-delay=".3s">
                                        <h2>Latest Posts</h2>
                                        <p>If you are planning on developing a product landing.</p>
                                    </div>
                                </div>
                                <div className="col-lg-12">
                                    <div className="owl-carousel" data-autoplay="true" data-loop="true" data-nav="false" data-dots="false"
                                        data-items="3" data-items-laptop="3" data-items-tab="2" data-items-mobile="2"
                                        data-items-mobile-sm="1">
                                        <div className="item">
                                            <div className="iq-blog-box wow fadeInUp" data-wow-delay=".3s">
                                                <div className="iq-blog-image clearfix">
                                                    <img src="../assets/images/landing-page/landing-1/20.jpg"
                                                        className="img-fluid center-block" alt="blogimage1" />
                                                    <div className="iq-blog-detail">
                                                        <div className="iq-blog-meta">
                                                            <ul>
                                                                <li className="list-inline-item">
                                                                    <span className="screen-reader-text">Posted on</span> <a href="#"
                                                                        rel="bookmark">November 28, 2019</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="blog-title">
                                                            <a href="#">
                                                                <h5 className="mb-2">Life Lack Meaning</h5>
                                                            </a>
                                                        </div>
                                                        <p className="mb-0">It is a long established fact that a reader will be distracted
                                                            by the readable.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="iq-blog-box wow fadeInUp" data-wow-delay=".3s">
                                                <div className="iq-blog-image clearfix">
                                                    <img src="../assets/images/landing-page/landing-1/19.jpg"
                                                        className="img-fluid center-block" alt="blogimage1" />
                                                    <div className="iq-blog-detail">
                                                        <div className="iq-blog-meta">
                                                            <ul>
                                                                <li className="list-inline-item">
                                                                    <span className="screen-reader-text">Posted on</span> <a href="#"
                                                                        rel="bookmark">November 28, 2019</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="blog-title">
                                                            <a href="#">
                                                                <h5 className="mb-2">Life Lack Meaning</h5>
                                                            </a>
                                                        </div>
                                                        <p className="mb-0">It is a long established fact that a reader will be distracted
                                                            by the readable.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="iq-blog-box wow fadeInUp" data-wow-delay=".3s">
                                                <div className="iq-blog-image clearfix">
                                                    <img src="../assets/images/landing-page/landing-1/18.jpg"
                                                        className="img-fluid center-block" alt="blogimage1" />
                                                    <div className="iq-blog-detail">
                                                        <div className="iq-blog-meta">
                                                            <ul>
                                                                <li className="list-inline-item">
                                                                    <span className="screen-reader-text">Posted on</span> <a href="#"
                                                                        rel="bookmark">November 28, 2019</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="blog-title">
                                                            <a href="#">
                                                                <h5 className="mb-2">Life Lack Meaning</h5>
                                                            </a>
                                                        </div>
                                                        <p className="mb-0">It is a long established fact that a reader will be distracted
                                                            by the readable.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="item">
                                            <div className="iq-blog-box wow fadeInUp" data-wow-delay=".3s">
                                                <div className="iq-blog-image clearfix">
                                                    <img src="../assets/images/landing-page/landing-1/17.jpg"
                                                        className="img-fluid center-block" alt="blogimage1" />
                                                    <div className="iq-blog-detail">
                                                        <div className="iq-blog-meta">
                                                            <ul>
                                                                <li className="list-inline-item">
                                                                    <span className="screen-reader-text">Posted on</span> <a href="#"
                                                                        rel="bookmark">November 28, 2019</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                        <div className="blog-title">
                                                            <a href="#">
                                                                <h5 className="mb-2">Life Lack Meaning</h5>
                                                            </a>
                                                        </div>
                                                        <p className="mb-0">It is a long established fact that a reader will be distracted
                                                            by the readable.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section id="iq-contact" className="pt-0">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="title-box wow fadeInUp" data-wow-delay=".3s">
                                        <h2>Contact with our team</h2>
                                        <p>If you are planning on developing a product landing.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6304.829986131271!2d-122.4746968033092!3d37.80374752160443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808586e6302615a1%3A0x86bd130251757c00!2sStorey+Ave%2C+San+Francisco%2C+CA+94129!5e0!3m2!1sen!2sus!4v1435826432051" width="600" height="350" style={{ border: '0' }} allowFullScreen></iframe>
                                    <div className="iq-address wow fadeInUp" data-wow-delay=".3s">
                                        <h5 className="mb-3 mt-4">9840 Shore St. Fond Du Lac, WI 54935</h5>
                                        <p className="mb-0">0 1223 456 789</p>
                                        <p className="mb-0">mail@prox.com</p>
                                        <div className="deatils-social mt-3 mb-3">
                                            <ul className="share-social  list-inline p-0">
                                                <li className="list-inline-item"><a href="#"><i className="lab la-facebook-f"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="lab la-twitter"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="lab la-github"></i></a></li>
                                                <li className="list-inline-item"><a href="#"><i className="lab la-instagram"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <h4 className="mb-4">Get in Touch</h4>
                                    <form>
                                        <div className="row wow fadeInUp" data-wow-delay=".3s">
                                            <div className="col-lg-6"> <input type="text" className="form-control" id="inputName"
                                                placeholder="Your Name" /> </div>
                                            <div className="col-lg-6"> <input type="Email" className="form-control" id="inputEmail"
                                                placeholder="Your Email" /></div>
                                            <div className="col-lg-12"> <input type="text" className="form-control" id="inputSubject"
                                                placeholder="Your Subject" /></div>
                                            <div className="col-lg-12"> <textarea className="form-control" id="exampleFormControlTextarea1"
                                                placeholder="Your Message"></textarea>
                                            </div>
                                            <div className="col-lg-12">
                                                <a className="landing-button btn-purple" href="">Send Message</a>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div >
            <footer className="iq-footer footer-shap footer-one iq-over-dark-90 position-relative">
                <div className="container">
                    <div className="footer-top">
                        <div className="row align-items-center prox-subscribe">
                            <div className="col-lg-5   col-sm-12 title-fancy mb-5 mb-lg-0 wow fadeInUp" data-wow-delay=".3s">
                                <h4 className="footer-title">Ready to get started?</h4>
                                <p className="mb-0">It is a long established fact that a page when looking at its layout.</p>
                            </div>
                            <div className="col-lg-7 col-sm-12 text-center wow fadeInUp" data-wow-delay=".3s">
                                <input type="Email" className="form-control" id="inputEmail" placeholder="Your Email"/>
                                    <a className="landing-button sign-up-btn btn-purple" href="">Sign up</a>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-5 col-md-6 col-sm-6 wow fadeInUp" data-wow-delay=".3s">
                            <div className="logo">
                                <a href="#">
                                    <img className="img-fluid mb-3" width="100" src="../assets/images/logo-white.png" alt="img"/>
                                </a>
                                <div className="iq-font-black mt-2 text-white">It is a long established fact that a reader will be
                                    distracted by the readable content.</div>
                                <div className="iq-copyright mt-5 text-white">
                                    Copyright @ 2018 <a href="#" className="text-white">ProX</a>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6 mt-4 mt-lg-0 mt-md-0 wow fadeInUp" data-wow-delay=".3s">
                            <h5 className="mb-4 text-white">Menu</h5>
                            <ul className="menu">
                                <li><a className="text-white" href="javascript:void(0)">About Us</a></li>
                                <li><a className="text-white" href="javascript:void(0)">Theme</a></li>
                                <li><a className="text-white" href="javascript:void(0)">Features</a></li>
                                <li><a className="text-white" href="javascript:void(0)">Pricing</a></li>
                                <li><a className="text-white" href="javascript:void(0)">Blog</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-2 col-md-6 col-sm-6 mt-lg-0 mt-4 wow fadeInUp" data-wow-delay=".3s">
                            <h5 className="mb-4 text-white">About Us</h5>
                            <ul className="menu">
                                <li><a className="text-white" href="javascript:void(0)">About ProX</a></li>
                                <li><a className="text-white" href="javascript:void(0)">Roadmap</a></li>
                                <li><a className="text-white" href="javascript:void(0)">How it Work</a></li>
                                <li><a className="text-white" href="javascript:void(0)">Team</a></li>
                                <li><a className="text-white" href="javascript:void(0)">News</a></li>
                            </ul>
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 mt-lg-0 mt-4 testimonail-widget-menu ">
                            <div className="owl-carousel" data-autoplay="true" data-loop="true" data-nav="false" data-dots="true"
                                data-items="1" data-items-laptop="1" data-items-tab="1" data-items-mobile="1"
                                data-items-mobile-sm="1" data-margin="30">
                                <div className="item">
                                    <div className="testimonial-info wow fadeInUp" data-wow-delay=".3s">
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut
                                            labore et dolore Sed omnis iste ut perspiciatis.</p>
                                        <div className="post-img">
                                            <img src="../assets/images/landing-page/landing-1/215.jpeg" className="img-fluid"
                                                alt="img"/>
                                                <div className="testimonial-name">
                                                    <h5>Walhan Bobe</h5>
                                                    <span className="sub-title">
                                                        CEO ProX</span>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-info wow fadeInUp" data-wow-delay=".3s">
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut
                                            labore et dolore Sed omnis iste ut perspiciatis.</p>
                                        <div className="post-img">
                                            <img src="../assets/images/landing-page/landing-1/216.jpeg" className="img-fluid"
                                                alt="img"/>
                                                <div className="testimonial-name">
                                                    <h5>Walhan Bobe</h5>
                                                    <span className="sub-title">
                                                        CEO ProX</span>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="testimonial-info wow fadeInUp" data-wow-delay=".3s">
                                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium incididunt ut
                                            labore et dolore Sed omnis iste ut perspiciatis.</p>
                                        <div className="post-img">
                                            <img src="../assets/images/landing-page/landing-1/217.jpeg" className="img-fluid"
                                                alt="img"/>
                                                <div className="testimonial-name">
                                                    <h5>Walhan Bobe</h5>
                                                    <span className="sub-title">
                                                        CEO ProX </span>
                                                </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default PaginaLanding