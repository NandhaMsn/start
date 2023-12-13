import Head from "next/head";
import { useState } from "react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
export default function blog(props) {
  const router = useRouter();
  const [contact, setContact] = useState({
    name: "",
    email:"",
    mobile:"",
    message: "",
  });

  console.log(router, "router");
  const dark = router.pathname === "/contactUs";
  const background = router.pathname;
  const backgroundClassname =
    background === "/contactUs" ? "aboutus-gradient" : "";
    const handleChange = (e) => {
      const { name, value } = e.target;
      setContact((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  return (
    <div className={`container-fluid   ${backgroundClassname}`}>
      {dark ? <Navbar dark={dark} /> : ""}

      <div className="container section-divide-margin ">
        <Head>
          <title>Startificial</title>
          <meta name="keyword" content="home" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,400&display=swap"
            rel="stylesheet"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
            rel="stylesheet"
          />
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
        </Head>

        <div className="row mt-5 mb-5">
         
            <div className="col-lg-6">
            <ScrollAnimation
                duration={2}
                delay={500}
                animateIn="animate__fadeInRightCustom"
                animateOut="animate__fadeOut"
                animateOnce={true}
              >
              <div className="cube">CONTACT</div>
              <p className="services mt-5">Get in touch</p>
              <p className="mt-5 grey">
                Get in touch to learn more about our automation platform and how
                we can help you achieve your business goals.
              </p>
              <p className="contact-heading grey">STARTIFICIAL</p>
              <div className="row contactUS">
                <div className="col-lg-6">
                  <label className="contact-label">PHONE</label>
                  <br />
                  <a href="tel:+13215451651">+13215451651</a>
                </div>
                <div className="col-lg-6">
                  <label className="contact-label">EMAIL</label>
                  <br />
                  <a href="mailto:info@startificial.com">
                    info@startificial.com
                  </a>
                </div>
              </div>
              </ScrollAnimation>
            </div>
          
          <div className="col-lg-6">
          <ScrollAnimation
                duration={2}
                delay={1000}
                animateIn="animate__fadeInRightCustom"
                animateOut="animate__fadeOut"
                animateOnce={true}
              >
            <form className="contact-us-form">
              <label className="contact-label">Name</label>
              <br />
              <input
                type="text"
                name="name"
                value={contact.name}
                onChange={handleChange}
                placeholder="Your Name"
              ></input>
              <br />
              <label className="contact-label">Email</label>
              <br />
              <input
                type="email"
                name="email"
                value={contact.email}
                onChange={handleChange}
                placeholder="youremailaddress@gmail.com"
              ></input>
              <br />
              <label className="contact-label">Phone Number</label>
              <br />
              <input
                type="number"
                name="mobile"
                value={contact.mobile}
                onChange={handleChange}
                placeholder="Your Mobile Number"
              ></input>
              <br />
              <label className="contact-label">Your Message</label>
              <br />
              <textarea
                type="text"
                name="message"
                value={contact.message}
                placeholder="Your Message"
                onChange={handleChange}
              ></textarea>
              <br />
              <button class="section-two-btn-dark">Submit </button>
            </form>
            </ScrollAnimation>
          </div>
        </div>
      </div>
    </div>
  );
}
