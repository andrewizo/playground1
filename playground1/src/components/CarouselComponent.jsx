import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import exampleslide from "../Assets/exampleslide.png";
import RhinoImg from "../Assets/RhinoPrime.png";
import WukongImg from "../Assets/WukongPrime.png";
import './CarouselStyle.css';

function MyCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={exampleslide}
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>Mesa Prime</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={WukongImg}
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Wukong Prime</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={RhinoImg}
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Rhino Prime</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default MyCarousel;