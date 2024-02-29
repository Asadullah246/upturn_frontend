import styles from "../styles/Home.module.css";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import Link from "next/link";

import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, FreeMode } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
// import "swiper/css/pagination";

// import "./styles.css";

const Mentor = () => {
  return (
    <>
      <div className={styles.secHeader}>
        <h1 className="text-center">Our Mentors</h1>
      </div>
      {/* <div className="container">
        <div className="row row-cols-1 row-cols-md-3 g-5">
          <div className="col">
            <div className="card h-100">
              <Image
                src="/mentor/Ratul.png"
                height="300"
                width="300"
                layout="responsive"
                className="card-img-top"
                alt=""
              />
              <div
                className="card-body"
                style={{ background: "#1D1D1D", color: "#FFFFFF" }}
              >
                <h5 className="card-title text-center">Akramul Hassan</h5>
                <p className="card-text text-center">
                  Complete web <br />
                  development course
                </p>
              </div>
              <div className="p-2" style={{ background: "#E9C46A" }}>
                <Link
                  href="https://akramulhassan.netlify.app/"
                  className={`link_decoration`}
                >
                  <h5 className="card-title text-center">Visit Profile</h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <Image
                src="/mentor/mansur.png"
                height="300"
                width="300"
                layout="responsive"
                className="card-img-top"
                alt=""
              />
              <div
                className="card-body"
                style={{ background: "#1D1D1D", color: "#FFFFFF" }}
              >
                <h5 className="card-title text-center">Mansur Billah</h5>
                <p className="card-text text-center">
                  Kid's <br />
                  Mindset
                </p>
              </div>
              <div className="p-2" style={{ background: "#E9C46A" }}>
                <Link
                  href="https://sites.google.com/view/mansurbillah/"
                  className={`link_decoration`}
                >
                  <h5 className="card-title text-center">Visit Profile</h5>
                </Link>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card h-100">
              <Image
                src="/mentor/formal_shadman.png"
                height="300"
                width="300"
                layout="responsive"
                className="card-img-top"
                alt=""
              />
              <div
                className="card-body"
                style={{ background: "#1D1D1D", color: "#FFFFFF" }}
              >
                <h5 className="card-title text-center">Shadman Sakib</h5>
                <p className="card-text text-center">
                  C programming with <br />
                  data structure & algorithm
                </p>
              </div>
              <div className="p-2" style={{ background: "#E9C46A" }}>
                <Link
                  href="https://sites.google.com/view/shadmans-portfolio/"
                  className={`link_decoration`}
                >
                  <h5 className="card-title text-center">Visit Profile</h5>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}

      <div className="container">
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          freeMode={true}
          modules={[Autoplay, FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="card h-100">
              <Image
                src="/mentor/Ratul.png"
                height="300"
                width="300"
                layout="responsive"
                className="card-img-top"
                alt=""
              />
              <div
                className="card-body"
                style={{ background: "#1D1D1D", color: "#FFFFFF" }}
              >
                <h5 className="card-title text-center">Akramul Hassan</h5>
                <p className="card-text text-center">
                  Complete web <br />
                  development course
                </p>
              </div>
              <div className="p-2" style={{ background: "#E9C46A" }}>
                <Link
                  href="https://akramulhassan.netlify.app/"
                  className={`link_decoration`}
                >
                  <h5 className="card-title text-center">Visit Profile</h5>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <Image
                src="/mentor/mr_rayhan.jpg"
                height="300"
                width="300"
                layout="responsive"
                className="card-img-top"
                alt=""
              />
              <div
                className="card-body"
                style={{ background: "#1D1D1D", color: "#FFFFFF" }}
              >
                <h5 className="card-title text-center">Mostafa Rayhan</h5>
                <p className="card-text text-center">
                  Complete web <br />
                  development course
                </p>
              </div>
              <div className="p-2" style={{ background: "#E9C46A" }}>
                <Link
                  href="https://mostafa-rayhan.github.io/My_Portfolio/"
                  className={`link_decoration`}
                >
                  <h5 className="card-title text-center">Visit Profile</h5>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card">
              <Image
                src="/mentor/mansur.png"
                height="300"
                width="300"
                layout="responsive"
                className="card-img-top"
                alt=""
              />
              <div
                className="card-body"
                style={{ background: "#1D1D1D", color: "#FFFFFF" }}
              >
                <h5 className="card-title text-center">Mansur Billah</h5>
                <p className="card-text text-center">
                  Kid's <br />
                  Mindset
                </p>
              </div>
              <div className="p-2" style={{ background: "#E9C46A" }}>
                <Link
                  href="https://sites.google.com/view/mansurbillah/"
                  className={`link_decoration`}
                >
                  <h5 className="card-title text-center">Visit Profile</h5>
                </Link>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="card h-100">
              <Image
                src="/mentor/formal_shadman.png"
                height="300"
                width="300"
                layout="responsive"
                className="card-img-top"
                alt=""
              />
              <div
                className="card-body"
                style={{ background: "#1D1D1D", color: "#FFFFFF" }}
              >
                <h5 className="card-title text-center">Shadman Sakib</h5>
                <p className="card-text text-center">
                  C programming with <br />
                  data structure & algorithm
                </p>
              </div>
              <div className="p-2" style={{ background: "#E9C46A" }}>
                <Link
                  href="https://sites.google.com/view/shadmans-portfolio/"
                  className={`link_decoration`}
                >
                  <h5 className="card-title text-center">Visit Profile</h5>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Mentor;
