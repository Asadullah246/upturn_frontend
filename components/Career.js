import styles from "../styles/Home.module.css";
import Button from "react-bootstrap/Button";
import Image from "next/image";
import Link from "next/link";
const Career = () => {
  return (
    <div className="mb-5">
      <div className={styles.secHeader}>
        <h1 className="text-center">
          Improve your career
          <br /> by studying under the best instructor
        </h1>
      </div>

      <div className="container">
        <div className="card h-100 border-0">
          <div className="container m-3">
            <div className="row">
              <div className="col-12 col-lg-5">
                <div className="mr-3" style={{ marginRight: "22px" }}>
                  <Image
                    src="/home/data.png"
                    alt=""
                    className="card-img-top"
                    height="219"
                    width="441"
                    layout="fixed"
                    border-radius="4"
                  />
                </div>
              </div>
              {/* style={{marginLeft:"40px"}} */}
              <div className="col-12 col-lg-5 col-md-6">
                <h3 className={styles.h} style={{ marginTop: "38px" }}>
                  C programming with data structure & algorithm
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
                      David Junior
                    </p>
                  </div>
                </div>
                {/* style={{marginLeft:"-40px"}} */}
              </div>
              <div className="col-12 col-lg-2">
                <p className={styles.offer}>50%off</p>
                <h1 className={styles.priceCareer}>৳2200</h1>
                {/* <Button className={styles.button} style={{textAlign:"right"}} size="lg">Learn More</Button>{' '} */}
                <div className="text-end">
                  <Link
                    className={`${styles.Enroll_button}`}
                    href={"/courses/data-structure-with-c"}
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
                    layout="fixed"
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
                        src="/home/mentor.png"
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
                  <h1 className={styles.priceCareer}>৳1250</h1>
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
    </div>
  );
};

export default Career;
