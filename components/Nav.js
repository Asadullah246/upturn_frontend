import { Poppins } from "@next/font/google";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Image from "react-bootstrap/Image";
import Button from "react-bootstrap/Button";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import dynamic from "next/dynamic";

function NavBar() {
  return (
    <Navbar bg="#FDFDFD" expand="lg">
      <Container>
        <Link id="RouterNavLink" href="/">
          <Navbar.Brand href="/">
            <Image
              variant="top"
              height="70"
              width="220"
              src="/home/Basic-Education-Logo.png"
            />
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
              className={styles.navitem}
              href="/services"
            >
              Our Services
            </Link>
            <Link id="RouterNavLink" className={styles.navitem} href="/courses">
              Our Courses
            </Link>
            <Link id="RouterNavLink" className={styles.navitem} href="/virtual">
              Virtual Classroom
            </Link>
            <Link
              id="RouterNavLink"
              className={styles.navitem}
              href="/about-us"
            >
              About Us
            </Link>
            <Link id="RouterNavLink" className={styles.navitem} href="/contact">
              Contact
            </Link>
          </Nav>
          {/* <button type="button" className={styles.btm}>
            Log In
          </button> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

// export default NavBar;
export default dynamic(() => Promise.resolve(NavBar), { ssr: false });
