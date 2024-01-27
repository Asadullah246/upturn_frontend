import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import SSRProvider from "react-bootstrap/SSRProvider";
// import { Raleway, Poppins } from "@next/font/google";
import Nav from "../components/Nav";
import "../styles/globals.css";
import Footer from "../components/Footer";



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
      <Nav></Nav>
      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>
      <Footer></Footer>
    </>
  );
}
export default MyApp;
