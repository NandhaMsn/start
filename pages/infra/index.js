import React from "react";
import Head from "next/head";
import { Link } from "@mui/material";
import AboutUs from "../../components/aboutUsComponent/AboutUs";
import NavBar from "../../components/Navbar";
import { useRouter } from "next/router";
import "animate.css";
import Styles from "../../styles/Home.module.css";
import ScrollAnimation from "react-animate-on-scroll";
import BlogComponent from "../../components/blogComponent/blogComponent"
import Contact from "../../components/conatctUSComponent/conatct"
function index(props) {
  const router = useRouter();

  const { pathname } = router;

  const breadcrumbs = pathname.split("/").filter(Boolean);
  const dark = router.pathname;
  const backgroundClassname =
    dark === "/infra" ? "aboutus-gradient" : "";

  function webDevelopment() {
    router.push("/webDevelopment");
  }

  function domains() {
    router.push("/domains");
  }

  function dataBase() {
    router.push("/dataBase");
  }

  function uiux() {
    router.push("/uiux");
  }
  function Infrastructure() {
    router.push("/Infrastructure");
  }

  return (
    <div className="">
      <div className={`container-fluid  ${backgroundClassname} `}>
        <NavBar dark={dark} />

        <div className=" container  mb-0  no-gutters">
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
          <ul class="breadcrumb">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/services">Services</Link>
            </li>
            <li>Infrastructure</li>
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
              <p className="services-main-heading mb-5">Infrastructure</p>
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

          <div className="content-head  section-divide-margin  mt-5">
            <div className="row ">
              {/* <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <ScrollAnimation
                  duration={2}
                  delay={500}
                  animateIn="animate__fadeInRightCustom"
                  animateOut="animate__fadeOut"
                  animateOnce={true}
                >
                  <div className="cube">What We Offer</div>
                </ScrollAnimation>
              </div> */}
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 ">
                {" "}
                <ScrollAnimation
                  duration={2}
                  delay={500}
                  animateIn="animate__fadeInRightCustom"
                  animateOut="animate__fadeOut"
                  animateOnce={true}
                >
                  <p className="services-main-heading">
                  Powerful <span className="gradient-text">Infrastructure</span> for Seamless Web Development
                  </p>
                  <p className="grey">
                  At Startificial, we offer a robust infrastructure that fuels your web development projects with the latest and most reliable technologies. Our infrastructure stack, comprising AWS, Kubernetes, Terraform, Docker, Ansible, Jenkins, GitLab, and the power of Bash scripting, empowers you to achieve excellence in web development.At [Your Company Name], we offer a robust infrastructure that fuels your web development projects with the latest and most reliable technologies. Our infrastructure stack, comprising AWS, Kubernetes, Terraform, Docker, Ansible, Jenkins, GitLab, and the power of Bash scripting, empowers you to achieve excellence in web development.At [Your Company Name], we offer a robust infrastructure that fuels your web development projects with the latest and most reliable technologies. Our infrastructure stack, comprising AWS, Kubernetes, Terraform, Docker, Ansible, Jenkins, GitLab, and the power of Bash scripting, empowers you to achieve excellence in web development.
                  </p>
                </ScrollAnimation>
              </div>
            </div>
            <div
              className={`${Styles.product_innovation_container} product-innovation`}
            >
                 <div className="row section-divide-margin">
              {/* <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                <ScrollAnimation
                  duration={2}
                  delay={500}
                  animateIn="animate__fadeInRightCustom"
                  animateOut="animate__fadeOut"
                  animateOnce={true}
                >
                  <div className="cube">What We Offer</div>
                </ScrollAnimation>
              </div> */}
              <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                {" "}
                <ScrollAnimation
                  duration={2}
                  delay={500}
                  animateIn="animate__fadeInRightCustom"
                  animateOut="animate__fadeOut"
                  animateOnce={true}
                >
                  <p className="services-main-heading">
                    Our Comprehensive Suite <br/> of <span className="gradient-text">UI/UX </span> Tools
                    
                  </p>
                 
                </ScrollAnimation>
              </div>
            </div>
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
                      <ScrollAnimation
                              delay={500}
                              animateIn="animate__fadeInRightCustom"
                              animateOut="animate__fadeOut"
                              animateOnce={true}
                            >
                              <h4 className={Styles.h4_heading}> <img src="./assets/images/arr.png" height={30} />AWS</h4>
                            </ScrollAnimation>
                            <p>
                            Leverage the scalability and flexibility of AWS cloud services to host, secure, and manage your web applications efficiently.
                            </p>
                            <button className="explore-btn" >Read More</button>
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
                              <h4 className={Styles.h4_heading}><img src="./assets/images/arr.png" height={30} />Kubernates</h4>
                            </ScrollAnimation>
                            <p>
                            Harness the power of Kubernetes for container orchestration, ensuring seamless deployment, scaling, and management of your web services.
                            </p>
                            <button className="explore-btn" >Read More</button>
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
                              <h4 className={Styles.h4_heading}> <img src="./assets/images/arr.png" height={30} />Terraform</h4>
                            </ScrollAnimation>
                            <p>
                            Automate infrastructure provisioning and management using Terraform, streamlining your development workflow and reducing manual tasks.
                            </p>
                            <button className="explore-btn" >Read More</button>
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
                              <h4 className={Styles.h4_heading}> <img src="./assets/images/arr.png" height={30} /> Docker</h4>
                            </ScrollAnimation>
                            <p>
                            Containerize your applications with Docker, simplifying deployment and ensuring consistent environments across the development lifecycle.
                            </p>
                            <button className="explore-btn" >Read More</button>
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
                              <h4 className={Styles.h4_heading} > <img src="./assets/images/arr.png" height={30} />Ansible</h4>
                            </ScrollAnimation>
                            <p>
                            Automate configuration management and application deployment with Ansible, ensuring consistency and reliability in your infrastructure.
                            </p>
                            <button className="explore-btn" >Read More</button>
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
                              <h4 className={Styles.h4_heading}><img src="./assets/images/arr.png" height={30} />Jenkins</h4>
                            </ScrollAnimation>
                            <p>
                            Implement continuous integration and continuous deployment (CI/CD) pipelines with Jenkins, accelerating your development cycle.
                            </p>
                            <button className="explore-btn" >Read More</button>
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
                              <h4 className={Styles.h4_heading}> <img src="./assets/images/arr.png" height={30} />CI / CD </h4>
                            </ScrollAnimation>
                            <p>
                              Establish and solidifying industry leaders. Unlock
                              your brand’s potential. Creating an extension
                              between a company and their audience.
                            </p>
                            <button className="explore-btn" >Read More</button>
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
                              <h4 className={Styles.h4_heading} ><img src="./assets/images/arr.png" height={30} />Gitlab</h4>
                            </ScrollAnimation>
                            <p>
                            Collaborate seamlessly using GitLab for version control, issue tracking, and CI/CD integration, fostering teamwork and code quality.
                            </p>
                            <button className="explore-btn" >Read More</button>
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
                              <h4 className={Styles.h4_heading}><img src="./assets/images/arr.png" height={30} /> Bash</h4>
                            </ScrollAnimation>
                            <p>
                            Customize and optimize your infrastructure with the power of Bash scripting, automating repetitive tasks and boosting efficiency.
                            </p>
                            <button className="explore-btn" >Read More</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-0">
                 
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-xs-0">
                 
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <AboutUs /> */}
        <BlogComponent/>
      <Contact/>
      </div>
    </div>
  );
}

export default index;
