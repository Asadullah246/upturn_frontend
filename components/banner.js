import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Autoplay, Pagination, HashNavigation } from "swiper";

import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';

export default function App() {
  return (
    <>
        <Container>
            <h1 className="text-center mt-5 mb-5">HOW YOU CAN DEVELOP YOUR INNER SKILL WITH BASIC EDUCATION</h1>
            <Swiper
                spaceBetween={30}
                hashNavigation={{
                watchState: true,
                }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                pagination={{
                clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, HashNavigation]}
                className="mySwiper"
            >
                <SwiperSlide data-hash="slide1"><Image src="./assets/Image/Banner/Best-mentoring-online-course.png" /></SwiperSlide>
                <SwiperSlide data-hash="slide2"><Image src="./assets/Image/Banner/Best-online-course.png" /></SwiperSlide>
                <SwiperSlide data-hash="slide3"><Image src="./assets/Image/Banner/Career-guideline.png" /></SwiperSlide>
                <SwiperSlide data-hash="slide4"><Image src="./assets/Image/Banner/online-live-class.png" /></SwiperSlide>
                <SwiperSlide data-hash="slide5"><Image src="./assets/Image/Banner/practice-module.png" /></SwiperSlide>
            </Swiper>
        </Container>
        
    </>
  );
}
