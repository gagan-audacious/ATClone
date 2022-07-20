import AppRoutes from "@constants/AppRoutes";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import "./styles.less";

const ServicesBanner = () => {
  return (
    <section className="paralex-section services-image">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="inner-column text-center">
              <h2>
                Looking for a web development company that can help you turn
                your vision into reality?{" "}
              </h2>
              <div className="text">
                Our team is specialised in
                creating custom websites and applications that are tailored to
                your specific needs and goals. No matter what your project
                entails, we have the experience and expertise to get the job
                done right. We're committed to providing outstanding service and
                delivering high-quality work that our clients can be proud of.<br/>
                If you're ready to take your online presence to the next level,
                contact us today to get started.
              </div>
              <Link to={AppRoutes.SERVICES} className="theme-btn btn-style-one">
                {" "}
                Our Services{" "}
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default ServicesBanner;
