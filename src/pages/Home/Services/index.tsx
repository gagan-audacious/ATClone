import { Col, Container, Row } from "react-bootstrap";
import "./styles.less";

const Services = () => {
  return (
    <section className="services-section-box">
      <Container>
        <div className="sec-title centered">
          <h2>Our Services</h2>
          <div className="separater"></div>
        </div>
        <Row className="services-box clearfix">
          <Col xl={4} lg={6} md={6} sm={12}>
            <div className="service-block">
              <div className="inner-box">
                <div className="lower-content">
                  <i className="fas fa-tasks"></i>
                  <h3>Software Consulting</h3>
                  <div className="text">
                    Our expert team of consultants can provide valuable insights
                    and expertise that can help get your project on track. With
                    the help of our software consultant, you can make your
                    software development project a success.{" "}
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={4} lg={6} md={6} sm={12}>
            <div className="service-block">
              <div className="inner-box">
                <div className="lower-content">
                  <i className="fas fa-paint-brush"></i>
                  <h3>Web Design</h3>
                  <div className="text">
                    We design, build, and maintain the websites. From the
                    initial planning stages to the final touches, our team of
                    designers remain focused. We code, design, and optimise your
                    website for the best possible results.{" "}
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={4} lg={6} md={6} sm={12}>
            <div className="service-block">
              <div className="inner-box">
                <div className="lower-content">
                  <i className="fas fa-code"></i>
                  <h3>Software Development</h3>
                  <div className="text">
                    If you are looking for the best software development team.
                    Then you are at the right place as we have all the essential
                    skilled team of best designers, coders, and testers around,
                    and we're always up for a challenge.{" "}
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={4} lg={6} md={6} sm={12}>
            <div className="service-block">
              <div className="inner-box">
                <div className="lower-content">
                  <i className="fas fa-mobile-alt"></i>
                  <h3>Mobile Development</h3>
                  <div className="text">
                    Our mobile development team is the best in the market. We
                    have a wide range of experience and expertise in developing
                    mobile. We are always looking for new challenges and giving
                    the best results.{" "}
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={4} lg={6} md={6} sm={12}>
            <div className="service-block">
              <div className="inner-box">
                <div className="lower-content">
                  <i className="fas fa-terminal"></i>
                  <h3>Web App Development</h3>
                  <div className="text">
                    Our web App development team can not only create a beautiful
                    and functional website but we create web apps that can
                    understand your business goals and can help you to achieve
                    your target. We have a Web App Development team who are
                    expert in their field.{" "}
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={4} lg={6} md={6} sm={12}>
            <div className="service-block">
              <div className="inner-box">
                <div className="lower-content">
                  <i className="far fa-clone"></i>
                  <h3>CMS Development</h3>
                  <div className="text">
                    We have a team of Talented and skilled professionals. From
                    Front-end to Back-end Developers, we have the experience and
                    knowledge to build custom Content Management Systems that
                    are tailored to your specific needs and requirements.{" "}
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
