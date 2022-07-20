import React, { useState, useRef } from "react";
import AppRoutes from "@constants/AppRoutes";
import Features from "@pages/Home/Features";
import Aboutus from "@assets/images/about-img.jpg";
import Whychoose from "@assets/images/why-choose-1.jpg";
import { Container, Figure, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.less";

const About = () => {
  
  const [readMore, setReadMore] = useState<boolean>(false);
  
  const buttonOnClick = () => {
    const e = document.querySelector("[class='theme-btn btn-style-box']") as HTMLElement
    e.style.display = "none";
    setReadMore(!readMore);
  }
  
  const extraContent = (
    <>
      <div className="text">
        The company has been providing IT-based solutions to long-term, overseas
        clients in numerous countries for more than five years. Audacious
        Technology provides comprehensive solutions in the areas of eCommerce,
        eLearning, booking systems, finance, education, healthcare, and many
        others. The company has delivered applications with advanced platforms
        such as NodeJS, AngularJS, Django, Laravel, CodeIgniter, WordPress,
        Figma, SaaS, and Bootstrap framework not to forget Databases such as
        MySQL, PostgreSQL, MongoDB, GraphQL, Apollo, Parse Server, Microservice
        Architecture.
      </div>
      <div className="text">
        We have earned a reputation for providing excellent services to our
        customers. We take pride in our ability to build long-lasting
        relationships with people by providing high-quality services. Our goal
        is to provide the highest quality of service from initial contact
        through to follow-up support. We accomplish this by taking ideas from
        clients as per their requirements and brainstorming them to provide the
        best outcome.
      </div>
    </>
  );

  const linkName = readMore ? "Read Less" : "Read More";

  return (
    <div>
      <section className="page-title tophead-image">
        <Container>
          <div className="inner-container clearfix">
            <div className="title-box">
              <h1>About Us</h1>
            </div>
            <div className="bread-crumb">
              <ul>
                <li>
                  <Link to={AppRoutes.HOME_PAGE}>Home</Link>
                </li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <section className="about-section style-three">
        <Container>
          <Row>
            <Col xl={6} lg={12} className="image-column">
              <Figure className="image-box">
                <Figure.Image src={Aboutus} />
              </Figure>
              <div className="video-link">
                <Link className="link" to="/">
                  <span className="fa fa-play" />
                </Link>
              </div>
            </Col>
            <Col xl={6} lg={12} md={12} sm={12} className="content-column">
              <div className="inner-column">
                <div className="content-box">
                  <div className="sec-title-left">
                    <h2>Welcome to the world of innovation & Technology</h2>
                  </div>
                  <h5>
                    Welcome to Audacious Team, a Digital Innovation Agency that
                    is Evolving to Empower. Let Us Bring Your Business To Life
                    with our Innovative Solutions.
                  </h5>
                  <div className="text">
                    Audacious Technology is a company of innovative people with
                    a passion to create, evolve and empower. We strive to make
                    significant contributions to the technology world through
                    our knowledge, skills, and expertise. We are a team of geeks
                    and coders who are impassioned about cutting-edge
                    technologies that improve the way we live, work, and play.
                    Audacious Technology is a global provider of Web
                    Development, Database Development, Web and Graphic Design,
                    DevOps, Business Consultation, and Digital Marketing. Not
                    only this Our Company also provides integrated solutions to
                    the clients that help their website to grow and enhance.
                  </div>
                  <div className="text">
                    We use our expertise to help your business grow. Our
                    expertise in web design helps you create a website that is
                    attractive and easy to use. There are many things we can do
                    to help you grow, whether you want us to create a website or
                    upgrade an existing site, or if you need help with marketing
                    your company's products and services. Contact us today.
                  </div>
                  <div className="link-box">
                    {readMore && extraContent}
                    <button
                      className="theme-btn btn-style-box"
                      onClick={buttonOnClick}
                    >
                      {linkName}
                    </button>
                  </div>
                </div>
              </div>
            </Col>
            <Col xl={12} lg={12} md={12} className="clearfix fun-fact-section">
              <div className="fact-counter">
                <Row>
                  <Col lg={3} md={6} sm={6} className="counter-column">
                    <div className="count-box">
                      <div className="count">
                        <span className="count-text">100</span>
                      </div>
                      <div className="separater" />
                      <h4 className="counter-title">Project Successfull</h4>
                    </div>
                  </Col>
                  <Col lg={3} md={6} sm={6} className="counter-column">
                    <div className="count-box">
                      <div className="count">
                        <span className="count-text">100</span>
                      </div>
                      <div className="separater" />
                      <h4 className="counter-title">satisfied clients</h4>
                    </div>
                  </Col>
                  <Col lg={3} md={6} sm={6} className="counter-column">
                    <div className="count-box">
                      <div className="count">
                        <span className="count-text">100</span>
                      </div>
                      <div className="separater" />
                      <h4 className="counter-title">Team Members</h4>
                    </div>
                  </Col>
                  <Col lg={3} md={6} sm={6} className="counter-column">
                    <div className="count-box">
                      <div className="count">
                        <span className="count-text">100</span>
                      </div>
                      <div className="separater" />
                      <h4 className="counter-title">Awards</h4>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="why-choose-us">
        <Container fluid>
          <Row>
            <Col lg={6} md={12} sm={12} className="image-column">
              <Figure className="image-box">
                <Figure.Image src={Whychoose} />
              </Figure>
            </Col>
            <Col lg={6} md={12} sm={12} className="content-cloumn">
              <div className="inner-column">
                <div className="sec-title left">
                  <h2>Why Choose Us</h2>
                  <div className="separater" />
                </div>
                <h5>Read Why We Are Expert in The Software Solution</h5>
                <div className="text">
                  Clients at Priority We listen to you before we act. We work
                  with you, not for you. Our goal is to understand your
                  business, its needs, and its problems. Then we develop a
                  strategy that helps you grow.
                </div>
                <ul className="list-why-us">
                  <li>Fast Work</li>
                  <li>Dedicated Team</li>
                  <li>Best Advisors</li>
                  <li>Network Solutions</li>
                  <li>24/7 Supports</li>
                  <li>Work Deadline</li>
                </ul>
                <Link
                  className="btn-theme btn-style-five"
                  to={AppRoutes.WHYCHOOSEUS}
                >
                  Read more
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* <Features /> */}

      <section className="featured-section">
        <Container fluid>
          <Row className="clearfix">
            <Col className="content-cloumn">
              <div className="inner-column" style={{left: "8%"}}>
                <div className="sec-title left">
                  <h2>Why to go for Audacious Technologies:</h2>
                  <div className="separater"></div>
                </div>
                <div className="upper-column">
                  <div className="icon-box">
                    <i className="icon far fa-arrow-alt-circle-right"></i>
                  </div>
                  <div className="text-box">
                    <h5>Customer Centric</h5>
                    <div className="text">
                      Customer satisfaction is of prime importance to us. We
                      always deliver beyond your expectations.
                    </div>
                  </div>
                </div>
                <div className="upper-column">
                  <div className="icon-box">
                    <i className="icon far fa-arrow-alt-circle-right"></i>
                  </div>
                  <div className="text-box">
                    <h5>Techology Focus</h5>
                    <div className="text">
                      We have commendable Problem-Solving Technology experts
                      with decades of experience.
                    </div>
                  </div>
                </div>
                <div className="upper-column">
                  <div className="icon-box">
                    <i className="icon far fa-arrow-alt-circle-right"></i>
                  </div>
                  <div className="text-box">
                    <h5>Dedicated Development and Support</h5>
                    <div className="text">
                      We are committed to provide Website, Apps, Software
                      Development and Support within a given schedule.
                    </div>
                  </div>
                </div>
                <div className="upper-column">
                  <div className="icon-box">
                    <i className="icon far fa-arrow-alt-circle-right"></i>
                  </div>
                  <div className="text-box">
                    <h5>Superior Quality and Bug Free Project Deliverables</h5>
                    <div className="text">
                      We deliver high quality, tested and error free projects. A
                      thorough quality review is a key component of our project
                      delivery strategy.
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default About;
