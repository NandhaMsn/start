import { useEffect, useState } from "react";
import Head from "next/head";
import Link from "next/link";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
import NavBar from "../../components/Navbar";
import { useRouter } from "next/router";
import BlogComponent from "../blogComponent/blogComponent";
export default function SectionBlack() {
  const router = useRouter();

  const dark = router.pathname === "/portfolio";

  const [scrollClass, setScrollClass] = useState("");
  const [scrollClassService, setScrollClassService] = useState("");
  const [scrollClassButton, setScrollClassButton] = useState("");
  const [isHovered, setIsHovered] = useState(false);
  const [isHoveredtwo, setIsHoveredtwo] = useState(false);
  const [isHoveredthree, setIsHoveredthree] = useState(false);
  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };
  const handleMouseEnterTwo = () => {
    setIsHoveredtwo(true);
  };

  const handleMouseLeaveTwo = () => {
    setIsHoveredtwo(false);
  };
  const handleMouseEnterThree = () => {
    setIsHoveredthree(true);
  };

  const handleMouseLeaveThree = () => {
    setIsHoveredthree(false);
  };
  useEffect(() => {
    // Add a scroll event listener to change the text color on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;

      const threshold = 6400; // Adjust this threshold as needed

      // Check if the scroll position meets the condition
      if (scrollY >= threshold) {
        setScrollClass("bg-black-about1");
      } else {
        setScrollClass("");
      }
      if (scrollY >= threshold) {
        setScrollClassService("services-main-heading-white");
      } else {
        setScrollClassService("");
      }
      if (scrollY >= threshold) {
        setScrollClassButton("button3");
      } else {
        setScrollClassButton("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`container-fluid   bg-black-about1 `}>
     
      <div className="container  ">
        {dark ? <NavBar /> : ""}
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
        {dark ? (
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
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 text-left">
             
                <p className={`portfolio-services-black  `}>
                  <span className={`services-main-heading-white `}>
                    Portfolio
                  </span>
                </p>
                <p className="black-para">
                  Fringilla quam urna. Cras turpis elit, euismod eget ligula
                  quis, imperdiet sagittis justo. In viverra fermentum ex ac
                  vestibulum. Aliquam eleifend nunc a luctus porta. Mauris
                  laoreet augue ut felis blandit, at iaculis odio ultrices.
                </p>
                <div class="outer3 text-right">
                  <div class={`button3`}>
                    <div class="text3"><Link href="" className="link">View our Portfolio</Link></div>
                  </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 text-left">
            <Link href="/razoxic" className="link">
              <ScrollAnimation
                duration={2}
                delay={500}
                animateIn="animate__fadeInRightCustom"
                animateOut="animate__fadeOut"
                animateOnce={true}
              >
                <div
                  className={`homportfolio-first-two-three `}
                  
                >
              
                  <div className="row ">
                  <div className="col-lg-12">
                    {" "}
                    <div className="services-videos-one-portfolio ">
                      {/* <video autoPlay muted loop>
                        <source
                          src="/assets/images/m2.mp4"
                          type="video/mp4"
                          className="img-fluid"
                        />
                        Your browser does not support the video tag.
                      </video> */}
                      <img src="/assets/images/e1.png"></img>
                    </div>
                  </div>
                </div>
                </div>
              </ScrollAnimation>
              </Link>
              <Link href="/razoxic" className="link">
              <div
                className={`homportfolio-first `}
              >
                   <div className="portfolio-video-head">
                    <h4>Razoxic</h4>
                    <p>See more</p>
                  </div>
              </div>
              </Link>
            </div>
          </div>
         

          <div className="row mt-5 works">
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 text-left">
            <Link href="/med" className="link">
              
                <div
                  className={`homportfolio-first-two-three `}
                  
                >
              
                  <div className="row">
                  <div className="col-lg-12">
                    {" "}
                    <div className="services-videos-one-portfolio  ">
                      <video autoPlay muted loop>
                        <source
                          src="/assets/images/m2.mp4"
                          type="video/mp4"
                          className="img-fluid"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
                </div>
             
              </Link>
              <Link href="/med" className="link">
              <div
                className={`homportfolio-second `}
              >
                   <div className="portfolio-video-head">
                    <h4>Med + Med </h4>
                    <p>See more</p>
                  </div>
              </div>
              </Link>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 col-xs-12 text-left">
            <Link href="/med" className="link">
             
                <div
                  className={`homportfolio-first-two-three `}
                  
                >
              
                  <div className="row">
                  <div className="col-lg-12">
                    {" "}
                    <div className="services-videos-one-portfolio  ">
                      <video autoPlay muted loop>
                        <source
                          src="/assets/images/c3.mp4"
                          type="video/mp4"
                          className="img-fluid"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>
                </div>
                </div>
             
              </Link>
              <Link href="/crypto" className="link">
              <div
                className={`homportfolio-second-two `}
              >
                   <div className="portfolio-video-head">
                    <h4>Crypto</h4>
                    <p>See more</p>
                  </div>
              </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* <img src="/assets/images/B.png" className="gradient-bg-image4"></img> */}
      {/* <BlogComponent /> */}
    </div>
  );
}
