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
  const backgroundClassname = dark === "/database" ? "aboutus-gradient" : "";

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
            <li>Database</li>
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
                <p className="services-main-heading mb-5">Database</p>
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

          <div className="content-head  section-divide-margin">
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
                  <p className="services-main-heading mb-5">
                    <span className="gradient-text">Database </span> Solutions
                    for Your Web Development Needs{" "}
                  </p>
                  <p className="grey">
                    At Startificial, we offer a comprehensive suite of database
                    services tailored to meet the unique demands of your web
                    development projects. Our database solutions empower your
                    website with robust functionality, ensuring seamless data
                    management, security, and performance. From efficient data
                    storage to real-time updates, our expert team ensures your
                    web applications run smoothly, delivering exceptional user
                    experiences. Trust us to handle the data, so you can focus
                    on crafting outstanding web solutions. Elevate your web
                    development game with our cutting-edge database services.{" "}
                    <br></br>
                    <br></br>
                    Explore our web development services below and discover how
                    we can help you achieve your online goals.With our team of
                    experienced developers, we offer a comprehensive range of
                    services to cater to your unique requirements. Whether
                    you're launching a new website or enhancing an existing one,
                    our expertise ensures a seamless online presence. Explore
                    our web development services below and discover how we can
                    help you achieve your online goals.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
            <div
              className={`${Styles.product_innovation_container}`}
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
                      Our <span className="gradient-text">Database </span>{" "}
                      Offerings{" "}
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
                          <h4 className={Styles.h4_heading}>
                            {" "}
                            <img
                              src="./assets/images/arr.png"
                              height={30}
                            />{" "}
                            Mongo DB
                          </h4>
                        </ScrollAnimation>
                        <p>
                          MongoDB is a versatile NoSQL database that offers
                          flexibility and scalability for your web development
                          projects.
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
                          <h4 className={Styles.h4_heading}>
                            {" "}
                            <img src="./assets/images/arr.png" height={30} />
                            SQL
                          </h4>
                        </ScrollAnimation>
                        <p>
                          SQL databases, including MySQL, PostgreSQL, and
                          Microsoft SQL Server, provide a structured and
                          reliable foundation for your web applications.
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
        <BlogComponent />
        <Contact />
      </div>
    </div>
  );
}

export default index;
