import "../styles/globals.css";
import "bootstrap/dist/css/bootstrap.css";
import SSRProvider from "react-bootstrap/SSRProvider";
// import { Raleway, Poppins } from "@next/font/google";
import Nav from "../components/Nav";
import "../styles/globals.css";
import Footer from "../components/Footer";
import Navbar2 from "../components/Navbar2";
import Header from "../components/header";
import Loader from "../components/shared/Loader";
import HandlePreloader from "../components/shared/HandlePreloader";
import HeaderStyle from "../components/shared/HeaderStyle";
import SearchBox from "../components/shared/SearchBox";
import HiddenBar from "../components/shared/HiddenBar";
import HiddenBar2 from "../components/shared/Hiddenbar2";
import HiddenBarMenuConfig from "../components/shared/HiddenBarMenuConfig";
import WowHandle from "../components/shared/WowHandle";
import ScrollToTop from "../components/shared/ScrollToTop";
import CountManage from "../components/shared/CountManage";
import FooterNew from "../components/shared/FooterNew";

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
      <Loader />
      <HandlePreloader />
      <WowHandle />
      <HeaderStyle />
      <SearchBox />
      <HiddenBar />
      <HiddenBar2 />
      <HiddenBarMenuConfig />

      <SSRProvider>
        <Component {...pageProps} />
      </SSRProvider>

      <FooterNew />
      {/* <Footer>

      </Footer> */}
    </>
  );
}
export default MyApp;
