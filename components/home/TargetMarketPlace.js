import React from "react";

const TargetMarketPlace = () => {
  const clients=[
    "/newupdate/images/clients/3342245-01.png",
    "/newupdate/images/clients/A Cloud.png",
    "/newupdate/images/clients/ABUIABAEGAAgs8mEngYo6Pyi-AMw8QY4rAI.png",
    "/newupdate/images/clients/Amelia_s_Shop-removebg-preview.png",
    "/newupdate/images/clients/boisha.jpg",
    "/newupdate/images/clients/final_page-0001.jpg",
    "/newupdate/images/clients/Gorgeous International Logo.png",
    "/newupdate/images/clients/org-31855-8bbf59ac.png",
    "/newupdate/images/clients/Perfect Food Logo Png.png",
    "/newupdate/images/clients/Shadhin Wifi.jpg",
    "/newupdate/images/clients/Tripup.jpg",
    "/newupdate/images/clients/Tycoon Logo png.png",
    "/newupdate/images/clients/Vromon (1).jpg"
  ]
  const clients2=[
    "/images/band/(1).png",
    "/images/band/(2).png",
    "/images/band/(3).png",
    "/images/band/(4).png",
    "/images/band/(5).png",
    "/images/band/(6).png",
    "/images/band/(7).png",
    "/images/band/(8).png",
    "/images/band/(9).png",
    "/images/band/(10).png",
    "/images/band/(11).png",
    "/images/band/(12).png",
    "/images/band/(13).png",
    "/images/band/(14).png",
    "/images/band/(15).png",

  ]
  return (
    <div className="">
      {/* <SectionTitle text={"Target Marketplaces"}></SectionTitle> */}



      <section className="team-section-two" style={{padding:"60px 0", marginBottom:"80px" }}>
      <div className="auto-container">
        {/* Sec Title */}
        <div className="sec-title centered">
          <div className="title">Our Clients</div>
          <h2>Our Successful Clients</h2>
        </div>
        <div className="container mx-auto mt-5  ">
          <div className="row row-cols-3 row-cols-md-4   row-cols-lg-6  row-gap-2 row-gap-md-3 row-gap-lg-4 ">
          {clients2.map((client,index)=>{
            return(
              <div key={index} className=" px-4 py-3   rounded-4 ">
              <img
                className="clientImage"
                style={{  borderRadius:"10px" }}
                src={client}
                alt={client}
              />
            </div>
            )
          })}
          </div>

      </div>
      </div>
    </section>

    </div>



  );
};

export default TargetMarketPlace;
