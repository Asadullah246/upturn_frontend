import styles from "../styles/Home.module.css";
import Image from "next/image";
import Link from "next/link";

const Service = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-8 col-md-6">
          <div className={styles.svccard}>
            <h1 className={styles.h1font}>
              Our <span className={styles.ds}>Digital Services</span> <br />
              Special For You
            </h1>
            {/* <Button className={styles.btm} size="lg" style={{marginLeft: "50px", marginBottom: "75px"}}>Learn More</Button>{' '} */}
            <Link
              type="button"
              style={{ marginLeft: "50px", marginBottom: "75px" }}
              className={`${styles.btm} text-decoration-none`}
              href="/services"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className={styles.svccard2}>
            <Image
              className={styles.circle}
              src="/home/EllipseCircle.png"
              height="67"
              width="67"
              alt=""
            />
            <Image
              className={styles.ipic}
              src="/home/webIcon.png"
              height="100"
              width="100"
              alt=""
            />
            <h6 className={styles.h6}>web application</h6>
            <p className={styles.cardP}>
              A Web application (Web app) is an application program that is
              stored on a don’t know.
            </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-12 col-md-6 col-lg-4">
          <div className={styles.svccard3}>
            <Image
              className={styles.circle}
              src="/home/EllipseCircle.png"
              height="67"
              width="67"
              alt=""
            />
            <Image
              className={styles.ipic}
              src="/home/ai_artificial_intelligence_chip_icon.png"
              height="100"
              width="100"
              alt=""
            />
            <h6 className={styles.h6}>Artificial Intelligent</h6>
            <p className={styles.cardP}>
              Artificial intelligence is the simulation of human intelligence
              processes by machines.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className={styles.svccard3}>
            <Image
              className={styles.circle}
              src="/home/EllipseCircle.png"
              height="67"
              width="67"
              alt=""
            />
            <Image
              className={styles.ipic}
              src="/home/DigitalMarketing.png"
              height="100"
              width="107"
              alt=""
            />
            <h6 className={styles.h6}>Digital Marketing</h6>
            <p className={styles.cardP}>
              Digital marketing is the component of marketing that uses the
              Internet and online.
            </p>
          </div>
        </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div className={styles.svccard3}>
            <Image
              className={styles.circle}
              src="/home/EllipseCircle.png"
              height="67"
              width="67"
              alt=""
            />
            <Image
              className={styles.ipic}
              src="/home/appDevelopmentIcon.png"
              height="100"
              width="87"
              alt=""
            />
            <h6 className={styles.h6}>App Development</h6>
            <p className={styles.cardP}>
              The process of making software for smartphones, tablets and
              digital assistants.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
