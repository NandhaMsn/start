import { Box, Chip, Stack, Typography, Container } from "@mui/material";
import { useEffect, useState } from "react";
import Head from "next/head";
import NavBar from "../Navbar";
import "animate.css";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
export default function Home(props) {
  // const [showText, setShowText] = useState(false);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     // Define the scroll position where you want to show the text
  //     const scrollPositionToShowText = 2205; // Adjust this value as needed

  //     // Check if the user has scrolled past the defined position
  //     if (window.pageYOffset > scrollPositionToShowText) {
  //       setShowText(true);
  //     } else {
  //       setShowText(false);
  //     }
  //   };

  //   // Attach the scroll event listener
  //   window.addEventListener("scroll", handleScroll);

  //   // Clean up the event listener when the component unmounts
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const [scrollClass, setScrollClass] = useState("");
  // useEffect(() => {
  //   // Add a scroll event listener to change the text color on scroll
  //   const handleScroll = () => {
  //     const scrollY = window.scrollY;

  //     const threshold = 2205;

  //     // Check if the scroll position meets the condition
  //     if (scrollY >= threshold) {
  //       setScrollClass("ourProcess-colorChange");
  //     } else {
  //       setScrollClass("ourProcess");
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     // Clean up the event listener when the component unmounts
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);
  const One = "/assets/images/logo/purple.png";
  return (
    <>
      <div>
        <div className="container-fluid  video-background homepage ">
          <video autoPlay muted loop>
            <source src="/assets/images/bg2.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="content">
            <NavBar/>

            <div className="container ">
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
                <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
                <meta
                  name="viewport"
                  content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"
                ></meta>
              </Head>
              <div className="row homepage-text ">
                <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                  <ScrollAnimation
                    duration={2}
                    delay={200}
                    animateIn="animate__fadeInRightCustom"
                    animateOut="animate__fadeOut"
                    animateOnce={true}
                  >
                    <div className="animate__animated animate__fadeInRightCustom animate__delay-2s">
                      <span className="side-text ">Revelutionize Your</span>
                    </div>
                    <h1 className="main-text-h1-homePage ">
                      Creative Projects with <br />
                      the Ultimate AI - Powered <br />
                      Pattern
                    </h1>
                  </ScrollAnimation>
                  <p className="mt-4 mb-4">
                    There is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.
                  </p>
                  
                  <div class="outer">
                    <div class="button">
                      <div class="text">Get Started</div>
                    </div>
                  </div>
                  
                </div>
                {/* <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12   mt-5">
                  <div className="animate__animated animate__fadeInRightCustom animate__delay-2s">
                  
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
        {/* <div className="gradient"></div> */}
        <img src="/assets/images/B.png" className="gradient-bg-image"></img>
        {/* <img src="/assets/images/lite.png" className="gradient-bg-image1"></img> */}
      </div>
    </>
  );
}
