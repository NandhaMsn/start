import Head from "next/head";
import { useRouter } from 'next/router';
import Navbar from "../../components/Navbar";
import "animate.css";
import Link from "next/link";
import ScrollAnimation from "react-animate-on-scroll";
export default function blog(props) {

  const router = useRouter();
  const dark = router.pathname === "/contactUs"
  const background = router.pathname
  const backgroundClassname = background === "/" ?   "getInTouch" : "aboutus-gradient" 
  return (
    <div className={`container-fluid    ${backgroundClassname} `}>
      {
        dark ? <Navbar dark = {dark}/> : ""
      }
       <ScrollAnimation
                  duration={2}
                  delay={500}
                  animateIn="animate__fadeInUp"
                  animateOut="animate__fadeOut"
                  animateOnce={true}
                >
      <div className="container section-divide-margin aboutus-gradient border-radius-25 p-5">
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

        <div className="row getConatct">
          <div className="col-lg-6">
          <ScrollAnimation
                duration={2}
                delay={500}
                animateIn="animate__fadeInRightCustom"
                animateOut="animate__fadeOut"
                animateOnce={true}
              >
            {/* <div className="cube">CONTACT</div> */}
           
            <p className="services-main-heading mt-5">Get in touch</p>
            </ScrollAnimation>
            <ScrollAnimation
                duration={2}
                delay={500}
                animateIn="animate__fadeInUp"
                animateOut="animate__fadeOut"
                animateOnce={true}
              >
            <p className="mt-5 grey">
            We're here to listen, assist, and collaborate. Whether you have a question, want to explore partnership opportunities, or simply want to say hello, we're just a message away. 
            </p>
           
            </ScrollAnimation>
            {/* <p className="contact-heading grey">STARTIFICIAL</p>
            <div className="row contactUS">
              <div className="col-lg-6">
                <label className="contact-label">PHONE</label>
                <br />
                <a href="tel:+13215451651">+13215451651</a>
              </div>
              <div className="col-lg-6">
                <label className="contact-label">EMAIL</label>
                <br />
                <a href="mailto:info@startificial.com">info@startificial.com</a>
              </div>
            </div> */}
          </div>
          <div className="col-lg-6 text-right">
          <Link href="/contactUs">
          <button class="section-two-btn-dark gettouch-btn">Contact Us </button>
           
            </Link>
            {/* <form className="contact-us-form">
              <label className="contact-label">Name</label>
              <br />
              <input type="text" id="fname" name="name" value="" placeholder="Your Name"></input><br />
              <label className="contact-label">Email</label>
              <br />
              <input type="email" id="fname" name="email" value=""  placeholder="youremailaddress@gmail.com"></input><br />
              <label className="contact-label">Phone Number</label>
              <br />
              <input type="number" id="fname" name="mobileNumber" value="" placeholder="Your Mobile Number"></input><br />
              <label className="contact-label">Your Message</label>
              <br />
              <textarea type="text" id="fname" name="message" value="" placeholder="Your Message"></textarea><br />
              <button class="section-two-btn-dark">Submit </button>

            </form> */}
          </div>
        </div>
      </div>
      </ScrollAnimation>
    </div>
  );
}
