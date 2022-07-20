import React from "react";
import AppRoutes from "@constants/AppRoutes";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./styles.less";

const WHYUS = () => {
  return (
    <div>
      <section className="page-title tophead-image">
        <Container>
          <div className="inner-container clearfix">
            <div className="title-box">
              <h1>Why Choose Us</h1>
            </div>
            <div className="bread-crumb">
              <ul>
                <li>
                  <Link to={AppRoutes.HOME_PAGE}>Home</Link>
                </li>
                <li>Why Choose Us</li>
              </ul>
            </div>
          </div>
        </Container>
      </section>
      <section className="why-choose-us">
        <Container>
          <div className="content-cloumn">
            <div className="inner-column">
              <div className="sec-title left">
                <h2>Why Choose Us</h2>
                <div className="separater" />
              </div>
              <h5>Read Why We Are Expert in The Software Solution</h5>
              <div className="text">
                Clients at Priority We listen to you before we act. We work with
                you, not for you. Our goal is to understand your business, its
                needs, and its problems. Then we develop a strategy that helps
                you grow.
              </div>
              <div className="text">
                Transparency Our Development team communicates with our clients
                in several ways, such as phone calls and e-mails, to ensure a
                level of transparency and accuracy that can be adapted to all
                time zones across the world. Customer satisfaction Our concept
                of "customer satisfaction" is that we will not leave a job site
                until our customers are completely satisfied and we will resolve
                any issues that may arise quickly and efficiently. We always
                deliver what we promise. Our clients enjoy the benefits of our
                commitment to quality work and on-time delivery.
              </div>
              <div className="text">
                High standard of expertise We provide our clients with a high
                standard of expertise and effectiveness in order to provide the
                highest standard of services available in the market. This is
                accomplished by means of advanced technologies, committed and
                experienced technical professionals, state-of-the-art software
                applications, and appropriate licensing agreements.
              </div>
              <div className="text">
                Take the feedback seriously We take the needs and feedback of
                our clients, their customers, and other stakeholders seriously.
                This allows us to offer a well-rounded approach to UX design,
                which saves your time and money further down the line.
              </div>
              <div className="text">
                High-quality Results Our development team is skilled in HTML,
                CSS, PHP, and JavaScript. We are happy to work with any
                technology, and we can produce a digital product tailored to
                your brand and budget, which will help you achieve your goals.
                Our developers are the best, hardworking, and motivated, and
                they strive to maintain high-quality standards at all times.
                We're conscientious of our clients' needs and we don't rest
                until each project is executed flawlessly.
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default WHYUS;
