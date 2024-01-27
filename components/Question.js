import styles from "../styles/Home.module.css";
import { Container, Row, Col, Image, Accordion } from "react-bootstrap";

import { useState } from "react";

const Question = () => {
  const [selected, setSelected] = useState(null);

  const toggle = (i) => {
    if (selected === i) {
      return setSelected(null);
    }

    setSelected(i);
  };

  return (
    <section className={`primary_background`}>
      <div className="container">
        <div className={styles.secHeader}>
          <h1 className="text-center">Frequently Ask Questions</h1>
        </div>
        {data.map(({ question, answer }) => (
          <Accordion
            defaultActiveKey="0"
            className={`p-2 card  border-0 m-3 rounded-4 ${styles.items}`}
          >
            <Accordion.Item className={`border-0 `}>
              <Accordion.Header className={`border-0`}>
                <div className={`border-0  ${styles.faqH5}`}>{question}</div>
              </Accordion.Header>
              <Accordion.Body className={styles.faqP}>{answer}</Accordion.Body>
            </Accordion.Item>
          </Accordion>
        ))}
        <div className="text-center" style={{ marginTop: "60px" }}>
          <button type="button" className={styles.btm}>
            View All FAQ
          </button>
        </div>
      </div>
    </section>
  );
};

const data = [
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

export default Question;
