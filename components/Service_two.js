import styles from "../styles/Home.module.css";
import design from "../styles/Services.module.css";
import style from "../styles/Course_Details.module.css";
import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import Image from "next/image";

const Service_two = () => {
  const [aimodalShow, setaiModalShow] = useState(false);
  const [dmmodalShow, setdmModalShow] = useState(false);
  const [webmodalShow, setwebModalShow] = useState(false);
  const [modalShow, setModalShow] = useState(false);
  return (
    <section style={{ background: "background: #1E1E1E;" }}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 col-lg-6">
            <div
              className={design.svccard2}
              onClick={() => setaiModalShow(true)}
            >
              <img className={styles.circle} src="/home/EllipseCircle.png" />
              <img
                className={design.ipic}
                src="/home/ai_artificial_intelligence_chip_icon.png"
              />
              <h6 className={design.h6}>Artificial Intelligent</h6>
              <p className={design.cardP}>
                Artificial intelligence is the simulation of human intelligence
                processes by machines.
              </p>
            </div>
            <ArtificialIntelligent
              show={aimodalShow}
              onHide={() => setaiModalShow(false)}
            />
          </div>

          <div className="col-12 col-md-6 col-lg-6">
            <div
              className={design.svccard2}
              id={design.pic}
              onClick={() => setdmModalShow(true)}
            >
              <img className={styles.circle} src="/home/EllipseCircle.png" />
              <img className={design.ipic} src="/icon/vector.svg" />

              <h6 className={design.h6}>
                <span>Digital Marketing</span>
              </h6>
              <p className={design.cardP}>
                Digital marketing is the component of marketing that uses the
                Internet and online.
              </p>
            </div>
            <DigitalMarketing
              show={dmmodalShow}
              onHide={() => setdmModalShow(false)}
            />
          </div>

          <div className="col-12 col-md-6 col-lg-6">
            <div
              className={design.svccard2}
              onClick={() => setwebModalShow(true)}
            >
              <img className={styles.circle} src="/home/EllipseCircle.png" />
              <img className={design.ipic} src="/home/webIcon.png" />
              <h6 className={design.h6}>web application</h6>
              <p className={design.cardP}>
                A Web application (Web app) is an application program that is
                stored on a don’t know.
              </p>
            </div>
            <WebApplication
              show={webmodalShow}
              onHide={() => setwebModalShow(false)}
            />
          </div>

          <div className="col-12 col-md-6 col-lg-6">
            <div className={design.svccard2} onClick={() => setModalShow(true)}>
              <img className={styles.circle} src="/home/EllipseCircle.png" />
              <img className={design.ipic} src="/home/appDevelopmentIcon.png" />
              <h6 className={design.h6}>App Development</h6>
              <p className={design.cardP}>
                The process of making software for smartphones, tablets and
                digital assistants.
              </p>
            </div>
            <AppDevelopment
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service_two;

// Artificial Intelligent Modal

function ArtificialIntelligent(props) {
  return (
    <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton></Modal.Header>

      <Modal.Header className={`show-grid text-start ${design.btnClose}`}>
        <Container>
          {/* <div className={`text-end fixed-top ${design.modalBtn}`}>
                <button type="button" className={design.Btn} onClick={() => window.history.back()}>X</button>
            </div>  */}

          <Row>
            <Col xs={12} md={5}>
              <div className={`imgsize`}>
                <Image
                  src="/home/AI.jpg"
                  className={`rounded-3 mt-3 mb-3`}
                  alt=""
                  width="640"
                  height="468"
                  layout="responsive"
                  sizes="(max-width: 320px) 100vw, (max-width: 640px) 50vw, 640px"
                />
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div>
                <h1 className={design.modalH1}>Artificial Intelligent</h1>
                <p className={design.modalP1}>
                  The process of making software for smartphones, tablets and
                  digital assistants.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={5}>
              <div className="d-flex">
                <div>
                  <Image
                    src="/home/Vector (8).png"
                    alt=""
                    height="16"
                    width="26"
                    layout="fixed"
                  />
                </div>
                <div style={{ marginLeft: "16px" }}>
                  <p className={design.modalP2}>Android App Development</p>
                </div>
              </div>

              <div className="d-flex">
                <div>
                  <Image
                    src="/home/Vector (8).png"
                    alt=""
                    height="16"
                    width="26"
                    layout="fixed"
                  />
                </div>
                <div style={{ marginLeft: "16px" }}>
                  <p className={design.modalP2}>Hybrid App Development</p>
                </div>
              </div>

              <div className="d-flex">
                <div>
                  <Image
                    src="/home/Vector (8).png"
                    alt=""
                    height="16"
                    width="26"
                    layout="fixed"
                  />
                </div>
                <div style={{ marginLeft: "16px" }}>
                  <p className={design.modalP2}>
                    Mobile apps with blockchain integration
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div className="d-flex">
                <div>
                  <Image
                    src="/home/Vector (8).png"
                    alt=""
                    height="16"
                    width="26"
                    layout="fixed"
                  />
                </div>
                <div style={{ marginLeft: "16px" }}>
                  <p className={design.modalP2}>Mobile Game Development</p>
                </div>
              </div>

              <div className="d-flex">
                <div>
                  <Image
                    src="/home/Vector (8).png"
                    alt=""
                    height="16"
                    width="26"
                    layout="fixed"
                  />
                </div>
                <div style={{ marginLeft: "16px" }}>
                  <p className={design.modalP2}>eCommerce App Development</p>
                </div>
              </div>

              <div className="d-flex">
                <div>
                  <Image
                    src="/home/Vector (8).png"
                    alt=""
                    height="16"
                    width="26"
                    layout="fixed"
                  />
                </div>
                <div style={{ marginLeft: "16px" }}>
                  <p className={design.modalP2}>Point Of Sales (POS) Apps</p>
                </div>
              </div>
            </Col>
          </Row>

          <div>
            <h3 className={design.modalH3}>Development Details</h3>
          </div>
          <div>
            <p className={design.modalP2}>
              Mobile app development presents unique challenges compared to
              building a feature-rich website. The App Store and Google Play
              Store have compliance requirements that might affect your app that
              could prevent it from getting approved for sale on the stores.
            </p>
          </div>
          <div
            className="text-center"
            style={{ marginTop: "60px", marginBottom: "40px" }}
          >
            <button type="button" className={styles.btm}>
              Contact Us
            </button>
          </div>
        </Container>
      </Modal.Header>
    </Modal>
  );
}

//   Digital Marketing Modal

function DigitalMarketing(props) {
  return (
    <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton></Modal.Header>

      <Modal.Header className={`show-grid text-start ${design.btnClose}`}>
        <Container>
          {/* <div className={`text-end fixed-top ${design.modalBtn}`}>
                <button type="button" className={design.Btn} onClick={() => window.history.back()}>X</button>
            </div>  */}

          <Row>
            <Col xs={12} md={5}>
              <div>
                <Image
                  src="/home/digital marketing.jpg"
                  className={`rounded-3 mt-3 mb-3`}
                  alt=""
                  width="640"
                  height="468"
                  layout="responsive"
                />
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div>
                <h1 className={design.modalH1}>Digital Marketing</h1>
                <p className={design.modalP1}>
                  The process of making software for smartphones, tablets and
                  digital assistants.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={5}>
              <div className="d-flex">
                <div>
                  <Image
                    src="/home/Vector (8).png"
                    alt=""
                    height="16"
                    width="26"
                    layout="fixed"
                  />
                </div>
                <div style={{ marginLeft: "16px" }}>
                  <p className={design.modalP2}>Android App Development</p>
                </div>
              </div>

              <div className="d-flex">
                <div>
                  <Image
                    src="/home/Vector (8).png"
                    alt=""
                    height="16"
                    width="26"
                    layout="fixed"
                  />
                </div>
                <div style={{ marginLeft: "16px" }}>
                  <p className={design.modalP2}>Hybrid App Development</p>
                </div>
              </div>

              <div className="d-flex">
                <div>
                  <Image
                    src="/home/Vector (8).png"
                    alt=""
                    height="16"
                    width="26"
                    layout="fixed"
                  />
                </div>
                <div style={{ marginLeft: "16px" }}>
                  <p className={design.modalP2}>
                    Mobile apps with blockchain integration
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div className="d-flex">
                <div>
                  <Image
                    src="/home/Vector (8).png"
                    alt=""
                    height="16"
                    width="26"
                    layout="fixed"
                  />
                </div>
                <div style={{ marginLeft: "16px" }}>
                  <p className={design.modalP2}>Mobile Game Development</p>
                </div>
              </div>

              <div className="d-flex">
                <div>
                  <Image
                    src="/home/Vector (8).png"
                    alt=""
                    height="16"
                    width="26"
                    layout="fixed"
                  />
                </div>
                <div style={{ marginLeft: "16px" }}>
                  <p className={design.modalP2}>eCommerce App Development</p>
                </div>
              </div>

              <div className="d-flex">
                <div>
                  <Image
                    src="/home/Vector (8).png"
                    alt=""
                    height="16"
                    width="26"
                    layout="fixed"
                  />
                </div>
                <div style={{ marginLeft: "16px" }}>
                  <p className={design.modalP2}>Point Of Sales (POS) Apps</p>
                </div>
              </div>
            </Col>
          </Row>

          <div>
            <h3 className={design.modalH3}>Development Details</h3>
          </div>
          <div>
            <p className={design.modalP2}>
              Mobile app development presents unique challenges compared to
              building a feature-rich website. The App Store and Google Play
              Store have compliance requirements that might affect your app that
              could prevent it from getting approved for sale on the stores.
            </p>
          </div>
          <div
            className="text-center"
            style={{ marginTop: "60px", marginBottom: "40px" }}
          >
            <button type="button" className={styles.btm}>
              Contact Us
            </button>
          </div>
        </Container>
      </Modal.Header>
    </Modal>
  );
}

//   web application Modal

function WebApplication(props) {
  return (
    <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton></Modal.Header>

      <Modal.Header className={`show-grid text-start ${design.btnClose}`}>
        <Container>
          {/* <div className={`text-end fixed-top ${design.modalBtn}`}>
                <button type="button" className={design.Btn} onClick={() => window.history.back()}>X</button>
            </div>  */}

          <Row>
            <Col xs={12} md={5}>
              <div>
                <Image
                  src="/home/web.jpg"
                  className={`rounded-3 mt-3 mb-3`}
                  alt=""
                  width="640"
                  height="400"
                  layout="responsive"
                />
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div>
                <h1 className={design.modalH1}>Web Application</h1>
                <p className={design.modalP1}>
                  The process of making software for smartphones, tablets and
                  digital assistants.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={5}>
              <div className="d-flex">
                <div>
                  <Image
                    src="/home/Vector (8).png"
                    alt=""
                    height="16"
                    width="26"
                    layout="fixed"
                  />
                </div>
                <div style={{ marginLeft: "16px" }}>
                  <p className={design.modalP2}>Android App Development</p>
                </div>
              </div>

              <div className="d-flex">
                <div>
                  <Image
                    src="/home/Vector (8).png"
                    alt=""
                    height="16"
                    width="26"
                    layout="fixed"
                  />
                </div>
                <div style={{ marginLeft: "16px" }}>
                  <p className={design.modalP2}>Hybrid App Development</p>
                </div>
              </div>

              <div className="d-flex">
                <div>
                  <Image
                    src="/home/Vector (8).png"
                    alt=""
                    height="16"
                    width="26"
                    layout="fixed"
                  />
                </div>
                <div style={{ marginLeft: "16px" }}>
                  <p className={design.modalP2}>
                    Mobile apps with blockchain integration
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div className="d-flex">
                <div>
                  <Image
                    src="/home/Vector (8).png"
                    alt=""
                    height="16"
                    width="26"
                    layout="fixed"
                  />
                </div>
                <div style={{ marginLeft: "16px" }}>
                  <p className={design.modalP2}>Mobile Game Development</p>
                </div>
              </div>

              <div className="d-flex">
                <div>
                  <Image
                    src="/home/Vector (8).png"
                    alt=""
                    height="16"
                    width="26"
                    layout="fixed"
                  />
                </div>
                <div style={{ marginLeft: "16px" }}>
                  <p className={design.modalP2}>eCommerce App Development</p>
                </div>
              </div>

              <div className="d-flex">
                <div>
                  <Image
                    src="/home/Vector (8).png"
                    alt=""
                    height="16"
                    width="26"
                    layout="fixed"
                  />
                </div>
                <div style={{ marginLeft: "16px" }}>
                  <p className={design.modalP2}>Point Of Sales (POS) Apps</p>
                </div>
              </div>
            </Col>
          </Row>

          <div>
            <h3 className={design.modalH3}>Development Details</h3>
          </div>
          <div>
            <p className={design.modalP2}>
              Mobile app development presents unique challenges compared to
              building a feature-rich website. The App Store and Google Play
              Store have compliance requirements that might affect your app that
              could prevent it from getting approved for sale on the stores.
            </p>
          </div>
          <div
            className="text-center"
            style={{ marginTop: "60px", marginBottom: "40px" }}
          >
            <button type="button" className={styles.btm}>
              Contact Us
            </button>
          </div>
        </Container>
      </Modal.Header>
    </Modal>
  );
}

//   App Development Modal

function AppDevelopment(props) {
  return (
    <Modal {...props} size="xl" aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton></Modal.Header>

      <Modal.Header className={`show-grid text-start ${design.btnClose}`}>
        <Container>
          {/* <div className={`text-end fixed-top ${design.modalBtn}`}>
                <button type="button" className={design.Btn} onClick={() => window.history.back()}>X</button>
            </div>  */}

          <Row>
            <Col xs={12} md={5}>
              <div>
                <Image
                  src="/home/Rectangle 872.png"
                  alt=""
                  width="640"
                  height="468"
                  layout="responsive"
                />
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div>
                <h1 className={design.modalH1}>Mobile App Development</h1>
                <p className={design.modalP1}>
                  The process of making software for smartphones, tablets and
                  digital assistants.
                </p>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12} md={5}>
              <div className="d-flex">
                <div>
                  <Image
                    src="/home/Vector (8).png"
                    alt=""
                    height="16"
                    width="26"
                    layout="fixed"
                  />
                </div>
                <div style={{ marginLeft: "16px" }}>
                  <p className={design.modalP2}>Android App Development</p>
                </div>
              </div>

              <div className="d-flex">
                <div>
                  <Image
                    src="/home/Vector (8).png"
                    alt=""
                    height="16"
                    width="26"
                    layout="fixed"
                  />
                </div>
                <div style={{ marginLeft: "16px" }}>
                  <p className={design.modalP2}>Hybrid App Development</p>
                </div>
              </div>

              <div className="d-flex">
                <div>
                  <Image
                    src="/home/Vector (8).png"
                    alt=""
                    height="16"
                    width="26"
                    layout="fixed"
                  />
                </div>
                <div style={{ marginLeft: "16px" }}>
                  <p className={design.modalP2}>
                    Mobile apps with blockchain integration
                  </p>
                </div>
              </div>
            </Col>
            <Col xs={12} md={7}>
              <div className="d-flex">
                <div>
                  <Image
                    src="/home/Vector (8).png"
                    alt=""
                    height="16"
                    width="26"
                    layout="fixed"
                  />
                </div>
                <div style={{ marginLeft: "16px" }}>
                  <p className={design.modalP2}>Mobile Game Development</p>
                </div>
              </div>

              <div className="d-flex">
                <div>
                  <Image
                    src="/home/Vector (8).png"
                    alt=""
                    height="16"
                    width="26"
                    layout="fixed"
                  />
                </div>
                <div style={{ marginLeft: "16px" }}>
                  <p className={design.modalP2}>eCommerce App Development</p>
                </div>
              </div>

              <div className="d-flex">
                <div>
                  <Image
                    src="/home/Vector (8).png"
                    alt=""
                    height="16"
                    width="26"
                    layout="fixed"
                  />
                </div>
                <div style={{ marginLeft: "16px" }}>
                  <p className={design.modalP2}>Point Of Sales (POS) Apps</p>
                </div>
              </div>
            </Col>
          </Row>

          <div>
            <h3 className={design.modalH3}>Development Details</h3>
          </div>
          <div>
            <p className={design.modalP2}>
              Mobile app development presents unique challenges compared to
              building a feature-rich website. The App Store and Google Play
              Store have compliance requirements that might affect your app that
              could prevent it from getting approved for sale on the stores.
            </p>
          </div>
          <div
            className="text-center"
            style={{ marginTop: "60px", marginBottom: "40px" }}
          >
            <button type="button" className={styles.btm}>
              Contact Us
            </button>
          </div>
        </Container>
      </Modal.Header>
    </Modal>
  );
}
