// SwiperCarousel.jsx
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

const images = [
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj3UcK4F4d8BX8t-WS_lH7zRoOY1kp4WEvYw&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlB0_4HDcaLTLrKchCouAPW-hbTxXc8DwSOg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXIhE4fxvorZ8sQdANRY8sfFhFxDl-uLCZPg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLsAR9BCWZyUefW-h7SGAod9XK-aXNn-gTFQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlB0_4HDcaLTLrKchCouAPW-hbTxXc8DwSOg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlB0_4HDcaLTLrKchCouAPW-hbTxXc8DwSOg&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlB0_4HDcaLTLrKchCouAPW-hbTxXc8DwSOg&s',
];

export default function SwiperCarousel() {
  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-10 overflow-visible">
      <Swiper
        modules={[Navigation, Pagination, EffectCoverflow, Autoplay]}
        effect="coverflow"
        grabCursor={true}
        centeredSlides={true}
        slidesPerView="auto"
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 120,
          modifier: 2.5,
          slideShadows: false,
        }}
        pagination={{ clickable: true }}
        navigation
        className="mySwiper !overflow-visible"
      >
        {images.map((src, i) => (
          <SwiperSlide
            key={i}
            className="w-64 h-96 rounded-xl overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105"
          >
            <img
              src={src}
              alt={`Slide ${i}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
