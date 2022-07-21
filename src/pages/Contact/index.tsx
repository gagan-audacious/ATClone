import React from "react";
import AppRoutes from "@constants/AppRoutes";
import ContactUs from "@pages/Home/Contact";
import Team from "@assets/images/Team.jpg";
import { Container, Figure, Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.less";

const Contact = () => {
  return (
    <div>
      <section className="page-title tophead-image">
        <Container>
          <div className="inner-container clearfix">
            <div className="title-box">
              <h1>Our Contact</h1>
            </div>
            <div className="bread-crumb">
              <ul>
                <li>
                  <Link to={AppRoutes.HOME_PAGE}>Home</Link>
                </li>
                <li>Our Contact</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <section className="team-section style-two">
        <Container>
          <Row className="box-container">
            <Col xl={2} lg={2} md={2} sm={12}>
              <div className="team-block">
                <div className="inner-box">
                  <div className="info-box">
                    <div className="image-box">
                      <Figure className="image">
                        <Figure.Image src={Team} />
                      </Figure>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={10} lg={10} md={10} sm={12}>
              <h3 className="name">
                <Link to="/">
                  <strong>Sonu Bamniya</strong>
                </Link>
              </h3>
              <span className="designation">CO-FOUNDER</span>
              <p>
                Sonu Bamnia is M.Tech in Computer Science and has more than 8
                years of experience in Website Development and Consultation. He
                has worked in various domains such as E-Commerce, Digital
                Product Sell, Live Auction and CRM. His domain expertise has
                helped the company to deliver world class services to its
                clients. Additionally, he has good knowledge of Nginx server
                configuration, Git, AWS services such as EC2, S3, CodeCommit,
                CodeDeploy, Lambda. He has vast experience in Frontend
                technologies such as JS and its frameworks like AngularJS,
                Angular 2+, VueJS, ReactJS, Redux, TypeScript, jQuery. His
                expertise also extends to Backend technologies such as PHP,
                NodeJS, Databases like MySQL, MSSQL, MongoDB, DynamoDB, Firebase
                and Parse Server. He has a track record for conducting
                requirement analysis, developing and delivering technically
                challenging solutions.
              </p>
            </Col>
            <Col xl={12} className="py-5">
              <hr />
            </Col>
            <Col xl={2} lg={2} md={2} sm={12}>
              <div className="team-block">
                <div className="inner-box">
                  <div className="info-box">
                    <div className="image-box">
                      <Figure className="image">
                        <Figure.Image src={Team} />
                      </Figure>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={10} lg={10} md={10} sm={12}>
              <h3 className="name">
                <Link to="/">
                  <strong>Sunil Yadav</strong>
                </Link>
              </h3>
              <span className="designation">CO-FOUNDER</span>
              <p>
                Sunil Yadav is MCA Professional with more than 8 years of
                experience in Software, App Development and Consulting Services.
                He is an Application and GCP Solution Architect with vast
                experience in open source technologies like Android, Linux,
                WordPress, etc. and cloud technologies such as Azure, AWS and so
                on. Sunil has dealt with multiple clients for various activities
                relating to implementation, testing, web based solutions, etc.
                while offering faster issue resolution and real-time resource
                availability. His business awareness has helped the company to
                deliver best services on time. His expertise also extends to
                tech implementation, web and application support management
                across different domains.
              </p>
            </Col>
          </Row>
          {/* <Row className="box-container">
            <Col xl={6} lg={6} md={6} sm={6}>
              <div className="team-block">
                <div className="inner-box">
                  <div className="info-box">
                    <div className="image-box">
                      <Figure className="image">
                        <Figure.Image src={Team} />
                      </Figure>
                    </div>
                    <h3 className="name">
                      <Link to="/">Sonu Bamniya</Link>
                    </h3>
                    <span className="designation">CO-FOUNDER</span>
                    <p>
                      Sonu Bamnia is M.Tech in Computer Science and has more
                      than 8 years of experience in Website Development and
                      Consultation. He has worked in various domains such as
                      E-Commerce, Digital Product Sell, Live Auction and CRM.
                      His domain expertise has helped the company to deliver
                      world class services to its clients. Additionally, he has
                      good knowledge of Nginx server configuration, Git, AWS
                      services such as EC2, S3, CodeCommit, CodeDeploy, Lambda.
                      He has vast experience in Frontend technologies such as JS
                      and its frameworks like AngularJS, Angular 2+, VueJS,
                      ReactJS, Redux, TypeScript, jQuery. His expertise also
                      extends to Backend technologies such as PHP, NodeJS,
                      Databases like MySQL, MSSQL, MongoDB, DynamoDB, Firebase
                      and Parse Server. He has a track record for conducting
                      requirement analysis, developing and delivering
                      technically challenging solutions.
                    </p>
                  </div>

                  <ul className="social-links">
                    <li><Link to='/'><i className="fab fa-facebook-f" /></Link></li>
                    <li><Link to='/'><i className="fab fa-twitter" /></Link></li>
                    <li><Link to='/'><i className="fab fa-google-plus-g" /></Link></li>
                    <li><Link to='/'><i className="fab fa-instagram" /></Link></li>
                  </ul>
                </div>
              </div>
            </Col>
            <Col xl={6} lg={6} md={6} sm={6}>
              <div className="team-block">
                <div className="inner-box">
                  <div className="info-box">
                    <div className="image-box">
                      <Figure className="image">
                        <Figure.Image src={Team} />
                      </Figure>
                    </div>
                    <h3 className="name">
                      <Link to="/">Sunil Yadav</Link>
                    </h3>
                    <span className="designation">CO-FOUNDER</span>
                    <p>
                      Sunil Yadav is MCA Professional with more than 8 years of
                      experience in Software, App Development and Consulting
                      Services. He is an Application and GCP Solution Architect
                      with vast experience in open source technologies like
                      Android, Linux, WordPress, etc. and cloud technologies
                      such as Azure, AWS and so on. Sunil has dealt with
                      multiple clients for various activities relating to
                      implementation, testing, web based solutions, etc. while
                      offering faster issue resolution and real-time resource
                      availability. His business awareness has helped the
                      company to deliver best services on time. His expertise
                      also extends to tech implementation, web and application
                      support management across different domains.
                    </p>
                  </div>

                  <ul className="social-links">
                    <li><Link to='/'><i className="fab fa-facebook-f" /></Link></li>
                    <li><Link to='/'><i className="fab fa-twitter" /></Link></li>
                    <li><Link to='/'><i className="fab fa-google-plus-g" /></Link></li>
                    <li><Link to='/'><i className="fab fa-instagram" /></Link></li>
                  </ul>
                </div>
              </div>
            </Col>
          </Row> */}
        </Container>
      </section>
      <ContactUs />
    </div>
  );
};

export default Contact;
