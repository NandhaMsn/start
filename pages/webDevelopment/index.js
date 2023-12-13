import React from "react";
import Head from "next/head";
import { Link } from "@mui/material";
import AboutUs from "../../components/aboutUsComponent/AboutUs";
import NavBar from "../../components/Navbar";
import { useRouter } from "next/router";
import "animate.css";
import Styles from "../../styles/Home.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import BlogComponent from "../../components/blogComponent/blogComponent";
import Contact from "../../components/conatctUSComponent/conatct";
function index(props) {
  const router = useRouter();

  const { pathname } = router;

  const breadcrumbs = pathname.split("/").filter(Boolean);
  const dark = router.pathname;
  const backgroundClassname =
    dark === "/webDevelopment" ? "aboutus-gradient" : "";

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

        <div className="container">
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
          <ScrollAnimation
                duration={2}
                delay={1000}
                animateIn="animate__fadeInRightCustom"
                animateOut="animate__fadeOut"
                animateOnce={true}
              >
          <ul class="breadcrumb">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>Web Development</li>
          </ul>
          </ScrollAnimation>
          <div className="row ">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 homepage-text">
            <ScrollAnimation
                              delay={500}
                              animateIn="animate__fadeInRightCustom"
                              animateOut="animate__fadeOut"
                              animateOnce={true}
                            >
              <p className="services-main-heading mb-5"> Web <span className="gradient-text">Development </span></p>
              <p className="section-two-grey mt-4 mb-5">
                Fringilla quam urna. Cras turpis elit, euismod eget ligula quis,
                imperdiet sagittis justo. In viverra fermentum ex ac vestibulum.
                Aliquam eleifend nunc a luctus porta. Mauris laoreet augue ut
                felis blandit, at iaculis odio ultrices.
              </p>
              </ScrollAnimation>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-right">
              {" "}
            </div>
          </div>

          <div className="content-head mt-5">
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
                    Expert Web Development <br />
                    <span className="gradient-text">Services </span>
                    Tailored to Your <br /> Needs
                  </p>
                  <p className="grey">
                    At Startificial, we take pride in delivering top-notch web
                    development solutions that empower your business in the
                    digital world. With our team of experienced developers, we
                    offer a comprehensive range of services to cater to your
                    unique requirements. Whether you're launching a new website
                    or enhancing an existing one, our expertise ensures a
                    seamless online presence. Explore our web development
                    services below and discover how we can help you achieve your
                    online goals.With our team of experienced developers, we
                    offer a comprehensive range of services to cater to your
                    unique requirements. Whether you're launching a new website
                    or enhancing an existing one, our expertise ensures a
                    seamless online presence. Explore our web development
                    services below and discover how we can help you achieve your
                    online goals."
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
                      Our Core <span className="gradient-text">Services </span>
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
                              <h4 className={Styles.h4_heading}> <img src="./assets/images/arr.png" height={30} />MERN Stack</h4>
                            </ScrollAnimation>
                            <p>
                              Comprehensive web development services: We design,
                              code, and optimize websites, ensuring
                              responsiveness, security, and a seamless user
                              experience for online success.
                            </p>
                            <button className="explore-btn">Read More</button>
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
                              <h4 className={Styles.h4_heading}>  <img src="./assets/images/arr.png" height={30} />MEAN Stack</h4>
                            </ScrollAnimation>
                            <p>
                              Establish and solidifying industry leaders. Unlock
                              your brand’s potential. Creating an extension
                              between a company and their audience.
                            </p>
                            <button className="explore-btn">Read More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row mt-5">
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
                              <h4 className={Styles.h4_heading}> <img src="./assets/images/arr.png" height={30} />Wordpress</h4>
                            </ScrollAnimation>
                            <p>
                              Establish and solidifying industry leaders. Unlock
                              your brand’s potential. Creating an extension
                              between a company and their audience.
                            </p>
                            <button className="explore-btn">Read More</button>
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
                              <h4 className={Styles.h4_heading}>  <img src="./assets/images/arr.png" height={30} />Python</h4>
                            </ScrollAnimation>
                            <p>
                              Establish and solidifying industry leaders. Unlock
                              your brand’s potential. Creating an extension
                              between a company and their audience.
                            </p>
                            <button className="explore-btn">Read More</button>
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
                              <h4
                                className={Styles.h4_heading}
                                onClick={Infrastructure}
                              >
                                <img src="./assets/images/arr.png" height={30} /> PHP
                              </h4>
                            </ScrollAnimation>
                            <p>
                              Establish and solidifying industry leaders. Unlock
                              your brand’s potential. Creating an extension
                              between a company and their audience.
                            </p>
                            <button className="explore-btn">Read More</button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12 mt-5">
                  <div className={Styles.table_wrap}>
                    <div className="c-icon-img">
                      <div className="hover-bg-img">
                      <ScrollAnimation
                              delay={500}
                              animateIn="animate__fadeInRightCustom"
                              animateOut="animate__fadeOut"
                              animateOnce={true}
                            >
                              <h4 className={Styles.h4_heading}> <img src="./assets/images/arr.png" height={30} />Vue.JS</h4>
                            </ScrollAnimation>
                            <p>
                              Establish and solidifying industry leaders. Unlock
                              your brand’s potential. Creating an extension
                              between a company and their audience.
                            </p>
                            <button className="explore-btn">Read More</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12"></div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-12"></div>
              </div>
            </div>
          </div>
        </div>
        {/* <AboutUs /> */}
        <BlogComponent />
        <Contact />
      </div>
    </div>
  );
}

export default index;
