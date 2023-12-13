import { useEffect, useState } from "react";
import Head from "next/head";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";

import HomeAbout from "../../components/homeAbout/homeAboutSection";
function index() {
  const [showText, setShowText] = useState(false);
  const [showTextTwo, setShowTextTwo] = useState(false);
  const [showTextThree, setShowTextThree] = useState(false);
  const [showTextFour, setShowTextFour] = useState(false);
  const [showTextFive, setShowTextFive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Define the scroll position where you want to show the text
      // const scrollPositionToShowText = 2350; // Adjust this value as needed
      // const scrollPositionToShowTextTwo = 3000;
      // const scrollPositionToShowTextThree = 3305;
      // const scrollPositionToShowTextFour = 3905;
      // const scrollPositionToShowTextFive = 4305;
      const scrollPositionToShowText = 0; // Adjust this value as needed
      const scrollPositionToShowTextTwo =0;
      const scrollPositionToShowTextThree = 0;
      const scrollPositionToShowTextFour = 0;
      const scrollPositionToShowTextFive = 0;

      // Check if the user has scrolled past the defined position
      if (window.pageYOffset > scrollPositionToShowText) {
        setShowText(true);
      } else {
        setShowText(false);
      }

      if (window.pageYOffset > scrollPositionToShowTextTwo) {
        setShowTextTwo(true);
      } else {
        setShowTextTwo(false);
      }

      if (window.pageYOffset > scrollPositionToShowTextThree) {
        setShowTextThree(true);
      } else {
        setShowTextThree(false);
      }

      if (window.pageYOffset > scrollPositionToShowTextFour) {
        setShowTextFour(true);
      } else {
        setShowTextFour(false);
      }

      if (window.pageYOffset > scrollPositionToShowTextFive) {
        setShowTextFive(true);
      } else {
        setShowTextFive(false);
      }
    };

    // Attach the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [scrollClass, setScrollClass] = useState("");
  const [scrollClassTwo, setScrollClassTwo] = useState("");
  const [scrollClassThree, setScrollClassThree] = useState("");
  const [scrollClassFour, setScrollClassFour] = useState("");
  const [scrollClassFive, setScrollClassFive] = useState("");
  const [scrollClassSix, setScrollClassSix] = useState("");
  const [scrollClassSeven, setScrollClassSeven] = useState("");

  useEffect(() => {
    // Add a scroll event listener to change the text color on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollYtwo = window.scrollY;
      const scrollYthree = window.scrollY;
      const scrollYfour = window.scrollY;
      const scrollYfive = window.scrollY;
      const scrollYsix = window.scrollY;
      const scrollYseven = window.scrollY;
      // const threshold = 2350;
      // const thresholdtwo = 2550;
      // const thresholdthree = 2550; // Adjust this threshold as needed
      // const thresholdfour = 2550;
      // const thresholdfive = 2000;
      // const thresholdsix = 2650;
      // const thresholdseven = 2750;
      const threshold = 0;
      const thresholdtwo = 0;
      const thresholdthree = 0; // Adjust this threshold as needed
      const thresholdfour = 0;
      const thresholdfive = 0;
      const thresholdsix = 0;
      const thresholdseven = 0;
      // Check if the scroll position meets the condition
      if (scrollY >= threshold) {
        setScrollClass("ourProcess-colorChange");
      } else {
        setScrollClass("");
      }
     
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

 





  
  
   
 
  return (
    <div className={`container-fluid section-divide-margin-second bg-black `}  >
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
      <div className={`container border-radius-25-ourprocess   `}>
        <div className="row">
          <ScrollAnimation
            delay={500}
            animateIn="animate__fadeInUp"
            animateOut="animate__fadeOut"
            animateOnce={true}
          >
            <h1
              className={`animate__animated animate__fadeInUp main-text-h1-white ${scrollClassFive}`}
            >
              The world moves fast, <br /> we keep pace. Cut through the noise
              with{" "}
              <span className="gradient-text-ourprocess">our process.</span>
            </h1>
          </ScrollAnimation>
        </div>
      </div>
      <div className="container-fluid black">
<div className="container ">
<div className="slider border-radius-25">
        <div className={`description     slider-item `} >
          {
            <div className={`container margin-left-right`}>
              <div className="row   ">
                <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                  {
                    <div
                      className={`ourProcess ${scrollClass}  marginTop-video`}
                    >
                      <div className="d-flex ">
                        <span>01</span>

                      
                            <h5 className="gradient-text">Discover</h5>
                         
                      </div>

                      <div className={`ourProcess-border-left `}>
                     
                            <p className="black">
                              There is a long established fact that a reader
                              will be distracted by the readable content of a
                              page when looking at its layout.
                            </p>
                          
                      </div>
                    </div>
                  }
                </div>
                <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 ">
                  { (
                    <div className=" animate__animated animate__fadeInUp marginTop-video our-image-container img-fluid">
                      {/* <video autoPlay muted loop className="text-right">
                        <source
                          src="/assets/images/a50.mp4"
                          type="video/mp4"
                          height={"100px"}
                          width={"500px"}
                        />
                        Your browser does not support the video tag.
                      </video> */}
                      <img src="/assets/images/h1k.png" className="img-fluid disone rotating-image"></img>
                      <img src="/assets/images/h1kk.png" className="img-fluid distwo "></img>
                
                      <img src="/assets/images/h1kkk.png" className="img-fluid disthree shake"></img>
                     
                    </div>
                  )}
                </div>
              </div>
            </div>
          }
        </div>

        <section className="slider-item ">
          <div className={`container   margin-left-right`}>
            <div className="row no-gutters dott">
              <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                {
                  <div className={`ourProcess  ourProcess-colorChange  marginTop-video`}>
                    <div className="d-flex ">
                      <span>02</span>
                     
                          {" "}
                          <h5 className="gradient-text"> Discuss</h5>
                        
                    </div>

                    <div className="ourProcess-border-left">
                     
                          <p className="black">
                            There is a long established fact that a reader will
                            be distracted by the readable content of a page when
                            looking at its layout.
                          </p>
                        
                    </div>
                  </div>
                }
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                { (
                  <div className="animate__animated animate__fadeInUp marginTop-video our-image-container">
                    {/* <video autoPlay muted loop>
                      <source
                        src="/assets/images/a66.mp4"
                        type="video/mp4"
                        height={"100px"}
                        width={"500px"}
                      />
                      Your browser does not support the video tag.
                    </video> */}
                    <div class="image-container">
                      <img src="/assets/images/h2kkk.png" className="img-fluid dissthree showimages"></img>
                      </div>
                      <div class="image-container">
                   <img src="/assets/images/h2k.png" className="img-fluid dissone showimages"></img>
                   </div>
                      <img src="/assets/images/h2kk.png" className="img-fluid disstwo "></img>
                
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        <section className="slider-item ">
          <div className={`container  margin-left-right`}>
            <div className="row row-no-gutters dott  ">
              <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                {
                  <div className={`ourProcess marginTop-video`}>
                    <div className="d-flex ">
                      <span>03</span>
                    
                          {" "}
                          <h5 className="gradient-text">Design</h5>
                       
                    </div>

                    <div className={`ourProcess-border-left `}>
                     
                          <p className="black">
                            There is a long established fact that a reader will
                            be distracted by the readable content of a page when
                            looking at its layout.
                          </p>
                        
                    </div>
                  </div>
                }
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                {(
                  <div className=" animate__animated animate__fadeInUp marginTop-video our-image-container">
                    
                      <img src="/assets/images/h3kk.png" className="img-fluid dissthree "></img>
                      
                      <div class="image-container">
                      <img src="/assets/images/h3k.png" className="img-fluid desone showimages"></img>
                      </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        <section className="slider-item ">
          <div className={`container  margin-left-right`}>
            <div className="row ">
              <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                {
                  <div className={`ourProcess   marginTop-video`}>
                    <div className="d-flex ">
                      <span>04</span>

                     
                          <h5 className="gradient-text">Develop & Deploy</h5>
                       
                    </div>

                    <div className={`ourProcess-border-left `}>
                    
                          <p className="black">
                            There is a long established fact that a reader will
                            be distracted by the readable content of a page when
                            looking at its layout.
                          </p>
                      
                    </div>
                  </div>
                }
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                { (
                  <div className=" animate__animated animate__fadeInUp marginTop-video">
                 
                     <img src="/assets/images/h4kk.png" className="img-fluid dissthree "></img>
                      
                     <div className="develop-container">
                     <img src="/assets/images/h4k.png" className="img-fluid devone rotating-image"></img>
                      <img src="/assets/images/h4k.png" className="img-fluid devtwo rotating-image"></img>
                     </div>
                     
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        <section className="slider-item ">
          <div className={`container  margin-left-right`}>
            <div className="row video-mb ">
              <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
                {
                  <div className={`ourProcess   marginTop-video`}>
                    <div className="d-flex ">
                      <span>05</span>
                     
                          {" "}
                          <h5 className="gradient-text">Dominate</h5>
                       
                    </div>

                    <div className="ourProcess-border-left-no">
                    
                          {" "}
                          <p className="black">
                            There is a long established fact that a reader will
                            be distracted by the readable content of a page when
                            looking at its layout.
                          </p>
                       
                    </div>
                  </div>
                }
              </div>
              <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 ">
                {(
                  <div className=" animate__animated animate__fadeInUp marginTop-video our-image-container margin-img``">
                    {/* <video autoPlay muted loop>
                      <source
                        src="/assets/images/a75.mp4"
                        type="video/mp4"
                        height={"100px"}
                        width={"500px"}
                      />
                      Your browser does not support the video tag.
                    </video> */}
                      <div class="image-containe">
                     <img src="/assets/images/h5k.png" className="img-fluid domone "></img>
                     </div>
                     <div class="image-containertw">
                     <img src="/assets/images/h5kk.png" className="img-fluid domtwo "></img>
                     </div>
                      <div class="image-containerthre">
                      <img src="/assets/images/h5kkk.png" className="img-fluid domthree "></img>
                      </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        </div>
</div>
      
       
      </div>
      <div>
      <HomeAbout />
      </div>
    </div>
  );
}

export default index;
