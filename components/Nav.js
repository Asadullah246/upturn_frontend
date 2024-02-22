import { Poppins } from "@next/font/google";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";

function NavBar() {
  const {route}=useRouter()
  // console.log("route", route );
  return (
    <Navbar bg="#FDFDFD" expand="lg">
      <>
        <Link id="RouterNavLink" href="/">
          <Navbar.Brand href="/" className="d-inline-flex align-items-center ">
            <Image
              variant="top"
              height="70"
              // width="220"
              src="/home/new/logo (1).jpeg"
            />
            <h3 className="logoText">UPTURN </h3>
          </Navbar.Brand>
        </Link>

        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          className={styles.toggleImage}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto">
            <Link
              id="RouterNavLink"
              className={`${styles.navitem} ${route=="/services" && "activeNav"}`}
              // href="/"
              href="/services"
            >
              Our Services
            </Link>
            <Link id="RouterNavLink"
           className={`${styles.navitem} ${route=="/courses" && "activeNav"}`}
            // href="/">
            href="/courses">
              Our Courses
            </Link>
            <Link id="RouterNavLink"
            className={`${styles.navitem} ${route=="/virtual" && "activeNav"}`}
            // href="/">
            href="/virtual">
              Virtual Classroom
            </Link>
            <Link
              id="RouterNavLink"
              className={`${styles.navitem} ${route=="/about-us" && "activeNav"}`}
              // href="/"
              href="/about-us"
            >
              About Us
            </Link>
            <Link id="RouterNavLink"
            className={`${styles.navitem} ${route=="/contact" && "activeNav"}`}
            //  href="/">
             href="/contact">
              Contact
            </Link>
          </Nav>
          {/* <button type="button" className={styles.btm}>
            Log In
          </button> */}
        </Navbar.Collapse>
      </>
    </Navbar>
  );
}

// export default NavBar;
export default dynamic(() => Promise.resolve(NavBar), { ssr: false });
