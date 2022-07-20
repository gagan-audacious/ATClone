import OurMission from "@assets/images/ourmission.jpg";
import OurVision from "@assets/images/vision.jpg";
import { Col, Container, Row } from "react-bootstrap";
import MissionCard from "./MIssionCard";
import "./styles.less";

const Mission = () => {
  return (
    <section className="our-mission-section">
      <Container>
        <Row>
          <Col xl={6} lg={12} md={12} sm={12}>
            <div className="inner-box">
              <div className="sec-title left">
                <h2>We Are Experienced in Financial and Business</h2>
                <div className="separater"></div>
              </div>
              <div className="text">
                We have worked with a number of different companies, and have
                been able to give impressive results to our clients.This is
                possible just because we work hard to give you the best results.
                We pride ourselves on our ability to provide a high level of
                professional service, while still maintaining a friendly and
                approachable atmosphere. This means that we are able to work
                with our clients on a personal level, ensuring that they feel
                comfortable discussing their needs with us and receiving the
                best possible advice.{" "}
              </div>
              <div className="clearfix fun-fact-section">
                <div className="fact-counter">
                  <Row>
                    <Col lg={6} md={6} sm={12} className="counter-column">
                      <div className="count-box">
                        <div className="count">
                          <span className="count-text">100</span>
                        </div>
                        <div className="separater" />
                        <h4 className="counter-title">Project Successfull</h4>
                      </div>
                    </Col>
                    <Col lg={6} md={6} sm={12} className="counter-column">
                      <div className="count-box">
                        <div className="count">
                          <span className="count-text">100</span>
                        </div>
                        <div className="separater" />
                        <h4 className="counter-title">Satisfied clients</h4>
                      </div>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
          </Col>
          <Col xl={6} lg={12} md={12} sm={12} className="m-auto">
            <MissionCard
              image={OurMission}
              title="Our Mission"
              description={
                "The mission of our company is to provide all the tools, resources and services to our clients in order to make them successful in their business. We have a wide range of options for our clients so that they can choose from it according to their preferences and needs. And we help our clients to reach out to a large number of people and make them their business successful."
              }
            />
            <MissionCard
              image={OurVision}
              title="Our Vision"
              description={
                "Vision of our team is to meet all our client's expectations by providing them with excellent solutions. And we achieve as we are flexible and comfortable with different kinds of projects, we handle small and large projects equally well. We also provide marketing assistance to help your business get noticed by potential customers."
              }
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Mission;
