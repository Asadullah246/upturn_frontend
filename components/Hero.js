import Image from "next/image";
import styles from "../styles/Home.module.css";
import Button from "react-bootstrap/Button";
import Link from "next/link";

const Hero = () => {
  return (
    <section style={{ background: "#FEFAED" }}>
      <div className="container">
        <div className="row g-0">
          <div
            className="c0[-12 col-sm-12 col-lg-6"
            style={{ marginTop: "143px" }}
          >
            <h5 className={styles.h5}>Bright Your Future With</h5>
            <h1 className={styles.h1}>Learn New Technology From All Experts</h1>
            <p className={styles.p}>
              Build skills with courses, certificates, and degrees online from
              world-class universities and companies.
            </p>
            {/* <div className={styles.btnn}>
                            <button type="button" className="btn" >Join Virtual Classroom</button>
                        </div> */}
            {/* <Button className={styles.button} size="lg" style={{marginTop:"41px"}}>Join Virtual Classroom</Button>{' '}  */}
            <Link href="/virtual">
              <button
                type="button"
                style={{ marginTop: "41px" }}
                className={styles.btm}
              >
                Join Virtual Classroom
              </button>
            </Link>
          </div>

          <div
            className="col-12 col-lg-6 col-sm-12"
            style={{ marginTop: "143px" }}
          >
            <div className="w-100">
              <Image
                src="/home/Group.png"
                alt=""
                width="640"
                height="468"
                layout="responsive"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
