import { Box, Chip, Stack, Typography, Container } from "@mui/material";
import Head from "next/head";
import NavBar from "../../components/Navbar";
import "animate.css";
import { useRouter } from "next/router";
import ScrollAnimation from "react-animate-on-scroll";
import Contact from "../../components/conatctUSComponent/conatct";

export default function med() {
  const router = useRouter();
  console.log(router, "router");
  const dark = router.pathname === "/med";
  const background = router.pathname;
  const backgroundClassname =
    background === "/med" ? "aboutus-gradient" : "";

  return (
    <div className={` container-fluid content ${backgroundClassname}`}>
      <div className="med">
        <div className=" pb-5 ">
          <div className=" container-fluid ">
            <NavBar dark={dark} />
            <div className=" container content mb-0  no-gutters">
              <Head>
                <title>Next | Home</title>
                <meta name="keyword" content="home" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                  rel="preconnect"
                  href="https://fonts.gstatic.com"
                  crossorigin
                />
                <link
                  href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,400&display=swap"
                  rel="stylesheet"
                />
              </Head>
              <div className="row gradient-bg-image-m1">
                <div className="col-lg-6 homepage-text ">
                  <ScrollAnimation
                    duration={2}
                    delay={500}
                    animateIn="animate__fadeInRightCustom"
                    animateOut="animate__fadeOut"
                    animateOnce={true}
                  >
                    <span className="side-text">
                      <img
                        src="./assets/images/arrow.png"
                        className="img-fluid"
                      ></img>
                    </span>
                    <p className="black">2022</p>
                    <p className="black">UX / UI Design Web Dev</p>
                    <h1 className="main-text-h1-portfolio black">Med + Med</h1>
                    <p className="black">
                      There is a long established fact that a reader will be
                      distracted by the readable content of a page when looking
                      at its layout.
                    </p>
                  </ScrollAnimation>
                </div>
                <div className="col-lg-6 homepage-text mt-5"></div>
              </div>
            </div>
          </div>

          {/* <img
           
            className="gradient-bg-image-m1"
          ></img> */}
        </div>
      </div>
      <div className="container-fluid aboutus-gradient">
        <div className="container section-divide-margin content">
          <Head>
            <title>Next | Home</title>
            <meta name="keyword" content="home" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossorigin
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,400&display=swap"
              rel="stylesheet"
            />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
              rel="stylesheet"
            />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
          </Head>

          <div className="">
            <ScrollAnimation
              duration={2}
              delay={500}
              animateIn="animate__fadeInRightCustom"
              animateOut="animate__fadeOut"
              animateOnce={true}
            >
              <div className="row ">
                <div className="col-lg-6">
                  <p className="portfolio-heading  mb-5 black">Overview</p>
                </div>
                <div className="col-lg-6 text-right">
                  {" "}
                  <p className="section-two-grey mt-4 mb-5">
                    Fringilla quam urna. Cras turpis elit, euismod eget ligula
                    quis, imperdiet sagittis justo. In viverra fermentum ex ac
                    vestibulum. Aliquam eleifend nunc a luctus porta. Mauris
                    laoreet augue ut felis blandit, at iaculis odio ultrices.
                    Nulla facilisi. Vestibulum cursus ipsum tellus, eu tincidunt
                    neque tincidunt a.
                  </p>
                </div>
              </div>
            </ScrollAnimation>
            <ScrollAnimation
              duration={2}
              delay={500}
              animateIn="animate__fadeInRightCustom"
              animateOut="animate__fadeOut"
              animateOnce={true}
            >
              <div className="img-wrapper-portfolio-m1 mt-5">
                {/* <img src="./assets/images/t3.png" className="img-fluid "></img> */}
              </div>
            </ScrollAnimation>
            <div className="row portfolio-divide-margin">
              <div className="col-lg-8">
                <ScrollAnimation
                  duration={2}
                  delay={500}
                  animateIn="animate__fadeInRightCustom"
                  animateOut="animate__fadeOut"
                  animateOnce={true}
                >
                  <p className="portfolio-heading black mb-5">
                    Simplified <br />
                    navigation
                  </p>
                </ScrollAnimation>
                <ScrollAnimation
                  duration={2}
                  delay={500}
                  animateIn="animate__fadeInRightCustom"
                  animateOut="animate__fadeOut"
                  animateOnce={true}
                >
                  <p className="section-two-grey mt-4 mb-5">
                    Fringilla quam urna. Cras turpis elit, euismod eget ligula
                    quis, imperdiet sagittis justo. In viverra fermentum ex ac
                    vestibulum. Aliquam eleifend nunc a luctus porta. Mauris
                    laoreet augue ut felis blandit, at iaculis odio ultrices.
                    Nulla facilisi. Vestibulum cursus ipsum tellus, eu tincidunt
                    neque tincidunt a.
                  </p>
                </ScrollAnimation>
              </div>
              <div className="col-lg-4 text-right"></div>
              <ScrollAnimation
                duration={2}
                delay={500}
                animateIn="animate__fadeInUp
              
              
              "
                animateOut="animate__fadeOut"
                animateOnce={true}
              >
                <div className="img-wrapper-portfolio-m2 mt-5"></div>
              </ScrollAnimation>
            </div>

            <div className="row portfolio-divide-margin">
              <div className="col-lg-8">
                <ScrollAnimation
                  duration={2}
                  delay={500}
                  animateIn="animate__fadeInRightCustom"
                  animateOut="animate__fadeOut"
                  animateOnce={true}
                >
                  <p className="portfolio-heading black mb-5">
                    Main Page <br />
                    worthy of attention
                  </p>

                  <p className="section-two-grey mt-4 mb-5">
                    Fringilla quam urna. Cras turpis elit, euismod eget ligula
                    quis, imperdiet sagittis justo. In viverra fermentum ex ac
                    vestibulum. Aliquam eleifend nunc a luctus porta. Mauris
                    laoreet augue ut felis blandit, at iaculis odio ultrices.
                    Nulla facilisi. Vestibulum cursus ipsum tellus, eu tincidunt
                    neque tincidunt a.
                  </p>
                </ScrollAnimation>
              </div>
              <div className="col-lg-4 text-right"></div>
              <div className="row">
                <div className="col-lg-7">
                  <ScrollAnimation
                    duration={2}
                    delay={500}
                    animateIn="animate__fadeInUp"
                    animateOut="animate__fadeOut"
                    animateOnce={true}
                  >
                    <img
                      src="./assets/images/m1.png"
                      className="img-fluid border-radius-25"
                    ></img>
                  </ScrollAnimation>
                </div>
                <div className="col-lg-5">
                <ScrollAnimation
                  duration={2}
                  delay={500}
                  animateIn="animate__fadeInRightCustom"
                  animateOut="animate__fadeOut"
                  animateOnce={true}
                >
                  <p className="section-two-grey pt-5">
                    Fringilla quam urna. Cras turpis elit, euismod eget ligula
                    quis, imperdiet sagittis justo. In viverra fermentum ex ac
                    vestibulum.
                  </p>
                  <img
                    src="./assets/images/m3.png"
                    className="img-fluid border-radius-25 mt-5"
                  ></img>
                  </ScrollAnimation>
                </div>
                <ScrollAnimation
                  duration={2}
                  delay={500}
                  animateIn="animate__fadeInUp"
                  animateOut="animate__fadeOut"
                  animateOnce={true}
                >
                <img
                  src="./assets/images/m4.png"
                  className="img-fluid border-radius-25 mt-5"
                ></img>
                </ScrollAnimation>
              </div>
            </div>
          </div>
          <div className="row  ">
            <video autoPlay muted loop>
              <source src="/assets/images/m2.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
      <Contact />
    </div>
  );
}
