import { Box, Chip, Stack, Typography, Container } from "@mui/material";
import Head from "next/head";
import NavBar from "../../components/Navbar";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";

export default function Razoxic() {
  return (
    <>
      <div className="razoxic">
        <div className="pb-5">
          {/* <video autoPlay muted loop>
          <source src="/assets/images/201.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}

          <div className=" container-fluid content">
            <NavBar />
            <div className=" container  mb-0  no-gutters">
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
              <div className="row ">
              <ScrollAnimation
                    duration={2}
                    delay={500}
                    animateIn="animate__fadeInRightCustom"
                    animateOut="animate__fadeOut"
                    animateOnce={true}
                  >
                <div className="col-lg-6 homepage-text">
                  <span className="side-text">
                    <img
                      src="./assets/images/arrow.png"
                      className="img-fluid"
                    ></img>
                  </span>
                  <p>2022</p>
                  <p>UX / UI Design Web Dev</p>
                  <h1 className="main-text-h1-portfolio white">Razoxic</h1>
                  <p>
                    There is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                </div>
                </ScrollAnimation>
                <div className="col-lg-6 homepage-text mt-5">
                  
                </div>
              </div>
            </div>
          </div>

          <img
            src="/assets/images/B.png"
            className="gradient-bg-image-v24"
          ></img>
        
        </div>
      </div>
      <div className="container-fluid razoxic-bg-color">
        <Container maxWidth="lg" className="section-divide-margin content">
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
            <div className="row ">
           
              <div className="col-lg-6">
              <ScrollAnimation
                    duration={2}
                    delay={500}
                    animateIn="animate__fadeInRightCustom"
                    animateOut="animate__fadeOut"
                    animateOnce={true}
                  >
                <p className="portfolio-heading white mb-5">Overview</p>
                </ScrollAnimation>
              </div>
              <div className="col-lg-6 text-right">
              <ScrollAnimation
                    duration={2}
                    delay={500}
                    animateIn="animate__fadeInRightCustom"
                    animateOut="animate__fadeOut"
                    animateOnce={true}
                  >
                {" "}
                <p className="section-two-grey white mt-4 mb-5">
                  Fringilla quam urna. Cras turpis elit, euismod eget ligula
                  quis, imperdiet sagittis justo. In viverra fermentum ex ac
                  vestibulum. Aliquam eleifend nunc a luctus porta. Mauris
                  laoreet augue ut felis blandit, at iaculis odio ultrices.
                  Nulla facilisi. Vestibulum cursus ipsum tellus, eu tincidunt
                  neque tincidunt a.
                </p>
                </ScrollAnimation>
              </div>
            </div>
            <ScrollAnimation
                    duration={2}
                    delay={500}
                    animateIn="animate__fadeInUp"
                    animateOut="animate__fadeOut"
                    animateOnce={true}
                  >
            <div className="img-wrapper-razoxic mt-5">
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
                <p className="portfolio-heading white mb-5">
                  Simplified <br />
                  navigation
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
              <div className=" mt-5">
              <ScrollAnimation
                    duration={2}
                    delay={500}
                    animateIn="animate__fadeInUp"
                    animateOut="animate__fadeOut"
                    animateOnce={true}
                  >
                <img src="./assets/images/e2.png" className="img-fluid border-radius-25"></img>
                </ScrollAnimation>
              </div>
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
                <p className="portfolio-heading white mb-5">
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
                    src="./assets/images/e3.png"
                    className="img-fluid border-radius-25"
                  ></img>
                  </ScrollAnimation>
                  <ScrollAnimation
                    duration={2}
                    delay={500}
                    animateIn="animate__fadeInUp"
                    animateOut="animate__fadeOut"
                    animateOnce={true}
                  >
                  <img
                    src="./assets/images/e4.png"
                    className="img-fluid border-radius-25 mt-5"
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
                  <img
                    src="./assets/images/e2.png"
                    className="img-fluid border-radius-25"
                  ></img>
                  </ScrollAnimation>
                  <ScrollAnimation
                    duration={2}
                    delay={500}
                    animateIn="animate__fadeInRightCustom"
                    animateOut="animate__fadeOut"
                    animateOnce={true}
                  >
                  <img
                    src="./assets/images/e1.png"
                    className="img-fluid border-radius-25 mt-5"
                  ></img>
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
              </div>
            </div>
          </div>
        </Container>
        <div className="img-wrapper-portfolio-r2 mt-5">
      
        </div>
      </div>
    </>
  );
}
