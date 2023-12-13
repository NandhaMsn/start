import { useEffect, useState } from "react";
import Head from "next/head";
import "animate.css";
import NavBar from "../../components/Navbar";
import ScrollAnimation from "react-animate-on-scroll";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
function index() {
  const [showText, setShowText] = useState(false);
  const [showTextTwo, setShowTextTwo] = useState(false);
  const [showTextThree, setShowTextThree] = useState(false);
  const [showTextFour, setShowTextFour] = useState(false);
  const [showTextFive, setShowTextFive] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Define the scroll position where you want to show the text
      const scrollPositionToShowText = 2350; // Adjust this value as needed
      const scrollPositionToShowTextTwo = 2800;
      const scrollPositionToShowTextThree = 3305;
      const scrollPositionToShowTextFour = 3905;
      const scrollPositionToShowTextFive = 4305;

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
      const threshold = 2350;
      const thresholdtwo = 2450;
      const thresholdthree = 2550; // Adjust this threshold as needed
      const thresholdfour = 2000;
      const thresholdfive = 2000;
      const thresholdsix = 2650;
      const thresholdseven = 2750;
      // Check if the scroll position meets the condition
      if (scrollY >= threshold) {
        setScrollClass("ourProcess-colorChange");
      } else {
        setScrollClass("");
      }
      if (scrollYtwo >= thresholdtwo) {
        setScrollClassTwo("ourProcess-colorChange");
      } else {
        setScrollClassTwo("");
      }
      if (scrollYthree >= thresholdthree) {
        setScrollClassThree("ourProcess-colorChange");
      } else {
        setScrollClassThree("");
      }
      if (scrollYfour >= thresholdfour) {
        setScrollClassFour("aboutus-gradient");
      } else {
        setScrollClassFour("");
      }
      if (scrollYfive >= thresholdfive) {
        setScrollClassFive("");
      } else {
        setScrollClassFive("");
      }
      if (scrollYsix >= thresholdsix) {
        setScrollClassSix("ourProcess-colorChange");
      } else {
        setScrollClassSix("");
      }
      if (scrollYseven >= thresholdseven) {
        setScrollClassSeven("ourProcess-colorChange");
      } else {
        setScrollClassSeven("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    let panels = gsap.utils.toArray(".panel");
    let tops = panels.map((panel) =>
      ScrollTrigger.create({ trigger: panel, start: "top top" })
    );

    panels.forEach((panel, i) => {
      ScrollTrigger.create({
        trigger: panel,
        start: () =>
          panel.offsetHeight < window.innerHeight ? "top top" : "bottom bottom",
        pin: true,
        pinSpacing: false,
      });
    });

    ScrollTrigger.create({
      snap: {
        snapTo: (progress, self) => {
          let panelStarts = tops.map((st) => st.start),
            snapScroll = gsap.utils.snap(panelStarts, self.scroll());
          return gsap.utils.normalize(
            0,
            ScrollTrigger.maxScroll(window),
            snapScroll
          );
        },
        duration: 0.5,
      },
    });
  }, []);

  return (
    <div className={`container-fluid section-divide-margin-second bg-black   `}>
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
      <div
        className={`container border-radius-25-ourprocess   `}
      >
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
      <div className="container-fluid">
          <div class="description panel blue ">
            {
              <div className="row no-gutters dott">
                <div className="col-lg-12 ">
                  {
                    <div
                      className={`ourProcess ${scrollClass}  marginTop-video`}
                    >
                      <div className="d-flex ">
                        <span>01</span>

                        {showText && (
                          <ScrollAnimation
                            duration={1}
                            delay={100}
                            animateIn="animate__fadeInUp"
                            animateOut="animate__fadeOutDown"
                            animateOnce={true}
                          >
                            {" "}
                            <h5>Discover</h5>
                          </ScrollAnimation>
                        )}
                      </div>

                      <div className={`ourProcess-border-left `}>
                        {showText && (
                          <ScrollAnimation
                            duration={1}
                            delay={100}
                            animateIn="animate__fadeInUp"
                            animateOut="animate__fadeOutDown"
                            animateOnce={true}
                          >
                            {" "}
                            <p>
                              There is a long established fact that a reader
                              will be distracted by the readable content of a
                              page when looking at its layout.
                            </p>
                          </ScrollAnimation>
                        )}
                      </div>
                    </div>
                  }
                </div>
                <div className="col-lg-0 ">
                  {showText && (
                    <div className="ourProcess-video animate__animated animate__fadeInUp marginTop-video ">
                      <video autoPlay muted loop className="text-right">
                        <source
                          // src="/assets/images/a50.mp4"
                          type="video/mp4"
                          height={"100px"}
                          width={"500px"}
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  )}
                </div>
              </div>
            }
          </div>

          <section class="panel red">
            <div className="row no-gutters dott">
              <div className="col-lg-12">
                {
                  <div
                    className={`ourProcess  ${scrollClassTwo}  marginTop-video`}
                  >
                    <div className="d-flex ">
                      <span>02</span>
                      {showTextTwo && (
                        <ScrollAnimation
                          duration={1}
                          delay={100}
                          animateIn="animate__fadeInUp"
                          animateOut="animate__fadeOutDown"
                          animateOnce={true}
                        >
                          {" "}
                          <h5>Discuss</h5>
                        </ScrollAnimation>
                      )}
                    </div>

                    <div className="ourProcess-border-left">
                      {showText && (
                        <ScrollAnimation
                          duration={1}
                          delay={100}
                          animateIn="animate__fadeInUp"
                          animateOut="animate__fadeOutDown"
                          animateOnce={true}
                        >
                          {" "}
                          <p>
                            There is a long established fact that a reader will
                            be distracted by the readable content of a page when
                            looking at its layout.
                          </p>
                        </ScrollAnimation>
                      )}
                    </div>
                  </div>
                }
              </div>
              <div className="col-lg-0">
                {showTextTwo && (
                  <div className="ourProcess-video animate__animated animate__fadeInUp marginTop-video">
                    <video autoPlay muted loop>
                      <source
                        // src="/assets/images/a66.mp4"
                        type="video/mp4"
                        height={"100px"}
                        width={"500px"}
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </div>
            </div>
          </section>
          <section class="panel orange">
            <div className="row row-no-gutters dott">
              <div className="col-lg-6">
                {
                  <div
                    className={`ourProcess ${scrollClassThree} marginTop-video`}
                  >
                    <div className="d-flex ">
                      <span>03</span>
                      {showTextThree && (
                        <ScrollAnimation
                          duration={1}
                          delay={100}
                          animateIn="animate__fadeInUp"
                          animateOut="animate__fadeOutDown"
                          animateOnce={true}
                        >
                          {" "}
                          <h5>Design</h5>
                        </ScrollAnimation>
                      )}
                    </div>

                    <div className={`ourProcess-border-left `}>
                      {showTextThree && (
                        <ScrollAnimation
                          duration={1}
                          delay={100}
                          animateIn="animate__fadeInUp"
                          animateOut="animate__fadeOutDown"
                          animateOnce={true}
                        >
                          {" "}
                          <p>
                            There is a long established fact that a reader will
                            be distracted by the readable content of a page when
                            looking at its layout.
                          </p>
                        </ScrollAnimation>
                      )}
                    </div>
                  </div>
                }
              </div>
              <div className="col-lg-6">
                {showTextThree && (
                  <div className="ourProcess-video animate__animated animate__fadeInUp marginTop-video">
                    <video autoPlay muted loop>
                      <source
                        // src="/assets/images/a59.mp4"
                        type="video/mp4"
                        height={"100px"}
                        width={"500px"}
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </div>
            </div>
          </section>
          <section class="panel musk">
            <div className="row dott">
              <div className="col-lg-12 ">
                {
                  <div
                    className={`ourProcess ${scrollClassSix}   marginTop-video`}
                  >
                    <div className="d-flex ">
                      <span>04</span>

                      {showTextFour && (
                        <ScrollAnimation
                          duration={1}
                          delay={100}
                          animateIn="animate__fadeInUp"
                          animateOut="animate__fadeOutDown"
                          animateOnce={true}
                        >
                          <h5>Develop & Deploy</h5>
                        </ScrollAnimation>
                      )}
                    </div>

                    <div className={`ourProcess-border-left `}>
                      {showTextFour && (
                        <ScrollAnimation
                          duration={1}
                          delay={100}
                          animateIn="animate__fadeInUp"
                          animateOut="animate__fadeOutDown"
                          animateOnce={true}
                        >
                          {" "}
                          <p>
                            There is a long established fact that a reader will
                            be distracted by the readable content of a page when
                            looking at its layout.
                          </p>
                        </ScrollAnimation>
                      )}
                    </div>
                  </div>
                }
              </div>
              <div className="col-lg-0">
                {showTextFour && (
                  <div className="ourProcess-video animate__animated animate__fadeInUp marginTop-video">
                    <video autoPlay muted loop>
                      <source
                        // src="/assets/images/a68.mp4"
                        type="video/mp4"
                        height={"100px"}
                        width={"500px"}
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </div>
            </div>
          </section>
          <section class="panel green">
            <div className="row video-mb ">
              <div className="col-lg-6 ">
                {
                  <div
                    className={`ourProcess ${scrollClassSeven}  marginTop-video`}
                  >
                    <div className="d-flex ">
                      <span>05</span>
                      {showTextFive && (
                        <ScrollAnimation
                          duration={1}
                          delay={100}
                          animateIn="animate__fadeInUp"
                          animateOut="animate__fadeOutDown"
                          animateOnce={true}
                        >
                          {" "}
                          <h5>Dominate</h5>
                        </ScrollAnimation>
                      )}
                    </div>

                    <div className="ourProcess-border-left-no">
                      {showTextFive && (
                        <ScrollAnimation
                          duration={1}
                          delay={100}
                          animateIn="animate__fadeInUp"
                          animateOut="animate__fadeOutDown"
                          animateOnce={true}
                        >
                          {" "}
                          <p>
                            There is a long established fact that a reader will
                            be distracted by the readable content of a page when
                            looking at its layout.
                          </p>
                        </ScrollAnimation>
                      )}
                    </div>
                  </div>
                }
              </div>
              <div className="col-lg-6">
                {showTextFive && (
                  <div className="ourProcess-video animate__animated animate__fadeInUp marginTop-video">
                    <video autoPlay muted loop>
                      <source
                        // src="/assets/images/a75.mp4"
                        type="video/mp4"
                        height={"100px"}
                        width={"500px"}
                      />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                )}
              </div>
            </div>
          </section>
        </div>
     
    </div>
  );
}

export default index;
