import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

// const upcommingCourses = [
//   {
//     title: "Microsoft office bundle course",
//     images: "/home/courses/microsoftCourse.svg",
//     time: "4 Months",
//     starting_date: "Starts On 23 Dec - Ends On 08 Jan",
//     mentor_image: "/home/courses/mentor/officeMentor.svg",
//     mentorName: "David Junior",
//     money: "৳1200",
//   },
//   {
//     title: "Complete graphics design",
//     images: "/home/courses/graphicCourse.svg",
//     time: "4 Months",
//     starting_date: "Starts On 22 Dec - Ends On 10 Jan",
//     mentor_image: "/home/courses/mentor/graphicMentor.svg",
//     mentorName: "David Junior",
//     money: "৳2500",
//   },
//   {
//     title: "Flutter app development",
//     images: "/home/courses/flutterCourse.svg",
//     time: "5 Months",
//     starting_date: "Starts On 6 Jan - Ends On 22 Jan",
//     mentor_image: "/home/courses/mentor/flutterMentor.svg",
//     mentorName: "David Junior",
//     money: "৳3800",
//   },
//   {
//     title: "Data structure & algorithm with C programming",
//     images: "/home/courses/datastructureCourse.svg",
//     time: "3 Months",
//     starting_date: "Starts On 2 Jan - Ends On 18 Jan",
//     mentor_image: "/home/courses/mentor/datastructureMentor.svg",
//     mentorName: "David Junior",
//     money: "৳2200",
//   },
//   {
//     title: "Complete web development with django",
//     images: "/home/courses/webDevelopmentCourse.svg",
//     time: "4 Months",
//     starting_date: "Starts On 26 Dec - Ends On 15 Jan",
//     mentor_image: "/home/courses/mentor/jangoMentor.svg",
//     mentorName: "David Junior",
//     money: "৳2500",
//   },
//   {
//     title: "Python for data science",
//     images: "/home/courses/PythonCourse.svg",
//     time: "4 Months",
//     starting_date: "Starts On 6 Jan - Ends On 22 Jan",
//     mentor_image: "/home/courses/mentor/pythonMentor.svg",
//     mentorName: "David Junior",
//     money: "৳3500",
//   },
// ];

const Upcoming_courses = ({
  image,
  title,
  time,
  starting_date,
  mentor_image,
  mentorName,
  money,
  slug,
}) => {
  console.log(image);
  return (
    <>
      <div className={`cardBox_size`}>
        <div className={`card`}>
          <div className={`${styles.cart}`}>
            <Image
              src={image}
              className="card-img-top"
              alt=""
              height="218"
              width="385"
              fil="responsive"
            />
            <div className={`card-body`}>
              <div className={`d-flex ${styles.course_time}`}>
                <Image src="/home/clock.svg" alt="" height="16" width="17" />
                <p className={`px-2`}>{time}</p>
              </div>
              <div className={`paragraph`}>
                <h2 className={styles.titleHeader}>{title}</h2>
                <p className={styles.starting_date}>{starting_date}</p>
              </div>
              <div
                className={`d-flex align-items-center justify-content-between ${styles.cart_lastPadding}`}
              >
                <div
                  className={`d-flex align-items-center justify-content-start text-center`}
                >
                  <Image src={mentor_image} height="45" width="45" alt="" />
                  <p className={`px-2 ${styles.paragraph_solution}`}>
                    {mentorName}
                  </p>
                </div>
                <span className={styles.price}>৳{money}</span>
              </div>
            </div>
          </div>
          <Link className={`${styles.Enroll_button}`} href={`/courses/${slug}`}>
            Enrolls Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Upcoming_courses;
