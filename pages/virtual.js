import Image from "next/image";
import React from "react";
import styles from "../styles/Home.module.css";
import TopScrolling from "../components/shared/ScrollToTop";
import SearchPopUp from "../components/shared/SearchPopUp";
import PageHeader from "../components/shared/pageHeader";

const Virtual = () => {
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
      <SearchPopUp />
      <TopScrolling />
    </div>
  );
};

export default Virtual;
