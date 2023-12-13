import React from "react";
import Head from "next/head";
import { Link } from "@mui/material";
import AboutUs from "../../components/aboutUsComponent/AboutUs";
import NavBar from "../../components/Navbar";
import { useRouter } from "next/router";
import "animate.css";
import Styles from "../../styles/Home.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import BlogComponent from "../../components/blogComponent/blogComponent"
import Contact from "../../components/conatctUSComponent/conatct"
function index(props) {
  const router = useRouter();

  const { pathname } = router;

  const breadcrumbs = pathname.split("/").filter(Boolean);
  const dark = router.pathname;
  const backgroundClassname =
    dark === "/uiux" ? "aboutus-gradient" : "";

  function webDevelopment() {
    router.push("/webDevelopment");
  }

  function domains() {
    router.push("/domains");
  }

  function dataBase() {
    router.push("/dataBase");
  }

  function uiux() {
    router.push("/uiux");
  }
  function Infrastructure() {
    router.push("/Infrastructure");
  }

  return (
    <div className="">
      <div className={`container-fluid  ${backgroundClassname} `}>
        <NavBar dark={dark} />

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
          <ul class="breadcrumb">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>UI / UX</li>
          </ul>
          <div className="row ">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 homepage-text">
            <ScrollAnimation
                  duration={2}
                  delay={500}
                  animateIn="animate__fadeInRightCustom"
                  animateOut="animate__fadeOut"
                  animateOnce={true}
                >
              <p className="services-main-heading mb-5">UI / UX</p>
              </ScrollAnimation>
              <p className="section-two-grey mt-4 mb-5">
                Fringilla quam urna. Cras turpis elit, euismod eget ligula quis,
                imperdiet sagittis justo. In viverra fermentum ex ac vestibulum.
                Aliquam eleifend nunc a luctus porta. Mauris laoreet augue ut
                felis blandit, at iaculis odio ultrices.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-right">
              {" "}
            </div>
          </div>

          <div className="content-head    mt-5">
            <div className="row ">
              {/* <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <ScrollAnimation
                  duration={2}
                  delay={500}
                  animateIn="animate__fadeInRightCustom"
                  animateOut="animate__fadeOut"
                  animateOnce={true}
                >
                  <div className="cube">What We Offer</div>
                </ScrollAnimation>
              </div> */}
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                {" "}
                <ScrollAnimation
                  duration={2}
                  delay={500}
                  animateIn="animate__fadeInRightCustom"
                  animateOut="animate__fadeOut"
                  animateOnce={true}
                >
                  <p className="services-main-heading">
                     Seamless <span className="gradient-text">UI/UX </span>  Excellence for Web Development Services
                  </p>
                  <p className="grey">
                  Elevate your digital presence with our cutting-edge web development services designed to deliver a seamless and captivating user experience (UI/UX). At Startificial, we blend creativity, functionality, and user-centric design principles to craft web solutions that engage, convert, and leave a lasting impression. Our expert team of designers and developers is dedicated to bringing your vision to life, ensuring your website not only looks exceptional but also functions flawlessly across all devices. Transform your online presence and stand out in the digital landscape with our UI/UX-focused web development expertise.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
            <div
              className={`${Styles.product_innovation_container} `}
            >
                 <div className="row mt-5 mb-5">
              {/* <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <ScrollAnimation
                  duration={2}
                  delay={500}
                  animateIn="animate__fadeInRightCustom"
                  animateOut="animate__fadeOut"
                  animateOnce={true}
                >
                  <div className="cube">What We Offer</div>
                </ScrollAnimation>
              </div> */}
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                {" "}
                <ScrollAnimation
                  duration={2}
                  delay={500}
                  animateIn="animate__fadeInRightCustom"
                  animateOut="animate__fadeOut"
                  animateOnce={true}
                >
                  <p className="services-main-heading">
                    Our Comprehensive Suite <br/> of <span className="gradient-text">UI/UX </span> Tools
                    
                  </p>
                 
                </ScrollAnimation>
              </div>
            </div>
              <div className="row">
                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                  <p className="about-us-para">
                    Are you ready for the Industrial Metaverse? <br />
                    <br />
                    <br />
                    <br />
                    Establish and solidifying industry leaders. Unlock your
                    brand’s potential. Creating an extension between a company
                    and their audience.
                    <br />
                    <br />
                    <br />
                    <span className="about-us-para-bold">
                      Establish and solidifying industry leaders. Unlock your
                      brand’s potential.
                    </span>
                  </p>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                  <div className={Styles.table_wrap}>
                    <div className="c-icon-img">
                      <div className="hover-bg-img">
                      <ScrollAnimation
                              delay={500}
                              animateIn="animate__fadeInRightCustom"
                              animateOut="animate__fadeOut"
                              animateOnce={true}
                            >
                              <h4 className={Styles.h4_heading}> <img src="./assets/images/arr.png" height={30} />Adobe XD</h4>
                            </ScrollAnimation>
                            <p>
                            Adobe XD is a versatile design and prototyping tool that allows designers to create interactive prototypes, wireframes, and user interfaces for web and mobile applications. 
                            </p>
                            <button
                              className="explore-btn"
                              onClick={webDevelopment}
                            >
                              Read More
                            </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12">
                  <div className={Styles.table_wrap}>
                    <div className="c-icon-img">
                      <div className="hover-bg-img">
                      <ScrollAnimation
                              delay={500}
                              animateIn="animate__fadeInRightCustom"
                              animateOut="animate__fadeOut"
                              animateOnce={true}
                            >
                              <h4 className={Styles.h4_heading}> <img src="./assets/images/arr.png" height={30} /> Figma</h4>
                            </ScrollAnimation>
                            <p>
                            Figma is a collaborative interface design tool that enables real-time collaboration among team members, making it easy to design and iterate on projects together.
                            </p>
                            <button className="explore-btn" onClick={domains}>
                              Read More
                            </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
             
            </div>
          </div>
        </div>
        {/* <AboutUs /> */}
        <BlogComponent/>
      <Contact/>
      </div>
    </div>
  );
}

export default index;
