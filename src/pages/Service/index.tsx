import React from "react";
import AppRoutes from "@constants/AppRoutes";
import Services from "@pages/Home/Services";
import service from "@assets/images/services-1.jpg";
import { Container, Figure, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.less";

const Service = () => {
  return (
    <div>
      <section className="page-title tophead-image">
        <Container>
          <div className="inner-container clearfix">
            <div className="title-box">
              <h1>Services</h1>
            </div>
            <div className="bread-crumb">
              <ul>
                <li>
                  <Link to={AppRoutes.HOME_PAGE}>Home</Link>
                </li>
                <li>Services</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <section className="services-section style-four">
        <Container>
          <Row>
            <Col lg={4} md={6} sm={12}>
              <div className="service-block">
                <div className="inner-box">
                  <div className="image-box">
                    <Figure className="image-box">
                      <Figure.Image src={service} />
                    </Figure>
                  </div>
                  <div className="lower-content">
                    <h3>
                      Development
                    </h3>
                    <div className="text">
                      Web development includes everything from planning and
                      designing to coding and testing. We as web developers use
                      a variety of programming languages and technologies to
                      create a website or web application according to your
                      specific needs and requirements.
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="service-block">
                <div className="inner-box">
                  <div className="image-box">
                    <Figure className="image-box">
                      <Figure.Image src={service} />
                    </Figure> 
                  </div>
                  <div className="lower-content">
                    <h3>
                      Testing
                    </h3>
                    <div className="text">
                      Our company specialises in testing websites and
                      applications. We have a team of experts who are skilled in
                      this area and who can provide you with the best possible
                      service. We understand the importance of testing and we
                      take our time to do it right. We want to help you make
                      sure it is perfect.
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={4} md={6} sm={12}>
              <div className="service-block">
                <div className="inner-box">
                  <div className="image-box">
                    <Figure className="image-box">
                      <Figure.Image src={service} />
                    </Figure>
                  </div>
                  <div className="lower-content">
                    <h3>
                      Business Consultation
                    </h3>
                    <div className="text">
                      We all know that business consultation is very important
                      for any company. It is always the best option to contact a
                      consultant before starting your own business. Consulting
                      services can be useful for new businesses, small
                      businesses, and even for established businesses.
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Services />
    </div>
  );
};

export default Service;
