import AppRoutes from "@constants/AppRoutes";
import Blog from "@assets/images/blog1.jpg";
import Blog2 from "@assets/images/blog-2.jpg";
import Blog3 from "@assets/images/blog-3.jpg";
import Blog4 from "@assets/images/blog-4.jpg";
import { Col, Container, Figure, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "./styles.less";

const Blogs = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 4000,
    autoplaySpeed: 500,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <section className="blog-section-box">
      <Container>
        <div className="sec-title left">
          <h2>Latest Blog Update</h2>
          <div className="separater"></div>
        </div>
      <Slider {...settings}>
        <Row className="blog-box">
          <Col xl={4} lg={4} md={4} className="w-100 p-3">
            <div className="blog-carousel">
              <div className="blog-block">
                <div className="inner-box">
                  <div className="image-box">
                    <Figure className="image">
                      <Figure.Image src={Blog} />
                    </Figure>
                  </div>
                  <div className="caption-box">
                    <h3>
                      <Link to={AppRoutes.BLOG}>What is Lorem Ipsum?...</Link>
                    </h3>
                    <ul className="post-meta">
                      <li>Post: 15 April 2018</li>
                    </ul>
                    <div className="text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry..
                    </div>
                    <Link to={AppRoutes.BLOG} className="readmore-btn"> Read More <i className="far fa-arrow-alt-circle-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="blog-box">
          <Col xl={4} lg={4} md={4} className="w-100 p-3">
            <div className="blog-carousel">
              <div className="blog-block">
                <div className="inner-box">
                  <div className="image-box">
                    <Figure className="image">
                      <Figure.Image src={Blog2} />
                    </Figure>
                  </div>
                  <div className="caption-box">
                    <h3>
                      <Link to={AppRoutes.BLOG}>What is Lorem Ipsum?...</Link>
                    </h3>
                    <ul className="post-meta">
                      <li>Post: 15 April 2018</li>
                    </ul>
                    <div className="text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry..
                    </div>
                    <Link to={AppRoutes.BLOG} className="readmore-btn"> Read More <i className="far fa-arrow-alt-circle-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="blog-box">
          <Col xl={4} lg={4} md={4} className="w-100 p-3">
            <div className="blog-carousel">
              <div className="blog-block">
                <div className="inner-box">
                  <div className="image-box">
                    <Figure className="image">
                      <Figure.Image src={Blog3} />
                    </Figure>
                  </div>
                  <div className="caption-box">
                    <h3>
                      <Link to={AppRoutes.BLOG}>What is Lorem Ipsum?...</Link>
                    </h3>
                    <ul className="post-meta">
                      <li>Post: 15 April 2018</li>
                    </ul>
                    <div className="text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry..
                    </div>
                    <Link to={AppRoutes.BLOG} className="readmore-btn"> Read More <i className="far fa-arrow-alt-circle-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="blog-box">
          <Col xl={4} lg={4} md={4} className="w-100 p-3">
            <div className="blog-carousel">
              <div className="blog-block">
                <div className="inner-box">
                  <div className="image-box">
                    <Figure className="image">
                      <Figure.Image src={Blog4} />
                    </Figure>
                  </div>
                  <div className="caption-box">
                    <h3>
                      <Link to={AppRoutes.BLOG}>What is Lorem Ipsum?...</Link>
                    </h3>
                    <ul className="post-meta">
                      <li>Post: 15 April 2018</li>
                    </ul>
                    <div className="text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry..
                    </div>
                    <Link to={AppRoutes.BLOG} className="readmore-btn"> Read More <i className="far fa-arrow-alt-circle-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="blog-box">
          <Col xl={4} lg={4} md={4} className="w-100 p-3">
            <div className="blog-carousel">
              <div className="blog-block">
                <div className="inner-box">
                  <div className="image-box">
                    <Figure className="image">
                      <Figure.Image src={Blog4} />
                    </Figure>
                  </div>
                  <div className="caption-box">
                    <h3>
                      <Link to={AppRoutes.BLOG}>What is Lorem Ipsum?...</Link>
                    </h3>
                    <ul className="post-meta">
                      <li>Post: 15 April 2018</li>
                    </ul>
                    <div className="text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry..
                    </div>
                    <Link to={AppRoutes.BLOG} className="readmore-btn"> Read More <i className="far fa-arrow-alt-circle-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>

        <Row className="blog-box">
          <Col xl={4} lg={4} md={4} className="w-100 p-3">
            <div className="blog-carousel">
              <div className="blog-block">
                <div className="inner-box">
                  <div className="image-box">
                    <Figure className="image">
                      <Figure.Image src={Blog4} />
                    </Figure>
                  </div>
                  <div className="caption-box">
                    <h3>
                      <Link to={AppRoutes.BLOG}>What is Lorem Ipsum?...</Link>
                    </h3>
                    <ul className="post-meta">
                      <li>Post: 15 April 2018</li>
                    </ul>
                    <div className="text">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry..
                    </div>
                    <Link to={AppRoutes.BLOG} className="readmore-btn"> Read More <i className="far fa-arrow-alt-circle-right"></i></Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
    </Slider>
      </Container>
    </section>
  );
};

export default Blogs;
