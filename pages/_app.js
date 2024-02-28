import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import SSRProvider from "react-bootstrap/SSRProvider";
// import { Raleway, Poppins } from "@next/font/google";
import Nav from "../components/Nav";
import "../styles/globals.css";
import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";
import Header from "../components/header";



// const Heading = Raleway({
//   weight: ["600", "700"],
//   subsets: ["sans-serif"],
//   variable: "--heading-font",
// });
// const paragraph_font = Poppins({
//   weight: "500",
//   subsets: ["sans-serif"],
//   variable: "--paragraph-font",
// });

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <style jsx global>{`
        :root {
          --heading-font: ${Heading.style.fontFamily};
          --paragraph-font: ${paragraph_font.style.fontFamily};
        }
      `}</style> */}
      {/* <Nav></Nav> */}
      {/* <Navbar2/> */} 
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
      <Footer></Footer>
    </>
  );
}
export default MyApp;
