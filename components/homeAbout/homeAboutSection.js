import { useEffect, useState } from "react";
import Head from "next/head";
import "animate.css";
import { useRouter } from "next/router";
import NavBar from "../../components/Navbar";
import ScrollAnimation from "react-animate-on-scroll";
import LetsmakeSection from "../../components/letsMakeSection/letsmake";
import SectionTwo from "../sectionThirdComponent/sectionThird";
import Styles from "../../styles/Home.module.css";
import "splitting/dist/splitting.css";
import "splitting/dist/splitting-cells.css";
import dynamic from "next/dynamic"
// if(typeof window !== "undefind" && typeof window.navigator !== "undefined") {
//   import ("splitting/dist/splitting.css");
//   import ("splitting/dist/splitting-cells.css");
// }

const Splitting = dynamic(
  () => {
    return import("splitting");
  },
  { ssr: false }
);

// if(typeof window !== undefined) {

//   Splitting()
 
//  }
export default function AboutUs() {



  const router = useRouter();
  const dark = router.pathname;
  function webDevelopment() {
    router.push("/webDevelopment");
  }

  function domains() {
    router.push("/domains");
  }

  function dataBase() {
    router.push("/database");
  }

  function uiux() {
    router.push("/uiux");
  }
  function Infrastructure() {
    router.push("/infra");
  }

  // const backgroundClassname = dark === "/" ? "aboutus-gradient" : "";

const One = "dark";

  return (
    <div className={`container-fluid  scroll-color-change thirdComponent`}>
      {/* <NavBar dark={One}/> */}
      <div className="container section-divide-margin-about-us">
        <Head>
          <title>Startificial</title>
          <meta name="keyword" content="home" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link
            href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,400&display=swap"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/splitting/dist/splitting.css"
          />
          <link
            rel="stylesheet"
            href="https://unpkg.com/splitting/dist/splitting-cells.css"
          />
          <script src="https://unpkg.com/splitting/dist/splitting.min.js"></script>
        </Head>

        <div className="content-head marginTop-black">
          <div className="row ">
            <div className="col-lg-9 col-md-12 col-sm-12 col-xs-12">
              {" "}
              <ScrollAnimation
                duration={2}
                delay={500}
                animateIn="animate__fadeInRightCustom"
                animateOut="animate__fadeOut"
                animateOnce={true}
              >
                <p className={`main-text-h1 `}>
                  Explore Our {""}
                  <span className="gradient-text">Services </span>for a
                  Transformational Online Presence.
                </p>
              </ScrollAnimation>
            </div>
            <div className="col-lg-3">
              <div className="services-videos-one">
                <video autoPlay muted loop>
                  <source src="/assets/images/s83.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
        
            </div>
          </div>
        
          <div
            className={`row ${Styles.product_innovation_container} product-innovation`}
          >
            <div className="col-lg-4 mt-5">
              <p className="about-us-para ">
                Are you ready for the Industrial Metaverse? <br />
                <br />
                <br />
                <br />
                Establish and solidifying industry leaders. Unlock your brand’s
                potential. Creating an extension between a company and their
                audience.
                <br />
                <br />
                <br />
                <span className="about-us-para-bold white">
                  Establish and solidifying industry leaders. Unlock your
                  brand’s potential.
                </span>
              </p>
              <div className='services-videos-two '>
          <video autoPlay muted loop>
            <source src="/assets/images/s81.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </div>
            </div>
            <div className="col-lg-8 ">
              <div className="listService">
              <ScrollAnimation
            delay={500}
            animateIn="animate__fadeInUp"
            animateOut="animate__fadeOut"
            animateOnce={true}
          >
              <div className="servicelist">
                <h4 className="">Web Development</h4>
                <div className="text-right">
                  <p className="grey">Transforming Ideas into Websites</p>
                </div>
              </div>
              </ScrollAnimation>
              <ScrollAnimation
            delay={600}
            animateIn="animate__fadeInUp"
            animateOut="animate__fadeOut"
            animateOnce={true}
          >
              <div className="servicelist">
                <h4 className="">Domain Expertise</h4>
                <div className="text-right">
                  <p className="grey">Your Unique Web Address</p>
                </div>
              </div>
              </ScrollAnimation>
              <ScrollAnimation
            delay={700}
            animateIn="animate__fadeInUp"
            animateOut="animate__fadeOut"
            animateOnce={true}
          >
              <div className="servicelist">
                <h4 className="">Database Management</h4>
                <div className="text-right">
                  <p className="grey">Organizing Your Data</p>
                </div>
              </div>
              </ScrollAnimation>
              <ScrollAnimation
            delay={700}
            animateIn="animate__fadeInUp"
            animateOut="animate__fadeOut"
            animateOnce={true}
          >
              <div className="servicelist">
                <h4 className="">UI / UX Design</h4>
                <div className="text-right">
                  <p className="grey">User-Friendly Design</p>
                </div>
              </div>
              </ScrollAnimation>
              <ScrollAnimation
            delay={900}
            animateIn="animate__fadeInUp"
            animateOut="animate__fadeOut"
            animateOnce={true}
          >
              <div className="servicelist">
                <h4 className="">Infrastructure Solutions</h4>
                <div className="text-right">
                  <p className="grey">Reliable Online Presence</p>
                </div>
              </div>
              </ScrollAnimation>

              </div>
              <ScrollAnimation
            delay={1000}
            animateIn="animate__fadeInUp"
            animateOut="animate__fadeOut"
            animateOnce={true}
          >
              <div class="outer2">
                    <div class="button2">
                      <div class="text2">View Our Services </div>
                    </div>
                  </div>
                  </ScrollAnimation>
            {/* <h5 class="slide-horizontal" data-splitting>Horizontal Slide Effect</h5> */}
         
            </div>
          </div>

          {/* <div className="row">
        
        <div className="col-lg-6">
        <div className='services-videos'>
          <video autoPlay muted loop>
            <source src="/assets/images/s84.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </div>
        </div>
        <div className="col-lg-6">
        <div className='services-videos'>
          <video autoPlay muted loop>
            <source src="/assets/images/s81.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          </div>
        </div>
      </div> */}
        </div>
      </div>
      <LetsmakeSection />

      <SectionTwo />
    </div>
  );
}
