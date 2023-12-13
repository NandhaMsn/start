import { Box, Chip, Stack, Typography, Container, Link } from "@mui/material";
import Head from "next/head";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
import Carousel from "react-bootstrap/Carousel";
export default function blog() {
  return (
    <div className="container-fluid   blog-section ">
      <div className=" container mt-5">
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

        <div className="">
          <div className="row ">
          <div className="col-lg-8 col-md-8 col-sm-8 col-xs-8 text-left ">
              <ScrollAnimation
                duration={2}
                delay={500}
                animateIn="animate__fadeInRightCustom"
                animateOut="animate__fadeOut"
                animateOnce={true}
              >
               <p className="services  mb-5 white">The word on the street</p>
              </ScrollAnimation>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-4 text-right">
              {" "}
              <ScrollAnimation
                duration={2}
                delay={500}
                animateIn="animate__fadeInRightCustom"
                animateOut="animate__fadeOut"
                animateOnce={true}
              >
                <div className="blog-grey  mt-5">Explore the press kit</div>
               
              </ScrollAnimation>
            </div>
           
          </div>
          <div className="">
            <ScrollAnimation
              duration={2}
              delay={500}
              animateIn="animate__fadeInUp"
              animateOut="animate__fadeOut"
              animateOnce={true}
            >
              <div className="row ">
                <div className="col-lg-3 col-md-3 col-sm-3 col-xs-12">
                  <Link href="/mern">
                    <img
                      src="/assets/images/b1.png"
                      className=" img-fluid portfolio mb-3"
                    ></img>
                    <p className="blog-black">What is MERN stack ?</p>
                    <p className="blog-grey">MERN stack : 1 min read</p>
                  </Link>
                </div>
                <div className="col-lg-3  col-md-3 col-sm-3 col-xs-12">
                <Link href="/jira">
                  <img
                    src="/assets/images/b2.png"
                    className=" img-fluid portfolio mb-3"
                  ></img>
                  <p className="blog-black ">What is Jira Board?</p>
                  <p className="blog-grey">Jira : 1 min read</p>
                  </Link>
                </div>

                <div className="col-lg-3  col-md-3 col-sm-3 col-xs-12">
                <Link href="/agile">
                  <img
                    src="/assets/images/b3.png"
                    className=" img-fluid portfolio mb-3"
                  ></img>
                  <p className="blog-black">What is Agile Methodology ?</p>
                  <p className="blog-grey">Agile : 1 min read</p>
                  </Link>
                </div>
                <div className="col-lg-3  col-md-3 col-sm-3 col-xs-12">
                <Link href="/mean">
                  <img
                    src="/assets/images/b6.png"
                    className=" img-fluid portfolio mb-3"
                  ></img>
                  <p className="blog-black">What is MEAN stack ?</p>
                  <p className="blog-grey">MERN stack : 1 min read</p>
                  </Link>
                </div>
              </div>
            </ScrollAnimation>
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6"></div>
              <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-right mt-5">
              <ScrollAnimation
                duration={2}
                delay={900}
                animateIn="animate__fadeInRightCustom"
                animateOut="animate__fadeOut"
                animateOnce={true}
              >
                <button class="section-two-btn-dark">View All </button>
                </ScrollAnimation>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
