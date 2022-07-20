import AppRoutes from "@constants/AppRoutes";
import { Link } from "react-router-dom";
import ClientImage from "@assets/images/clients-1.png";
import ClientImage1 from "@assets/images/logo-new.png";
import ClientImage2 from "@assets/images/clients-2.png";
import { Container, Figure } from "react-bootstrap";
import "./styles.less";
import Slider from "react-slick";

const Clients = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 7, 
    autoplay: true,
    speed: 20000,
    autoplaySpeed: 500,
    cssEase: "linear"
  }
  return (
    <section className="clients-section">
      <Container>
        <div className="sponsors-outer">
            <Slider {...settings}>
          <ul className="sponsors-carousel">
            <li className="slide-item"><Link to={AppRoutes.ABOUT}><Figure.Image src={ClientImage} /></Link></li>
            </ul>

            <ul className="sponsors-carousel">
            <li className="slide-item"><Link to={AppRoutes.ABOUT}><Figure.Image src={ClientImage1} /></Link></li>
            </ul>

            <ul className="sponsors-carousel">
            <li className="slide-item"><Link to={AppRoutes.ABOUT}><Figure.Image src={ClientImage2} /></Link></li>
            </ul>

            <ul className="sponsors-carousel">
            <li className="slide-item"><Link to={AppRoutes.ABOUT}><Figure.Image src={ClientImage} /></Link></li>
            </ul>

            <ul className="sponsors-carousel">
            <li className="slide-item"><Link to={AppRoutes.ABOUT}><Figure.Image src={ClientImage1} /></Link></li>
            </ul>

             <ul className="sponsors-carousel">
            <li className="slide-item"><Link to={AppRoutes.ABOUT}><Figure.Image src={ClientImage2} /></Link></li>
            </ul>

            <ul className="sponsors-carousel">
            <li className="slide-item"><Link to={AppRoutes.ABOUT}><Figure.Image src={ClientImage} /></Link></li>
            </ul>
            </Slider> 
        </div>
      </Container>
    </section>
  );
};

export default Clients;
