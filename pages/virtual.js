import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";

const virtualClassroom = () => {
  return (
    <div className="text-center container">
      <h1 className={`${styles.h1} mt-5`}>Under Construction</h1>
      {/* <div className="d-flex align-items-center justify-content-center"> */}
      <div class="row">
        <div className="col">
          <Image
            src="/home/under_construction.svg"
            width="800"
            height="800"
            layout="responsive"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default virtualClassroom;
