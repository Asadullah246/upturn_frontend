import styles from "../styles/Home.module.css";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import TopScrolling from "../components/shared/ScrollToTop";
import SearchPopUp from "../components/shared/SearchPopUp";
//import * as fs from "fs";

const courses = (props) => {
  const [courses, setCourses] = useState(props.allCourses);
  console.log(courses);
  return (
    <>
      <Head>
        <title>Best IT Online Live Courses in Bangladesh</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&family=Raleway:wght@600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.ico" />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
          rel="stylesheet"
        />

        <link
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
          rel="stylesheet"
        />

        <link
          href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.1.0/mdb.min.css"
          rel="stylesheet"
        />
        <script
          type="text/javascript"
          src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/6.1.0/mdb.min.js"
        ></script>
      </Head>
      {/* // career section */}
      <section>
        <div className={styles.secHeader}>
          <h1 className="text-center">
            Improve your career
            <br /> by studying under the best instructor
          </h1>
        </div>
        <div className="container mt-4">
          <div className="card h-100 border-0">
            <div className="container m-3">
              <div className="row">
                <div className="col-12 col-lg-5">
                  {/* <img src="/home/Rectangle 843.png" alt="pic" /> */}
                  <div className="mr-3" style={{ marginRight: "22px" }}>
                    <Image
                      src="/home/GraphicImage.png"
                      alt=""
                      className="card-img-top"
                      height="219"
                      width="441"
                    />
                  </div>
                </div>
                {/* style={{marginLeft:"40px"}} */}
                <div className="col-12 col-lg-5 col-md-6">
                  <h3 className={styles.h} style={{ marginTop: "38px" }}>
                    Complete graphics design course
                  </h3>
                  <p className={styles.careerTime}>
                    Starts On 2 Jan - Ends On 18 Jan
                  </p>
                  <div className="row">
                    <div className="col-2">
                      <div style={{ width: "46px", height: "46px" }}>
                        <Image
                          src="/home/mentorSmall.png"
                          className="img-fluid"
                          alt="pic"
                          width="70"
                          height="70"
                          fil="responsive"
                        />
                      </div>
                    </div>
                    <div className="col-10">
                      <p className={styles.pfs24} style={{ marginTop: "5px" }}>
                        Sadik Rahman
                      </p>
                    </div>
                  </div>
                  {/* style={{marginLeft:"-40px"}} */}
                </div>
                <div className="col-12 col-lg-2">
                  <div>
                    <p className={styles.offer}>50%off</p>
                    <h1 className={styles.priceCareer}>৳1350</h1>
                    {/* <Button className={styles.button} style={{textAlign:"right"}} size="lg">Learn More</Button>{' '} */}
                    <div className="text-end">
                      <Link
                        className={`${styles.Enroll_button}`}
                        href={"/courses/complete-graphics-design"}
                      >
                        <button
                          type="button"
                          className={styles.btm}
                          style={{ marginRight: "39px" }}
                        >
                          View More
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* upcoming courses Section */}
      <section>
        <div className="container">
          <div className="d-flex justify-content-center align-items-center">
            <h1 className={styles.secHeader}>Our Upcoming Courses</h1>
          </div>
          <div className="row row-cols-1 row-cols-md-1 row-cols-lg-2 row-cols-sm-1 row-cols-xl-2 row-cols-xxl-3 g-5">
            {courses.courses.map((course) => {
              return (
                <div key={course.slug} className={``}>
                  <div className={`col`}>
                    <div className={`cardBox_size`}>
                      <div className={`card`}>
                        <div className={`${styles.cart}`}>
                          <Image
                            src={course.images}
                            className="card-img-top"
                            alt=""
                            height="218"
                            width="385"
                            fil="responsive"
                          />
                          <div className={`card-body`}>
                            <div className={`d-flex ${styles.course_time}`}>
                              <Image
                                src="/home/clock.svg"
                                alt=""
                                height="16"
                                width="17"
                              />
                              <p className={`px-2`}>{course.time}</p>
                            </div>
                            <div className={`paragraph`}>
                              <h2 className={styles.titleHeader}>
                                {course.title}
                              </h2>
                              <p className={styles.starting_date}>
                                {course.starting_date}
                              </p>
                            </div>
                            <div
                              className={`d-flex align-items-center justify-content-between ${styles.cart_lastPadding}`}
                            >
                              <div
                                className={`d-flex align-items-center justify-content-start text-center`}
                              >
                                <Image
                                  src={course.mentor_image}
                                  height="45"
                                  width="45"
                                  alt=""
                                />
                                <p
                                  className={`px-2 ${styles.paragraph_solution}`}
                                >
                                  {course.mentorName}
                                </p>
                              </div>
                              <span className={styles.price}>
                                ৳{course.money}
                              </span>
                            </div>
                          </div>
                        </div>
                        <Link
                          className={`${styles.Enroll_button}`}
                          href={`/courses/${course.slug}`}
                        >
                          Enrolls Now
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <SearchPopUp />
      <TopScrolling />
    </>
  );
};

export async function getServerSideProps(context) {
  let data = await fetch("https://e-learning-server-five.vercel.app/courses/");
  let allCourses = await data.json();
  console.log(allCourses);

  return {
    props: { allCourses },
  };
}

export default courses;
