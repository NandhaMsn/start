import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import "animate.css";
function Head(props) {
  console.log(props, "propsss");
  const [visible, setVisible] = useState(true);
  const [visibleOne, setVisibleOne] = useState(true);
  const [visibletwo, setVisibletwo] = useState(true);
  const [hideTwo, setHideTwo] = useState(true);
  const [scrollClass, setScrollClass] = useState("");
  const [scrollClasstwo, setScrollClasstwo] = useState("");
  const [hideThree, setHideThree] = useState(true);
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const threshold = 500; // Adjust this value as needed
      const scrollYtwo = window.scrollY;
      const thresholdtwo =2600;
      const scrollYthree = window.scrollY;
      const thresholdthree = 6300;
      const scrollYsix = window.scrollY;
      const thresholdsix = 8450;
      const scrollYfour = window.scrollY;
      const thresholdfour = 8980;
      const scrollYfive = window.scrollY;
      const thresholdfive = 9280;
      const scrollYseven = window.scrollY;
      const thresholdseven = 8850;
      // Check if the scroll position is greater than the threshold
      if (scrollY > threshold) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      if (scrollYtwo > thresholdtwo) {
        setVisibletwo(true);
      } else {
        setVisibletwo(false);
      }
      if (scrollYfour > thresholdfour) {
        setHideTwo(false);
      } else {
        setHideTwo(true);
      }
      if (scrollYfive > thresholdfive) {
        setVisibleOne(true);
      } else {
        setVisibleOne(false);
      }
      if (scrollYseven > thresholdseven) {
        setHideThree(false);
      } else {
        setHideThree(true);
      }
      if (scrollYthree >= thresholdthree) {
        setScrollClass("/assets/images/logo/purple.png");
      } else {
        setScrollClass("/assets/images/logo/purple.png");
      }
      if (scrollYsix >= thresholdsix) {
        setScrollClasstwo("/assets/images/logo/purple.png");
        
      } else {
        setScrollClasstwo("/assets/images/logo/purple.png");
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navbarStyle = props.dark ? "dark-navbar-style" : "navbar-style";
  const navbarborder = props.dark ? "dark-navbar-border" : "navbar-border";
  const homenavbar = router.pathname === "/";
  const OtherPagenavbar = props.asPath === "/med"
  return (
    <>
    { 
     homenavbar  ?
      <>
         { visible && (
        <nav class={`navbar navbar-expand-sm   ${navbarStyle} fixed-top`}>
          <div class="container">
            <div className="animate__animated animate__fadeInLeft animate__fast">
              <>
                <Link href="/">
                  {props.dark ? (
                    <img src="/assets/images/logo/line.png" className="logo" />
                  ) : (
                    <img
                      src="/assets/images/logo/purple.png"
                      className="logo"
                    />
                  )}
                </Link>
              </>
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#mynavbar"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="mynavbar">
              <ul class={`navbar-nav ms-auto ${navbarborder}`}>
                <li class="nav-item">
                  <div
                    className="animate__animated animate__fadeInRightCustom 
                         animate__duration-1s"
                  >
                    <Link href="/">Home</Link>
                  </div>
                </li>
                <li class="nav-item">
                  <div className="animate__animated animate__fadeInRightCustom  animate__duration-1s">
                    <Link href="/">Services</Link>
                  </div>
                </li>
                <li class="nav-item">
                  <div className="animate__animated animate__fadeInRightCustom  animate__duration-1s">
                    <Link href="/">PortFolio</Link>
                  </div>
                </li>
                <li class="nav-item">
                  <div className="animate__animated animate__fadeInRightCustom  animate__duration-1s">
                    <Link href="/contactUs">Contact Us</Link>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
 
      </> : 
      <nav class={`navbar navbar-expand-sm  fixed-top `}>
      <div class="container">
        <div className="animate__animated animate__fadeInLeft animate__fast">
          <>
            <Link href="/">
              {props.dark ? (
                <img src="/assets/images/logo/line.png" className="logo" />
              ) : (
                <img
                  src="/assets/images/logo/purple.png"
                  className="logo"
                />
              )}
            </Link>
          </>
        </div>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mynavbar"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="mynavbar">
          <ul class={`navbar-nav ms-auto ${navbarborder}`}>
            <li class="nav-item">
              <div
                className="animate__animated animate__fadeInRightCustom 
                     animate__duration-1s"
              >
                <Link href="/">Home</Link>
              </div>
            </li>
            <li class="nav-item">
              <div className="animate__animated animate__fadeInRightCustom  animate__duration-1s">
                <Link href="/">Services</Link>
              </div>
            </li>
            <li class="nav-item">
              <div className="animate__animated animate__fadeInRightCustom  animate__duration-1s">
                <Link href="/">PortFolio</Link>
              </div>
            </li>
            <li class="nav-item">
              <div className="animate__animated animate__fadeInRightCustom  animate__duration-1s">
                <Link href="/contactUs">Contact Us</Link>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav> 
    }
    </>
  );
}
export default Head;