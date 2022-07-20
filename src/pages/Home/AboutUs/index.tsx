import { Col, Container, Figure, Row } from "react-bootstrap";
import About from "@assets/images/about.jpg";
import "./styles.less";

const AboutUs = () => {
  return (
    <section className="featured-section">
      <Container fluid>
        <Row className="clearfix">
          <Col lg={6} md={12} sm={12} className="image-column">
            <Figure className="image-box">
              <Figure.Image src={About} />
            </Figure>
          </Col>
          <Col lg={6} md={12} sm={12} className="content-cloumn">
            <div className="inner-column">
              <div className="sec-title left">
                <h2>If you want to be a Part of Our Team? Join Us Now.</h2>
                <div className="separater"></div>
              </div>
              <div className="upper-column">
                <div className="icon-box">
                  <i className="icon far fa-arrow-alt-circle-right"></i>
                </div>
                <div className="text-box">
                  <h5>Business Development Manager</h5>
                  <div className="text">
                    As a business development manager, you'll be responsible for
                    identifying and pursuing new business opportunities for your
                    company. This can involve anything from generating leads to
                    negotiating and closing deals.
                  </div>
                </div>
              </div>
              <div className="upper-column">
                <div className="icon-box">
                  <i className="icon far fa-arrow-alt-circle-right"></i>
                </div>
                <div className="text-box">
                  <h5>Project Lead</h5>
                  <div className="text">
                    As the project lead, you will be responsible for ensuring
                    the success of the project. You will need to coordinate with
                    the team, set deadlines, and track progress. You will also
                    need to report to the client or sponsor.
                  </div>
                </div>
              </div>
              <div className="upper-column">
                <div className="icon-box">
                  <i className="icon far fa-arrow-alt-circle-right"></i>
                </div>
                <div className="text-box">
                  <h5>Business Solutions Analyst</h5>
                  <div className="text">
                    As a business solutions analyst, you will have to work with
                    clients to understand their needs and develop tailored
                    solutions that help them increase efficiency and
                    productivity.
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

export default AboutUs;
