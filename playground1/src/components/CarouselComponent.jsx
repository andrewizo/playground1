import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import './CarouselStyle.css';
import MS1 from '../Assets/Slides/MarketingSample1.png';
import MS2 from '../Assets/Slides/MarketingSample2.png';

function MyCarousel() {
    return (
        <Carousel>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={MS1}
                    alt="First slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src={MS2}
                    alt="Second slide"
                />
            </Carousel.Item>
        </Carousel>
    );
}

export default MyCarousel;