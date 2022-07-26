import { Container, Figure } from "react-bootstrap";
import AppRoutes from "@constants/AppRoutes";
import { Link } from "react-router-dom";
import iconAll from "@assets/images/icon.svg";
import "./styles.less";

const Banner = () => {
  return (
    <section className="banner-section-box">
      <div className="carousel-column">
        <div className="carousel-outer">
          <ul className="banner-carousel">
            <li className="slide-item background-image">
              <Container>
                <div className="content-box">
                  <div className="content-box-inn">
                    <h1>
                      <span>Digital Solution for</span> Your Business
                    </h1>
                    <div className="text">
                      <Figure className="image-box">
                        <Figure.Image src={iconAll} />
                      </Figure>
                    </div>
                    <div className="link-box">
                      <Link
                        to={AppRoutes.ABOUT}
                        className="theme-btn btn-style-one"
                      >
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              </Container>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Banner;
