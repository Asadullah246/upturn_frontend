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
import Preloader from "../components/shared/Preloader";
import MobileMenu from "../components/shared/MobileMenu";
import SubmenuDropdownToggle from "../components/shared/SubmenuDropdownToggle";
import Head from "next/head";
import Navtool from "../components/shared/Navtool";

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
      <Head>
        {/* font  */}
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:wght@400;500;600;700&amp;family=Poppins:wght@300;400;500;600;700;800;900&amp;display=swap"
          rel="stylesheet"
        />

        {/* font end */}

        {/* styles  */}
        <link rel="stylesheet" href="/newupdate/css/animate.css" />
        <link rel="stylesheet" href="/newupdate/css/animation.css" />
        <link rel="stylesheet" href="/newupdate/css/bootstrap.css" />
        <link
          rel="stylesheet"
          href="/newupdate/css/color-switcher-design.css"
        />
        <link rel="stylesheet" href="/newupdate/css/custom-animate.css" />
        <link rel="stylesheet" href="/newupdate/css/flaticon.css" />
        <link rel="stylesheet" href="/newupdate/css/font-awesome.css" />
        <link rel="stylesheet" href="/newupdate/css/jquery-ui.css" />
        <link
          rel="stylesheet"
          href="/newupdate/css/jquery.bootstrap-touchspin.css"
        />
        <link rel="stylesheet" href="/newupdate/css/jquery.fancybox.min.css" />
        <link
          rel="stylesheet"
          href="/newupdate/css/jquery.mCustomScrollbar.min.css"
        />
        <link rel="stylesheet" href="/newupdate/css/owl.css" />
        <link rel="stylesheet" href="/newupdate/css/responsive.css" />
        <link rel="stylesheet" href="/newupdate/css/style.css" />

        {/* styles end  */}

        {/* js  */}

        <script src="/newupdate/js/jquery-ui.js"></script>
        <script src="/newupdate/js/jquery.bootstrap-touchspin.js"></script>
        <script src="/newupdate/js/jquery.countdown.js"></script>
        <script src="/newupdate/js/jquery.fancybox.js"></script>
        <script src="/newupdate/js/jquery.js"></script>
        <script src="/newupdate/js/jquery.mCustomScrollbar.concat.min.js"></script>
        <script src="/newupdate/js/jquery.paroller.min.js"></script>
        <script src="/newupdate/js/appear.js"></script>
        <script src="/newupdate/js/bootstrap.min.js"></script>
        <script src="/newupdate/js/color-settings.js"></script>
        <script src="/newupdate/js/mixitup.js"></script>
        <script src="/newupdate/js/nav-tool.js"></script>
        <script src="/newupdate/js/owl.js"></script>
        <script src="/newupdate/js/parallax.min.js"></script>
        <script src="/newupdate/js/popper.min.js"></script>
        {/* <script src="/newupdate/js/script.js"></script>  */}
        <script src="/newupdate/js/tilt.jquery.min.js"></script>
        <script src="/newupdate/js/validate.js"></script>
        <script src="/newupdate/js/wow.js"></script>

        {/* js end */}
      </Head>
      {/* <style jsx global>{`
        :root {
          --heading-font: ${Heading.style.fontFamily};
          --paragraph-font: ${paragraph_font.style.fontFamily};
        }
      `}</style> */}
      {/* <Nav></Nav> */}
      {/* <Navbar2/> */}
      <Loader />
      <Preloader />

      <HandlePreloader />
      <WowHandle />
      <HeaderStyle />
      <SearchBox />
      <MobileMenu />
      <Navtool/> 
      <SubmenuDropdownToggle />
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
