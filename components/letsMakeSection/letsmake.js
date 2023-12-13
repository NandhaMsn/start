import { useEffect, useState } from "react";
import Head from "next/head";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";

export default function LetsMakeSection() {
  const [scrollClass, setScrollClass] = useState(false);
  const [scrollClassService, setScrollClassService] = useState(false);

  useEffect(() => {
    // Add a scroll event listener to change the text color on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 5500; // Adjust this threshold as needed

      // Check if the scroll position meets the condition
      if (scrollY >= threshold) {
        setScrollClass(true);
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

  useEffect(() => {
    // Add a scroll event listener to change the text color on scroll
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 5500; // Adjust this threshold as needed

      // Check if the scroll position meets the condition
      if (scrollY >= threshold) {
        setScrollClassService(true);
      } else {
        setScrollClassService("");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      // Clean up the event listener when the component unmounts
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div className={`container-fluid   section-divide-letsmake scroll-color-change `}>
       
          <div className="section-divide-paddings ">
            <div className="container">
              <Head>
                <title>Startitificial</title>
                <meta name="keyword" content="home" />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                  rel="preconnect"
                  href="https://fonts.gstatic.com"
                  crossorigin
                ></link>
                <link
                  href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;200;600;700;800;900&display=swap"
                  rel="stylesheet"
                />
                <link
                  href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
                  rel="stylesheet"
                />
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
              </Head>

              <div className="content-head mt-5 section-divide-letsmake">
                <div className="row">
                  <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12 padding-top-40">
                <ScrollAnimation
                      duration={2}
                      delay={100}
                      animateIn="animate__fadeInRightCustom"
                      animateOut="animate__fadeOut"
                      animateOnce={true}
                    >
                      <h2 className={`mb-5  letsmakeHeading-white`}>
                        Let’s make <br />
                        some serious <br />
                        noise in the world of <br />
                        innovation together.
                      </h2>
                      <p className="black-para">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout.It is a long established fact that
                        a reader will be distracted by the readable content of a
                        page when looking at its layout.It is a long established
                        fact that a reader will be distracted by the readable
                        content of a page when looking at its layout
                      </p>
                      {/* <p className="black-para  mt-5">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when
                          looking at its layout.
                        </p> */}
                    </ScrollAnimation>
                  
                  </div>
                  <div className="col-lg-4">
                    {/* <ScrollAnimation
                      duration={2}
                      delay={100}
                      animateIn="animate__fadeInUp"
                      animateOut="animate__fadeOut"
                      animateOnce={true}
                    >
                      <div className=" rotating-image">
                        <img
                          src="./assets/images/ring.png"
                          className="img-fluid"
                        ></img>
                      </div>
                    </ScrollAnimation> */}
                     <div className="services-videos-one  ">
                <video autoPlay muted loop>
                  <source src="/assets/images/n7.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
                  </div>
                </div>
               
              </div>
            </div>
          </div>
      </div>
    </>
  );
}
