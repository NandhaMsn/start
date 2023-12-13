import { Container, Typography, Chip } from "@mui/material";
import React from "react";
import Head from "next/head";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
import logo from "../public/assets/images/logo/purple.png";

const Footer = () => {
  return (
    <div className="container-fluid bg-black">
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
                <link
                  rel="stylesheet"
                  href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
                />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0"></meta>
              </Head>
      <div className=" container footer-margin">
        <div className="footer-border-bottom"></div>
        <div className="footer-logo-container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12   footer-center-part">
            <ScrollAnimation
                  duration={2}
                  delay={500}
                  animateIn="animate__fadeInRightCustom"
                  animateOut="animate__fadeOut"
                  animateOnce={true}
                >
              <img src="./assets/images/logo/purple.png" height={50}></img>
              <p className="footer_heading mb-5">
                Revolutionizing Technology through Startificial!
              </p>
              </ScrollAnimation>
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <ScrollAnimation
                  duration={2}
                  delay={500}
                  animateIn="animate__fadeInRightCustom"
                  animateOut="animate__fadeOut"
                  animateOnce={true}
                >
                  <div className="footer-company-location">
                    <h5 className="footer-title">Startificial</h5>

                    <p className="footer-para">Location</p>
                    <p className="footer-para">Bangalore, India.</p>
                  </div>
                  </ScrollAnimation>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <ScrollAnimation
                  duration={2}
                  delay={500}
                  animateIn="animate__fadeInRightCustom"
                  animateOut="animate__fadeOut"
                  animateOnce={true}
                >
                  <div className="contact-links">
                    <h5 className="footer-title">Contact</h5>
                    <a className="footer-para">+46544546544</a> <br />
                    <a className="footer-para">info@startificial.com</a>
                  </div>
                  </ScrollAnimation>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-4 col-sm-4 col-xs-12 footer-margin-top-2   text-left">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <ScrollAnimation
                  duration={2}
                  delay={1000}
                  animateIn="animate__fadeInRightCustom"
                  animateOut="animate__fadeOut"
                  animateOnce={true}
                >
                  <ul className="footer-ul">
                    <h5 className="footer-title">Menu</h5>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Portfolio</li>
                    <li>Contact Us</li>
                  </ul>
                  </ScrollAnimation>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <ScrollAnimation
                  duration={2}
                  delay={1000}
                  animateIn="animate__fadeInRightCustom"
                  animateOut="animate__fadeOut"
                  animateOnce={true}
                >
                  <ul className="footer-ul">
                    <h5 className="footer-title">Services</h5>
                    <li>Web Development</li>
                    <li>Domains</li>
                    <li>Database</li>
                    <li>UI / UX</li>
                    <li>Infrastructure</li>
                  </ul>
                  </ScrollAnimation>
                </div>
              </div>

              {/* <div className="row mt-5">
                <div className="col-lg-6">
                <ul className="footer-ul">
              <h5 className="footer-title">Web Development</h5>
                <li>Mern Stack</li>
                <li>Mean Stack</li>
                <li>Wordpress</li>
                <li>Python</li>
                <li>PHP</li>
                <li>Vue Js</li>
              </ul>
                </div>
                <div className="col-lg-6">
                <ul className="footer-ul">
              <h5 className="footer-title">Domains</h5>
                <li>Entertainment Tools</li>
                <li>Healthcare</li>
                <li>Ecommerce App</li>
                <li>CMS</li>
                <li>CRM</li>
                <li>Payment App</li>
              </ul>
</div>

              </div> */}
              {/* <div className="row">
                <div className="col-lg-6">
                <ul className="footer-ul">
              <h5 className="footer-title">UI / UX</h5>
                <li>Adobe Xd</li>
                <li>Figma</li>
                
              </ul>
                </div>
                <div className="col-lg-6">
                <ul className="footer-ul">
              <h5 className="footer-title">Infrastructure</h5>
                <li>AWS</li>
                <li>Kubernates</li>
                <li>Terraform</li>
                <li>Docker</li>
                <li>Ansible</li>
                <li>Jenkins</li>
                <li>Gitlab</li>
                <li>Bash</li>
                <li>CI / CD</li>
              </ul>
</div>

              </div> */}
            </div>
            <div className="col-lg-4 col-m-4 col-sm-4 col-xs-12 footer-margin-top-2">
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <ScrollAnimation
                  duration={2}
                  delay={1000}
                  animateIn="animate__fadeInRightCustom"
                  animateOut="animate__fadeOut"
                  animateOnce={true}
                >
                  <ul className="footer-ul ">
                    <h5 className="footer-title">Follow US</h5>
                    <li>Linked In</li>
                    <li>Facebook</li>
                    <li>Instagram</li>
                  </ul>
                  </ScrollAnimation>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6">
                <ScrollAnimation
                  duration={2}
                  delay={1000}
                  animateIn="animate__fadeInRightCustom"
                  animateOut="animate__fadeOut"
                  animateOnce={true}
                >
                  <ul className="footer-ul ">
                    <h5 className="footer-title">Links</h5>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                  </ul>
                  </ScrollAnimation>
                </div>
              </div>
              <div className="text-right mt-5"></div>
            </div>
          </div>
          <ScrollAnimation
                  duration={2}
                  delay={500}
                  animateIn="animate__fadeInRightCustom"
                  animateOut="animate__fadeOut"
                  animateOnce={true}
                >
          <div className="reserved  mt-5">
            <p className="footer-para text-right">
              © 2023 Startificial. All rights reserved
            </p>
          </div>
          </ScrollAnimation>
          
          {/* <div className="scroll-wrap">
        <div class="marquee footer-style">
          <div class="marquee-content scroll">
            <div class="marquee-title">STARTIFICIAL.STARTIFICIAL</div>
          </div>
        </div>
      </div> */}
        </div>
      </div>
      
    </div>
  );
};

export default Footer;
