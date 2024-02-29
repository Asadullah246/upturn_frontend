import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import styles from "../styles/Home.module.css";
import Accordion from "react-bootstrap/Accordion";
// import "Home.module.css"

import { useState } from "react";

function App() {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <Container>
      <h1 className="text-center mt-5 mb-5">Questioned? Please ask!</h1>
      <Row>
        <Col>
          <Image src="Div_6.gif" />
        </Col>
        <Col>
          {/* <div className="wrapper">
                        <div className="accordion">
                            {data.map((item, i) => (
                                <div className="item">
                                    <div className="title" onClick={() => toggle(i)}>
                                        <h2>{item.question}</h2>
                                        <span>{selected === i ? '-' : '+'}</span>
                                    </div>
                                    <div className={selected === i ? 'content show' : 'content'}>
                                        {item.answer}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div> */}

          <Accordion defaultActiveKey="0">
            <Accordion.Item eventKey="0">
              {data.map((item, i) => (
                <Accordion.Header>
                  {item.question}
                  <Accordion.Body>{item.answer}</Accordion.Body>
                </Accordion.Header>
              ))}
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>Accordion Item #2</Accordion.Header>
              <Accordion.Body>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
}

const data = [
  // {...
  // },
  // {...
  // },
  {
    question: "1. How does Basic Education benefit you?",
    answer:
      "Basic Education is a package of Industrial course modules & live classes by their own virtual classes with 24/7 support which will help a fresher or student to build his career rapidly.",
  },
  {
    question: "2.Will I get a job after joining Basic Education?",
    answer:
      "Whether this is your first or next job, Basic Education gives you the tools to compete for the top positions. Although we are not currently able to offer job placement, be assured that we are working to have a strong and trustworthy system in place for you in the near future.",
  },
  {
    question: "3.What courses are available on Basic Education?",
    answer:
      "Currently, we offer courses in software development and information technology. Decide on taking Basic Education classes right away if you work in or want to work in the rapidly expanding IT business.",
  },
  {
    question: "4.What are the requirements for Basic Education?",
    answer:
      "To participate in basic education, there are no prerequisites. Choose Basic Education to improve your CV if you're seeking for a new position or are just curious about the available courses!",
  },
  {
    question: "5.How do I join Basic Education?",
    answer:
      "To enroll in Basic Education, visit this page, register, fill out your information, select a batch, and start learning!",
  },
];

export default App;
