import Head from "next/head";
import React from "react";
import TopScrolling from "../components/shared/ScrollToTop";
import SearchPopUp from "../components/shared/SearchPopUp";
import PageHeader from "../components/shared/pageHeader";
import NewsLetterLeft from "../components/shared/NewsLetterLeft";

const Terms = () => {

  const handleSubmit=(e)=>{
    e.preventDefault();
    ToastSuccess("Thank you for subscribe")
  }
  return (
    <div>

      {/* body  */}
      <body className="hidden-bar-wrapper">
        <div className="page-wrapper">
          {/* Preloader */}
          {/*<div className="preloader">
            <div className="box" />
          </div> */}
          {/* Main Header*/}

        <PageHeader pagename={"Terms"}/>

          {/* Privacy Section */}
          <section className="privacy-section">
            <div className="auto-container">
              {/* Privacy Content */}
              <div className="privacy-content">
                <h2>Terms &amp; Condition</h2>
                <p>
                  For each project we establish relationships with partners who
                  we know will help us create added value for your project. As
                  well as bringing together the public and private sectors, we
                  make sector-overarching links to gather knowledge and to learn
                  from each other who we know will help us create added value
                  for your project.
                </p>
                <div className="date">Updated January 10, 2021</div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  at nisl ligula. Suspendisse vitae ex fermentum, suscipit sem
                  id, dapibus orci. Cras efficitur mi augue, ut sodales felis
                  rhoncus bibendum. Fusce sagittis nibh orci, id vestibulum
                  tortor aliquet ut. Vivamus maximus felis ac nisl luctus. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit. Nam at nisl
                  ligula. Suspendisse vitae ex fermentum, suscipit sem id,
                  dapibus orci. Cras efficitur mi augue, ut sodales felis
                  rhoncus bibendum. Fusce sagittis nibh orci, id vestibulum
                  tortor aliquet ut. Vivamus maximus felis ac nisl luctus.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  at nisl ligula. Suspendisse vitae ex fermentum, suscipit sem
                  id, dapibus orci. Cras efficitur mi augue Lorem ipsum dolor
                  sit amet, consectetur adipiscing elit. Nam at nisl ligula.
                  Suspendisse vitae ex fermentum, suscipit sem id, dapibus orci.
                  Cras efficitur mi augue.
                </p>
                <h2>Overview</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour.
                </p>
              </div>
              {/* Privacy Content */}
              <div className="privacy-content">
                <h4>
                  We know how important customer experience is for a busines and
                  therefore, <br /> we trive to make your company excel in this.
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  at nisl ligula. Suspendisse vitae ex fermentum, suscipit sem
                  id, dapibus orci. Cras efficitur mi augue, ut sodales felis
                  rhoncus bibendum. Fusce sagittis nibh orci, id vestibulum
                  tortor aliquet ut. Vivamus maximus felis ac nisl luctus, ut
                  aliquet massa suscipit. Sed scelerisque quam justo, sed
                  volutpat neque tempor porta. Interdum et malesuada fames ac
                  ante ipsum primis in faucibus. Aliquam consequat tellus id
                  risus condimentum fringilla. Etiam maximus porttitor magna sit
                  amet consectetur. Integer eget ante scelerisque tortor sodales
                  aliquet. Integer in vestibulum leo, vitae tristique orci.
                  Etiam tortor sem, porttitor at pellentesque sit amet,
                  fringilla nec massa. Nunc nec magna sed metus tristique ornare
                  vitae ut nisl. Mauris lacus enim, posuere et tincidunt
                  condimentum, sodales ac elit.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  at nisl ligula. Suspendisse vitae ex fermentum, suscipit sem
                  id, dapibus orci. Cras efficitur mi augue, ut sodales felis
                  rhoncus bibendum. Fusce sagittis nibh orci, id vestibulum
                  tortor aliquet ut.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  at nisl ligula. Suspendisse vitae ex fermentum, suscipit sem
                  id, dapibus orci. Cras efficitur mi augue, ut sodales felis
                  rhoncus bibendum. Fusce sagittis nibh orci, id vestibulum
                  tortor aliquet ut. Vivamus maximus felis ac nisl luctus, ut
                  aliquet massa suscipit. Sed scelerisque quam justo, sed
                  volutpat neque tempor porta. Interdum et malesuada fames ac
                  ante ipsum primis in faucibus. Aliquam consequat tellus id
                  risus condimentum fringilla. Etiam maximus porttitor magna sit
                  amet consectetur. Integer eget ante scelerisque tortor sodales
                  aliquet. Integer in vestibulum leo, vitae tristique orci.
                  Etiam tortor{" "}
                </p>
              </div>
              {/* Privacy Content */}
              <div className="privacy-content">
                <h4>
                  We take a consultative approach to every client engagement and
                  find actionable <br /> solutions that will help your
                  organization achieve the best outcomes.
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  at nisl ligula. Suspendisse vitae ex fermentum, suscipit sem
                  id, dapibus orci. Cras efficitur mi augue, ut sodales felis
                  rhoncus bibendum. Fusce sagittis nibh orci, id vestibulum
                  tortor aliquet ut. Vivamus maximus felis ac nisl luctus, ut
                  aliquet massa suscipit. Sed scelerisque quam justo, sed
                  volutpat neque tempor porta. Interdum et malesuada fames ac
                  ante ipsum primis in faucibus. Aliquam consequat tellus id
                  risus condimentum fringilla.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  at nisl ligula. Suspendisse vitae ex fermentum, suscipit sem
                  id, dapibus orci. Cras efficitur mi augue, ut sodales felis
                  rhoncus bibendum. Fusce sagittis nibh orci, id vestibulum
                  tortor aliquet ut.
                </p>
                <ul className="privacy-list">
                  <li>SEO for Small Business</li>
                  <li>SEO for Local Services</li>
                  <li>Enterprise SEO</li>
                  <li>National SEO</li>
                </ul>
              </div>
              {/* Privacy Content */}
              <div className="privacy-content">
                <h4>
                  Our campaigns get your business in front of the right people
                  at the <br /> right time to increase organic traffic and boost
                  engagement.
                </h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  at nisl ligula. Suspendisse vitae ex fermentum, suscipit sem
                  id, dapibus orci. Cras efficitur mi augue, ut sodales felis
                  rhoncus bibendum. Fusce sagittis nibh orci, id vestibulum
                  tortor aliquet ut. Vivamus maximus felis ac nisl luctus, ut
                  aliquet massa suscipit. Sed scelerisque quam justo, sed
                  volutpat neque tempor porta. Interdum et malesuada fames ac
                  ante ipsum primis in faucibus. Aliquam consequat tellus id
                  risus condimentum fringilla. Etiam maximus porttitor magna sit
                  amet consectetur. Integer eget ante scelerisque tortor sodales
                  aliquet. Integer in vestibulum leo, vitae tristique orci.
                  Etiam tortor sem, porttitor at pellentesque sit amet,
                  fringilla nec massa. Lorem ipsum dolor sit amet, consectetur
                  adipiscing elit. Nam at nisl ligula. Suspendisse vitae ex
                  fermentum, suscipit sem id, dapibus orci.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  at nisl ligula. Suspendisse vitae ex fermentum, suscipit sem
                  id, dapibus orci. Cras efficitur mi augue, ut sodales felis
                  rhoncus bibendum.
                </p>
              </div>
              {/* Privacy Content */}
              <div className="privacy-content">
                <h2>Security and Retention</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  at nisl ligula. Suspendisse vitae ex fermentum, suscipit sem
                  id, dapibus orci. Cras efficitur mi augue, ut sodales felis
                  rhoncus bibendum. Fusce sagittis nibh orci, id vestibulum
                  tortor aliquet ut. Vivamus maximus felis ac nisl luctus, ut
                  aliquet massa suscipit. Sed scelerisque quam justo, sed
                  volutpat neque tempor porta. Interdum et malesuada fames ac
                  ante ipsum primis in faucibus. Aliquam consequat tellus id
                  risus condimentum fringilla.
                </p>
              </div>
              {/* Privacy Content */}
              <div className="privacy-content">
                <h2>Contact Us</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                  at nisl ligula. Suspendisse vitae ex fermentum, suscipit sem
                  id, dapibus orci. Cras efficitur mi augue, ut sodales felis
                  rhoncus bibendum. Fusce sagittis nibh orci, id vestibulum
                  tortor aliquet ut. Vivamus maximus felis ac nisl luctus, ut
                  aliquet massa suscipit. Sed scelerisque quam justo, sed
                  volutpat neque tempor porta. Interdum et malesuada fames ac
                  ante ipsum primis in faucibus. Aliquam consequat tellus id
                  risus condimentum fringilla. Lorem ipsum dolor sit amet,
                  consectetur adipiscing elit. Nam at nisl ligula.
                </p>
              </div>
            </div>
          </section>
          {/* End Privacy Section */}
          {/* Newsleter Section */}
         <NewsLetterLeft/>
          {/* End Newsleter Section */}

        </div>
        {/*End pagewrapper*/}
        {/* <SearchPopUp />
        <TopScrolling /> */}
      </body>
      {/* body end  */}
    </div>
  );
};

export default Terms;
