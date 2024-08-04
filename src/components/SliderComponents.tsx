import { useEffect } from 'react';
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './SliderComponent.css'; // Add custom styles if needed

const SliderComponent = () => {
  useEffect(() => {
    new Swiper('.swiper', {
      modules: [Navigation, Pagination],
      loop: true,
      autoplay: {
        delay: 7000,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }, []);

  return (
    <div className="swiper-container swiper">
      <div className="swiper-wrapper">
        <div className="swiper-slide">
          <img
            src="./images/banner 2.jpg"
            alt="Slide 1"
            className="swiper-slide-image"
          />
        </div>
        <div className="swiper-slide">
          <img
            src="./images/banner 3.jpg"
            alt="Slide 2"
            className="swiper-slide-image"
          />
        </div>
        <div className="swiper-slide">
          <img
            src="./images/banner 1.png"
            alt="Slide 3"
            className="swiper-slide-image"
          />
        </div>
        <div className="swiper-slide">Slide contoh</div>
        {/* Add more slides as needed */}
      </div>
      <div className="swiper-pagination"></div>
      <div className="swiper-button-next"></div>
      <div className="swiper-button-prev"></div>
    </div>
  );
};

export default SliderComponent;
