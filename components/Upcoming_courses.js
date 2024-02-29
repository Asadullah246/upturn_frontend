import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import Link from "next/link";

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
  // console.log(image);
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
                <p className={` ${styles.starting_date} color-secondary  `}>{starting_date}</p>
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
          <Link className={`${styles.Enroll_button} bg-color-primary text-white `} href={`/courses/${slug}`}>
            Enrolls Now
          </Link>
        </div>
      </div>
    </>
  );
};

export default Upcoming_courses;
