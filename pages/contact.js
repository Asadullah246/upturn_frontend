import React from "react";
import Contact from "../components/Contact";
import styles from "../styles/contact.module.css";
import Image from "next/image";
import design from "/styles/Home.module.css";
import TopHeader from "../components/shared/TopHeader";
import ContactUs from "../components/ContactUs";

const contact = () => {
  return (
    <div>
      <TopHeader pageName={"Contact Us"} />
     <section style={{marginTop:"80px"}}>
     <ContactUs/>
     </section>
    </div>
  );
};

export default contact;
