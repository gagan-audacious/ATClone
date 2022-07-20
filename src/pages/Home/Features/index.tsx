import { Col, Container, Row } from "react-bootstrap";
import "./styles.less";

const Features = () => {
  return (
    <section className="feautred-section">
      <Container>
        <Row>
          <Col xl={12}>
            <div className="sec-title left">
              <h2>
                How We Make Work <br /> Successful Business in 4 Steps
              </h2>
              <div className="separater"></div>
            </div>
          </Col>
        </Row>
        <Row className="featured-box clearfix">
          <Col lg={3} md={6} sm={12}>
            <div className="inner-box">
              <div className="title-box">
                <h4>
                  <span className="numbe-post">1</span>Analyze
                </h4>
              </div>
              <div className="lower-content">
                <div className="text">
                  Our team of experts do the analysis of client business and
                  give them the best advice. Our team also has a great
                  understanding of the latest technologies and makes use of
                  cutting-edge techniques in development.
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="inner-box">
              <div className="title-box">
                <h4>
                  <span className="numbe-post">2</span>Advise
                </h4>
              </div>
              <div className="lower-content">
                <div className="text">
                  We also provide marketing assistance to
                  help your business get noticed by potential customers. The key
                  factor for success of any business is its website. And our
                  team of advisors always remains available to advise you for
                  the betterment of your business.
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="inner-box">
              <div className="title-box">
                <h4>
                  <span className="numbe-post">3</span>Strategy
                </h4>
              </div>
              <div className="lower-content">
                <div className="text">
                Strategy is an action that managers take to attain one or more of the organization's goals. The key factor for success of any business is proper strategy
                  and planning. And we are the best in making strategies and
                  executing them.
                </div>
              </div>
            </div>
          </Col>
          <Col lg={3} md={6} sm={12}>
            <div className="inner-box">
              <div className="title-box">
                <h4>
                  <span className="numbe-post">4</span>Result
                </h4>
              </div>
              <div className="lower-content">
                <div className="text">
                  The key factor for success is a good result. A good website can give tremendous results and can also
                  attract customers who are looking for products or services
                  that you offer. And we have already given a number of good
                  results to our clients.
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
