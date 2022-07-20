// import React from "react";
import AppRoutes from "@constants/AppRoutes"; 
import { Col, Container, Row, Figure } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.less";
import Logo from "@assets/images/logo.png";
import {AiFillFacebook} from "@react-icons/all-files/ai/AiFillFacebook";
import {AiFillTwitterCircle} from "@react-icons/all-files/ai/AiFillTwitterCircle";
import {AiFillInstagram} from "@react-icons/all-files/ai/AiFillInstagram";
import {AiFillLinkedin} from "@react-icons/all-files/ai/AiFillLinkedin";

const Footer = () => {
  return (
    <footer className="main-footer style-two footer-image">
      <Container>
        <div className="widgets-section">
          <Row className="clearfix">
            <Col xl={8} lg={12} md={12} sm={12} className="big-column">
              <Row>
                <Col lg={5} md={12} sm={12} className="footer-column">
                  <div className="footer-widget about-widget">
                    <div className="footer-logo">
                      <Figure className="imageBox">
                        <Figure.Image src={Logo} />
                      </Figure>
                    </div>
                    <div className="widget-content">
                      <ul className="info-box">
                        <li>
                          <i className="far fa-map"></i>Plot No. 47, Second Floor, G S Plaza, Scheme No 78 - III, Part II,
                          Vijay Nagar, Indore, Madhya Pradesh 452010
                        </li>
                        <li>
                          <i className="fa fa-phone-volume"></i>{" "}
                          <span>Office Contact No.</span> +91-8871681905{" "}
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
                <Col lg={6} md={12} sm={12} className="footer-column">
                  <div className="footer-widget links-widget">
                    <h2 className="widget-title">Usefull Links</h2>
                    <div className="widget-content">
                      <ul className="list">
                        <li>
                          <Link to={AppRoutes.HOME_PAGE}>Home</Link>
                        </li>
                        <li>
                          <Link to={AppRoutes.ABOUT}>About Us</Link>
                        </li>
                        <li>
                          <Link to={AppRoutes.SERVICES}>Services</Link>
                        </li>
                        <li>
                          <Link to={AppRoutes.PROJECT}>Project</Link>
                        </li>
                        {/* <li>
                          <Link to={AppRoutes.BLOG}>Blog</Link>
                        </li> */}
                        <li>
                          <Link to={AppRoutes.CONTACT}>Contact Us</Link>
                        </li>
                        <li>
                          <Link to={AppRoutes.PRIVACY_POLICY}>Privacy Policy</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
            <Col xl={4} lg={12} md={12} sm={12} className="big-column">
              <Row>
                <Col lg={12} md={12} sm={12} className="footer-column">
                  <div className="footer-widget recent-posts">
                    <h2 className="widget-title">Connect With Us</h2>
                      <div className="flex-icons">  
                      <AiFillFacebook className="social-icons" style={{marginRight: "10px"}}/>
                      <AiFillTwitterCircle className="social-icons" style={{marginRight: "10px"}}/>
                      <AiFillInstagram className="social-icons" style={{marginRight: "10px"}}/>
                      <AiFillLinkedin className="social-icons" style={{marginRight: "10px"}}/>
                      </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </Container>
      <div className="footer-bottom">
        <Container>
          <div className="inner-container">
            <div className="copyright-text">
              Copyright &copy; 2022 <Link to={AppRoutes.HOME_PAGE}> Auduacious Technology </Link> All
              rights reserved.
            </div>
            <div className="social-links">
              <ul className="social-icon-two">
                <li>
                  <Link to={{ pathname: "/" }}><i className="fab fa-facebook-f"></i></Link>
                </li>
                <li>
                  <Link to={{ pathname: "/" }}> <i className="fab fa-twitter"></i></Link>
                </li>
                <li>
                  <Link to={{ pathname: "/" }}><i className="fab fa-skype"></i></Link>
                </li>
                <li>
                  <Link to={{ pathname: "/" }}><i className="fab fa-linkedin-in"></i></Link>
                </li>
              </ul>
            </div>
          </div>
        </Container>
      </div>
    </footer>
  );
};

export default Footer;
