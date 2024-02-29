import Image from "next/image";
import styles from "../styles/LearnIndustry.module.css";
const images = [
  {
    url: "/home/illastrator.svg",
    alt: "image1",
  },
  {
    url: "/home/c.svg",
    alt: "image2",
  },
  {
    url: "/home/python.svg",
    alt: "image3",
  },

  {
    url: "/home/google.svg",
    alt: "image3",
  },

  {
    url: "/home/Fiverr.svg",
    alt: "image3",
  },
  {
    url: "/home/Photoshop.svg",
    alt: "image3",
  },
  {
    url: "/home/Java.svg",
    alt: "image3",
  },
  {
    url: "/home/Django.svg",
    alt: "image3",
  },
];
const LearnIndustry = () => {
  return (
    <div className={`${styles.color_background} ${styles.heading_padding}`}>
      <div className="pb-4">
        <h1 className={`d-flex justify-content-center align-items-center`}>
          Learn the best industry skills
        </h1>
      </div>
      <div
        className={`d-flex flex-wrap gap-4 justify-content-center align-items-center`}
      >
        <div className={` d-flex justify-content-center align-items-center`}>
          <Image src="/home/illastrator.svg" alt="" height="90" width="92" />
        </div>
        <div className={` d-flex justify-content-center align-items-center`}>
          <Image src="/home/c.svg" alt="" height="90" width="92" />
        </div>
        <div className={` d-flex justify-content-center align-items-center`}>
          <Image src="/home/python.svg" alt="" height="90" width="92" />
        </div>
        <div className={` d-flex justify-content-center align-items-center`}>
          <Image src="/home/google.svg" alt="" height="90" width="92" />
        </div>
        <div className={` d-flex justify-content-center align-items-center`}>
          <Image src="/home/Fiverr.svg" alt="" height="90" width="92" />
        </div>
        <div className={` d-flex justify-content-center align-items-center`}>
          <Image src="/home/Photoshop.svg" alt="" height="90" width="92" />
        </div>
        <div className={` d-flex justify-content-center align-items-center`}>
          <Image src="/home/Java.svg" alt="" height="90" width="92" />
        </div>
        <div className={` d-flex justify-content-center align-items-center`}>
          <Image src="/home/Django.svg" alt="" height="90" width="92" />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default LearnIndustry;
