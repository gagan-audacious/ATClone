import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import AppRoutes from "@constants/AppRoutes";
import "./styles.less";

const Privacy = () => {
  return (
    <div>
      <section className="page-title tophead-image">
        <Container>
          <div className="inner-container clearfix">
            <div className="title-box">
              <h1>Privacy Policy</h1>
            </div>
            <div className="bread-crumb">
              <ul>
                <li>
                  <Link to={AppRoutes.HOME_PAGE}>Home</Link>
                </li>
                <li>Privacy Policy</li>
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
                <h2>Privacy Policy</h2>
                <div className="separater" />
              </div>
              <h5>
                Audacious Technologies is committed to protect your privacy and
                give our best to secure your personal information. This privacy
                policy explains our company’s data collection and use of it.
                Please read this information carefully. By using this site, you
                understand and agree terms mentioned in the policy.
              </h5>
              <div className="text" style={{ marginTop: "30px" }}>
                <h5>1. Definitions and Interpretation</h5>
                “Personal Information” is the information we gather and use
                about individuals who visit website or use its services. This
                information may contain your IP address, E-mail, country,
                personal name, company name, login sessions and/or other data
                you wish to provide or is otherwise stored on your servers.
                “Site” refers to the Audacious Technologies website, API’s,
                software, source codes used to provide services, designs,
                images, text, icons and all other intellectual property
                protected under copyright or any other proprietary right and
                located at the Audacious Technologies domain. 
              </div>
              <div className="text">
                <h5>2. Accumulation of Personal Information</h5>
                When you are visiting our site, you can browse and operate
                without providing Personal Information. However, we do collect
                individual Personal Information of user when user asks his/her
                queries through “Contact” Page. Some of the information is
                mandatory which users must provide and some information is
                optional.
                <br />
                When visiting our website, Saviour Infotech may collect the
                following information from you:
                <div className="list-box">
                  <ul>
                    <li>
                      1. IP address (Used for avoiding unauthorized access)
                    </li>
                    <li>
                      2. Location (IP address is linked to a country, city or
                      region. So, location will be captured)
                    </li>
                    <li>
                      3. Full Name (This information is mandatory when you want
                      to send query to us)
                    </li>
                    <li>
                      4. Email (This information is mandatory when you want to
                      send query to us)
                    </li>
                    <li>
                      5. Subject (This information is optional when you want to
                      send query to us)
                    </li>
                    <li>
                      6. Message (This information is optional when you want to
                      send query to us)
                    </li>
                  </ul>
                </div>
              </div>
              <div className="text">
                <h5>3. How is your Personal Information used</h5>
                We, at Audacious Technologies do not provide Personal
                Information collected to any third parties. We do not exchange
                or share your personal data in any way other than mentioned in
                the policy.
                <br />
                Personal Information collected by Audacious Technologies is used
                for:
                <div className="list-box">
                  <ul>
                    <li>
                      1. Contacting Clients and provide Support whenever needed
                    </li>
                    <li>2. Payment processing and transactions</li>
                    <li>
                      3. Sending Emails such as download links, newsletters,
                      other documents
                    </li>
                    <li>4. Internal sales analytics</li>
                    <li>
                      5. Inspection or taking actions related to violations of
                      our License Agreement and/or Terms and Conditions
                    </li>
                    <li>
                      6. lient Data like Design Documents, webpage content,
                      other business/company related information is used for
                      Designing Webpages
                    </li>
                    <li>7. Portfolio purposes (company clients, see below)</li>
                  </ul>
                </div>
              </div>
              <div className="text">
                By getting Website Development, Consultation, etc. work done
                from Audacious Technologies, you grant permission to display
                your company name and/logo under “Our Latest Projects” tab under
                Homepage of our site. Company logos/names mentioned on our site
                are never announced or made public in any form or under any
                circumstances other than the above mentioned/portfolio purposes.
                Audacious Technologies explicitly warrants that no additional
                information about clients or their purposes will be made public
                or shared with third parties.
                <br />
                Company names and logos remain the only property of their
                respective owners and Audacious Technologies claims no
                endorsement, affiliation with its clients/customers by
                displaying such information. If you serve a company and would
                like add or remove your company name/logo from client list,
                please Contact Us.
              </div>
              <div className="text">
                <h5>4. Google Analytics</h5>While browsing through websites,
                third parties may gather data about your computer and browsing
                session. For instance, such information may contain type of
                browser used, IP address, OS and time spent on the website.
                Google Analytics is authorized by Audacious Technologies to
                collect such kind of data. Data collected is used to do survey,
                better understand our site visitors and overall performance of
                the site to improve our services. This information does not
                contain any data such as personal name, address, payment
                details, etc.
                <br />
                Data collected for analysis is never shared to any of the third
                parties outside the Audacious Technologies and those providing
                the data. Information collected by Google Analytics relating to
                your visits to this site is controlled by the Google Analytics
                Terms of Use and Privacy Policy.
              </div>
              <div className="text">
                <h5>5. Cookies Usage</h5>
                A cookie is a small amount of data generated by a website and
                saved by your web browser. Its purpose is to remember
                information about you, similar to a preference file created by a
                software application. Cookies contain information, including
                personal information that can later be read by a web server in
                the domain which issued the cookie. The cookies may collect the
                date, time of your visit to site, your Account information and
                your navigational, purchase history.
                <br />
                We might use session cookies that terminate on closing your
                browser and/or persistent cookies which remain on your PC/Mobile
                device until deleted. We, at Audacious Technologies use cookies
                to enhance functionality of our Site, Services and for website
                analytics.
                <br />
                Most of the browsers instinctively accept cookies, but if you
                wish to decline cookies then you can modify your browser
                settings. Please note that our Site is designed to operate with
                cookies enabled and blocking the use of cookies may negatively
                impact your site experience.
              </div>
              <div className="text">
                <h5>6. Personal Information Protection</h5>
                Audacious Technologies makes sure that we give our best to
                protect your Personal Information.
                <br />
                We follow below mentioned procedures to protect your personal
                information as much as possible.
                <div className="list-box">
                  <ul>
                    <li>
                      1. We use SSL i.e. “Secure Socket Layer Technology” to
                      encrypt sensitive information such as passwords, payment
                      transactions, etc.
                    </li>
                    <li>
                      2. Your Personal Information is saved on Audacious
                      Technologies secure servers that only Audacious
                      Technologies admins have access using an encrypted
                      password and SSL secured backend system.
                    </li>
                    <li>
                      3. We, at Audacious Technologies cannot view certain data
                      such as passwords, credit card information, etc. Only you
                      should have this information and we never ask you to
                      provide such details directly.
                    </li>
                  </ul>
                </div>
                Please be noted that no method of transmission over the
                Internet, or method of electronic storage, is 100% secure.
                <br />
                While we use commercially available means to protect your
                Personal Information, we cannot guarantee its absolute security.
              </div>
              <div className="text">
                <h5>7. Data Preservation</h5>
                We retain your information as long as we need to provide you
                with our services. We will retain certain information if
                necessary to comply with our legal obligations, to resolve open
                disputes or to enforce our License Agreement and/or Terms &
                Conditions. If such obligations no longer exist your information
                will be removed permanently from our databases.
                <br />
                If you wish to delete any of your Personal Information, please
                write to (OUR WEBSITE)
              </div>
              <div className="text">
                <h5>8. Changes to our Policy</h5>
                We, at Audacious Technologies, reserve the right to change the
                terms of this policy at any time. Please check the “Last
                Updated” date at the top of this page. We suggest our users
                review this page on a regular basis to make sure that you remain
                up to date with our policies.
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};

export default Privacy;
