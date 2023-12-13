import Head from "next/head";
import "animate.css";
import { useRouter } from 'next/router';

import ScrollAnimation from "react-animate-on-scroll";
import LetsmakeSection from "../../components/letsMakeSection/letsmake";
import SectionTwo from "../sectionThirdComponent/sectionThird";
import Styles from "../../styles/Home.module.css";

export default function AboutUs() {

  const router = useRouter();
  const dark = router.pathname

  function webDevelopment() {
    router.push("/webDevelopment")
  }

  function domains() {
    router.push("/domains")
  }

  function dataBase() {
    router.push("/database")
  }

  function uiux() {
    router.push("/uiux")
  }
  function Infrastructure() {
    router.push("/infra")
  }

  const backgroundClassname = dark === "/" ?  "aboutus-gradient" : ""
  return (
    
      <div className={`container-fluid ${backgroundClassname} `}>
       
       
        <div className="container section-divide-margin-about-us">
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

          <div className="content-head ">
            <div className="row ">
              <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <ScrollAnimation
                  duration={2}
                  delay={500}
                  animateIn="animate__fadeInRightCustom"
                  animateOut="animate__fadeOut"
                  animateOnce={true}
                >
                  <div className="cube mt-3">What We Offer</div>
                </ScrollAnimation>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12">
                {" "}
                <ScrollAnimation
                  duration={2}
                  delay={500}
                  animateIn="animate__fadeInRightCustom"
                  animateOut="animate__fadeOut"
                  animateOnce={true}
                >
                  <p className="services">
                    Explore Our Comprehensive{" "}
                    <span className="gradient-text">Services </span>
                    for a Transformational Online Presence.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
            <div
              className={`${Styles.product_innovation_container} product-innovation`}
            >
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
                        {/* <div className="row">
                          <div className="col-lg-2">
                            <img src="./assets/images/arr.png" height={30} />
                          </div>
                          <div className="col-lg-10">
                           
                          </div>
                        </div> */}
                       {/* <img width="44" height="44" src="https://img.icons8.com/nolan/64/1A6DFF/C822FF/web.png" alt="web"/> */}
                      
                         <ScrollAnimation
                              delay={500}
                              animateIn="animate__fadeInRightCustom"
                              animateOut="animate__fadeOut"
                              animateOnce={true}
                            >
                              <h4 className={Styles.h4_heading}>
                              <img src="./assets/images/arr.png" height={30} />Web Development
                              </h4>
                            </ScrollAnimation>
                            <p>
                              Comprehensive web development services: We design,
                              code, and optimize websites, ensuring
                              responsiveness and a seamless user
                              experience for online success.
                            </p>
                            <button className="explore-btn" onClick={webDevelopment}>View more </button>
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
                              <h4 className={Styles.h4_heading}><img src="./assets/images/arr.png" height={30} /> Domains</h4>
                            </ScrollAnimation>
                            <p>
                              Establish and solidifying industry leaders. Unlock
                              your brand’s potential. Creating an extension
                              between a company and their audience.
                            </p>
                            <button className="explore-btn" onClick={domains}>View more</button>
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
                              <h4 className={Styles.h4_heading}> <img src="./assets/images/arr.png" height={30} />Database</h4>
                            </ScrollAnimation>
                            <p>
                              Establish and solidifying industry leaders. Unlock
                              your brand’s potential. Creating an extension
                              between a company and their audience.
                            </p>
                            <button className="explore-btn" onClick={dataBase}>View more</button>
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
                              <h4 className={Styles.h4_heading}> <img src="./assets/images/arr.png" height={30} />UI / UX</h4>
                            </ScrollAnimation>
                            <p>
                              Establish and solidifying industry leaders. Unlock
                              your brand’s potential. Creating an extension
                              between a company and their audience.
                            </p>
                            <button className="explore-btn" onClick={uiux}>View more</button>
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
                              <h4 className={Styles.h4_heading} > <img src="./assets/images/arr.png" height={30} />Infrastructure</h4>
                            </ScrollAnimation>
                            <p>
                              Establish and solidifying industry leaders. Unlock
                              your brand’s potential. Creating an extension
                              between a company and their audience.
                            </p>
                            <button className="explore-btn" onClick={Infrastructure}>
                            View more
                            </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {
          router.pathname === "/" &&  <LetsmakeSection />
        }
       
        
     
        
        <SectionTwo />
      </div>
    
  );
}
