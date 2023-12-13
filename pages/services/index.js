import React from "react";
import Head from "next/head";
import { Link } from "@mui/material";
import AboutUs from "../../components/aboutUsComponent/AboutUs";
import NavBar from "../../components/Navbar";
import { useRouter } from "next/router";
import BlogComponent from "../../components/blogComponent/blogComponent";
import Contact from "../../components/conatctUSComponent/conatct";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
function index(props) {
  const router = useRouter();

  const { pathname } = router;

  const breadcrumbs = pathname.split("/").filter(Boolean);
  const dark = router.pathname;
  const backgroundClassname = dark === "/services" ? "aboutus-gradient" : "";
  return (
    <div className="">
      <div className={` container-fluid content ${backgroundClassname}`}>
        <NavBar dark={dark} />

        <div className=" container  mb-0  no-gutters">
          <Head>
            <title>Startificial</title>
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

            <li>Services</li>
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
                <p className="services-main-heading mb-5">Services</p>
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
        </div>
        <AboutUs />
        <BlogComponent />
        <Contact />
      </div>
    </div>
  );
}

export default index;
