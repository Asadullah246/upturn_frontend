import React, { useRef } from "react";
import emailjs from '@emailjs/browser';


const ContactForm = () => {

  const form = useRef();



  const handleSubmit=(e)=>{
e.preventDefault()
const body ={
  name:e.target.name.value,
  phone:e.target.phone.value,
  email:e.target.email.value,
  description:e.target.description.value,
  subject:e.target.subject.value,
  archived:false,
}
console.log("for current", form.current );
emailjs
.sendForm('service_sgi3hat', 'template_dht28wl', form.current, {
  publicKey: 'RfpSlyoQDXNOWTQGE',
})
.then(
  () => {
    console.log('SUCCESS!');
    alert("Thank you for contacting with us")
  },
  (error) => {
    console.log('FAILED...', error.text);
    alert("Sorry, message not sent")
  }, 
);
  }
  return (
    <section className="contact-form-section">
      <div className="auto-container">
        {/* Sec Title */}
        <div className="sec-title centered">
          <div className="title">Don’t Hasitate To Contact With us</div>
          <h2>Now Very Easy</h2>
          <div className="text">
            Our services are uniquely around what we know works…and what we know{" "}
            <br /> doesn’t work. With over 200 verified factors in play.
          </div>
        </div>
        <div className="inner-container">
          {/* Contact Form */}
          <div className="contact-form">
            {/*Contact Form*/}
            <form
            ref={form}
             onSubmit={handleSubmit}
              id="contact-form"
            >
              <div className="row clearfix">
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <span className="icon flaticon-user-2" />
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    required=""
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <span className="icon flaticon-phone-call" />
                  <input
                    type="text"
                    name="phone"
                    placeholder="Your Phone"
                    required=""
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <span className="icon flaticon-big-envelope" />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    required=""
                  />
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                  <span className="icon flaticon-notepad" />
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject"
                    required=""
                  />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                  <span className="icon flaticon-message" />
                  <textarea
                    name="description"
                    placeholder="Message"
                    defaultValue={""}
                  />
                </div>
                <div className="col-lg-12 col-md-12 col-sm-12 text-center form-group">
                  <button
                    className="theme-btn btn-style-three"
                    type="submit"
                    name="submit-form"
                  >
                    <span className="txt">Submit Now</span>
                  </button>
                </div>
              </div>
            </form>
            {/*End Contact Form */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
