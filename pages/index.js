import Head from "next/head";
// import { Raleway, Poppins } from "@next/font/google";
import styles from "../styles/Home.module.css";
import Hero from "../components/Hero";
import Service from "../components/Service";
import Career from "../components/Career";
import Mentor from "../components/Mentor";
import Question from "../components/Question";
import LearnIndustry from "../components/LearnIndustry";
import Upcoming_courses from "../components/Upcoming_courses";
import React, { useState, useEffect, useRef } from "react";
import Slider from "../components/Slider";
import AboutUs from "../components/home/AboutUs";
import VideoSection from "../components/home/VideoSection";
import TargetMarketPlace from "../components/home/TargetMarketPlace";
import AboutCeo from "../components/home/AboutCeo";
import PopularCourses from "../components/home/PopularCourses";

// const Heading = Raleway({ weight: ["600", "700"], subsets: ["sans-serif"] });
// const paragraph_font = Poppins({ weight: "500", subsets: ["sans-serif"] });

export default function Home(props) {
  const [courses, setCourses] = useState(props.allCourses);
  console.log(courses);
  console.log(courses.courses);

  return (
    <div>
      <Head>
        <title>Upturn Idea</title>
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
      <Hero />
      <AboutUs/>
      <VideoSection/>
      <TargetMarketPlace/>
      <AboutCeo/>
      <PopularCourses courses={courses}/>
      <Service />
      <Career />
      <LearnIndustry />
      <Slider />
      <Mentor />
      <Question />
    </div>
  );
}

export async function getServerSideProps(context) {
  let data = await fetch("https://e-learning-server-five.vercel.app/courses/");
  let allCourses = await data.json();
  console.log(allCourses);

  return {
    props: { allCourses },
  };
}
