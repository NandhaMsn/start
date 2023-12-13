import { Box, Chip, Stack, Typography, Container, Link } from "@mui/material";
import Head from "next/head";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
import NavBar from "../../components/Navbar";
import { useRouter } from "next/router";
import Carousel from "react-bootstrap/Carousel";

export default function SectionBlack() {
  const router = useRouter();

  const dark = router.pathname === "/portfolio";
  return (
    <div className="container-fluid portfolio  video-background">
      {/* <video autoPlay muted loop>
        <source src="/assets/images/501.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
      <div className="container  content">
        {dark ? <NavBar /> : ""}
        <Head>
          <title>Next | Home</title>
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
        {dark  ? (
          <>
            <ul class="breadcrumb">
              <li>
                <Link href="/">Home</Link>
              </li>

              <li>Portfolio</li>
            </ul>
            <div className="row ">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 portfolio-homepage-text">
                <ScrollAnimation
                  duration={2}
                  delay={500}
                  animateIn="animate__fadeInRightCustom"
                  animateOut="animate__fadeOut"
                  animateOnce={true}
                >
                  <p className="services-main-heading white mb-5">Portfolio</p>
                </ScrollAnimation>
                <p className="section-two-grey white mt-4 mb-5">
                  Fringilla quam urna. Cras turpis elit, euismod eget ligula
                  quis, imperdiet sagittis justo. In viverra fermentum ex ac
                  vestibulum. Aliquam eleifend nunc a luctus porta. Mauris
                  laoreet augue ut felis blandit, at iaculis odio ultrices.
                </p>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-right">
                {" "}
              </div>
            </div>
          </>
        ) : (
          ""
        )}
        <div className="content-head  section-divide-margin-portfolio">
          <div className="row ">
            <div className="col-lg-4">
              <ScrollAnimation
                duration={2}
                delay={500}
                animateIn="animate__fadeInRightCustom"
                animateOut="animate__fadeOut"
                animateOnce={true}
              >
                <div className="cube white mt-3">WHAT WE'HAVE DONE</div>
              </ScrollAnimation>
            </div>
            <div className="col-lg-8 text-left">
              {" "}
              <ScrollAnimation
                duration={2}
                delay={500}
                animateIn="animate__fadeInRightCustom"
                animateOut="animate__fadeOut"
                animateOnce={true}
              >
                <p className="services white mb-5">
                  Discover Our <br /> Diverse Portfolio of Excellence.
                </p>
              </ScrollAnimation>
            </div>
          </div>
          <div className="row mt-5 works">
            <div className="col-lg-6 text-right">
              {/* <Link href="/silverpro"><img src="/assets/images/P1.png"  className="img-fluid portfolio-one"></img></Link>  */}
             

              <ScrollAnimation
                  duration={2}
                  delay={500}
                  animateIn="animate__fadeInUp"
                  animateOut="animate__fadeOut"
                  animateOnce={true}
                >
              <Link href="/razoxic">
                <img
                  src="/assets/images/P6.png"
                  className="img-fluid portfolio-one mb-5"
                ></img>
              </Link>
              </ScrollAnimation>
              <ScrollAnimation
                  duration={2}
                  delay={500}
                  animateIn="animate__fadeInUp"
                  animateOut="animate__fadeOut"
                  animateOnce={true}
                >
              <Link href="/tracking">
                {" "}
                <img
                  src="/assets/images/P12.png"
                  className="img-fluid portfolio-one mb-5"
                 
                ></img>
              </Link>
              </ScrollAnimation>
              {/* <button className="bg-white-btn black mt-5"><span>Read More</span></button> */}
            </div>
            <div className="col-lg-6">
              {/* <div className="outer-layer">
           
              <div className="img-ui-wrapper">
              <img src="/assets/images/p7.png"    className="img-fluid portfolio-one"></img>
                <h5 className="img-ui-head">SPACE GEAR</h5>
                <p className="img-ui-btn">UI / UX DESIGN</p>   <p className="img-ui-btn">UX EXPERIENCE</p>   <p className="img-ui-btn">WEB DEV</p>
              </div>
              </div> */}

              {/* <div className="outer-layer">
              <img src="/assets/images/P3.png" className="img-fluid portfolio-one  mt-5"></img>
              <div className="img-ui-wrapper">
                <h5 className="img-ui-head">SPACE GEAR</h5>
                <p className="img-ui-btn">UI / UX DESIGN</p>   <p className="img-ui-btn">UX EXPERIENCE</p>   <p className="img-ui-btn">WEB DEV</p>
              </div>
              </div> */}
               <ScrollAnimation
                  duration={2}
                  delay={500}
                  animateIn="animate__fadeInRightCustom"
                  animateOut="animate__fadeOut"
                  animateOnce={true}
                >
              <Link href="/med">
                <img
                  src="/assets/images/P15.png"
                  className="img-fluid portfolio-one  "
                ></img>
              </Link>
              </ScrollAnimation>
              {/* <Link href="/tracking"> <img src="/assets/images/P3.png" className="img-fluid portfolio-one  mt-5"></img></Link> */}
              <ScrollAnimation
                  duration={2}
                  delay={500}
                  animateIn="animate__fadeInRightCustom"
                  animateOut="animate__fadeOut"
                  animateOnce={true}
                >
              <Link href="/crypto">
                <img
                  src="/assets/images/P5.png"
                  className="img-fluid portfolio-one mt-5 mb-5"
                ></img>
              </Link>
              </ScrollAnimation>
            </div>
          </div>
        </div>
      </div>
      <img src="/assets/images/B.png" className="gradient-bg-image4"></img>
    </div>
  );
}
