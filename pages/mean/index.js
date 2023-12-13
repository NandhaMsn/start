import React from "react";
import Head from "next/head";
import { Box, Chip, Stack, Typography, Container, Link } from "@mui/material";
import { useRouter } from "next/router";
import NavBar from "../../components/Navbar";
import BlogComponent from "../../components/blogComponent/blogComponent";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
function index() {
  const router = useRouter();

  const { pathname } = router;

  const breadcrumbs = pathname.split("/").filter(Boolean);
  const dark = router.pathname;
  const backgroundClassname = dark === "/services" ? "aboutus-gradient" : "";
  return (
    <div className="contactUs">
      <NavBar dark={dark} />
      <div className="container section-divide-margin content">
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
        <div className="row">
          {/* <ul class="breadcrumb">
            <li>
              <Link href="/">Home</Link>
            </li>

            <li></li>
          </ul> */}
          <div className="row">
            <p className="blog-grey ">BLOG</p>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <img src="./assets/images/b6.png" className="img-fluid"></img>
          </div>
          <div className="col-lg-6 mt-5 ">
            <ScrollAnimation
              duration={2}
              delay={500}
              animateIn="animate__fadeInRightCustom"
              animateOut="animate__fadeOut"
              animateOnce={true}
            >
              <p className="blog-grey mt-5">MEAN STACK</p>
              <h5 className="services-main-heading">
                What is <br />
                MEAN Stack ?
              </h5>
              <p className="blog-grey">MEAN STACK : 1 min read</p>
            </ScrollAnimation>
          </div>
          <ScrollAnimation
            duration={2}
            delay={500}
            animateIn="animate__fadeInRightCustom"
            animateOut="animate__fadeOut"
            animateOnce={true}
          >
            <div className="mt-5">
              <h5>What is MEAN Stack ?</h5>
              <p className="grey">
                MEAN stands for MongoDB, Express, React, Node, after the four
                key technologies that make up the stack. <br />
                Express and Node make up the middle (application) tier.
                Express.js is a server-side web framework, and Node.js is the
                popular and powerful JavaScript server platform. Regardless of
                which variant you choose, ME(RVA)N is the ideal approach to
                working with JavaScript and JSON, all the way through.
              </p>
              <h5>How does the MEAN stack work?</h5>
              <p className="grey">
                The MEAN architecture allows you to easily construct a
                three-tier architecture (front end, back end, database) entirely
                using JavaScript and JSON.
              </p>
            </div>
          </ScrollAnimation>
        </div>
      </div>
      <BlogComponent />
    </div>
  );
}

export default index;
