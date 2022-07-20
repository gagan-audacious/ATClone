import { Col, Container, ProgressBar, Row, Accordion } from "react-bootstrap";
import "./styles.less";

const Faqs = () => {
  return (
    <section className="faq-skill-section">
      <Container>
        <Row>
          <Col lg={6} md={12} sm={12} className="accordion-column">
            <div className="sec-title left">
              <h2>Some FAQ’s</h2>
              <div className="separater"></div>
            </div>
            <Accordion defaultActiveKey="0" className="accordion-box">
              <Accordion.Item eventKey="0" className="accordion block">
                <Accordion.Header className="acc-btn">
                  How long does it take to build a Website?
                </Accordion.Header>
                <Accordion.Body>
                  <div className="content">
                    <div className="text">
                      It depends on the type of website you are building, the
                      platform you are using and the size of your budget. If you
                      are creating a small website with a few pages, it should
                      not take more than a couple of days to complete. If you
                      are creating a large website with several pages, you’ll
                      probably need more time and money to get the best results.
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="1" className="accordion block">
                <Accordion.Header className="acc-btn">
                  Should I create a mobile or a web app?
                </Accordion.Header>
                <Accordion.Body>
                  <div className="content">
                    <div className="text">
                      If you’re wondering whether you should create a mobile app
                      or a web app, you’re not the only one. Many companies are
                      wondering the same thing these days. The difference
                      between the two is simple: a web app can be accessed
                      through a browser while a mobile app must be downloaded on
                      a smartphone or tablet.
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="2" className="accordion block">
                <Accordion.Header className="acc-btn">
                  How much does a website cost?
                </Accordion.Header>
                <Accordion.Body>
                  <div className="content">
                    <div className="text">
                      Some websites are extremely simple, while others are
                      extremely complex. Some are very easy to create, while
                      others may be time-consuming and require the help of
                      professionals. The cost of your website depends on a
                      number of factors, including the complexity of the site,
                      the functionality you need, and the professional
                      assistance you need. It’s important to keep in mind that
                      with some websites you may also have to pay a monthly fee
                      for web hosting.
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
              <Accordion.Item eventKey="3" className="accordion block">
                <Accordion.Header className="acc-btn">
                  Why should I choose you and not hire my own software
                  development team?
                </Accordion.Header>
                <Accordion.Body>
                  <div className="content">
                    <div className="text">
                      We have highly qualified developers and designers who have
                      been working in this area for several years. Today, we are
                      one of the leaders in this industry. Our main advantage is
                      that we have our own offices where our employees can work
                      without any disturbances. We will take care of everything.
                      We’re also flexible and can adapt to your needs. You can
                      be assured that you’ll get high-quality work and a smooth
                      customer service experience.
                    </div>
                  </div>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>
          </Col>
          <Col lg={6} md={12} sm={12} className="accordion-column">
            <div className="sec-title left">
              <h2>Our Statistics Skill Rate</h2>
              <div className="separater"></div>
            </div>
            <div className="text">
              As a web developer, we have strong statistics skills. And our
              skills are important for the success of your business. After all,
              good statistics skills are a big part of our job in analysing data
              and making decisions based on that data.
            </div>
            <div className="inner-box">
              <div className="progress-levels">
                <div className="progress-box">
                  <div className="box-title">
                    Look at your customers’ questions
                  </div>
                  <ProgressBar now={65} />
                </div>
                <div className="progress-box">
                  <div className="box-title">Economic Growth</div>
                  <ProgressBar now={90} />
                </div>
                <div className="progress-box">
                  <div className="box-title">Achieves Goals</div>
                  <ProgressBar now={80} />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Faqs;
