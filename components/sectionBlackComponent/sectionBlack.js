import Head from "next/head";
import "animate.css";
import ScrollAnimation from "react-animate-on-scroll";
export default function SectionBlack() {
  return (
    <div className="container-fluid testimonials-head ">
      <ScrollAnimation
        duration={2}
        delay={200}
        animateIn="animate__fadeInUp"
        animateOut="animate__fadeOut"
        animateOnce={true}
      >
        <div className="container section-divide-margin content">
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
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link
              href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
              rel="stylesheet"
            />
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
          </Head>

          <div className="content-head mt-5">
            <div className="row">
              <div className="col-lg-12">
                <div className="row ">
                  <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 text-left">
                    {" "}
                    <ScrollAnimation
                      duration={2}
                      delay={200}
                      animateIn="animate__fadeInRightCustom"
                      animateOut="animate__fadeOut"
                      animateOnce={true}
                    >
                      <h1 className=" section-two-h1 white">
                        Client Voices: <br />
                        What Our Customers Are Saying
                      </h1>
                    </ScrollAnimation>
                  </div>
                  <div className="col-lg-4 col-md-12 col-sm-12 col-xs-12">
                    {/* <ScrollAnimation
                  duration={2}
                  delay={200}
                  animateIn="animate__fadeInRightCustom"
                  animateOut="animate__fadeOut"
                  animateOnce={true}
                >
                  <div className="cube mt-3">TESTIMONIALS</div>
                </ScrollAnimation> */}
                  </div>
                </div>

                <div className="testimonials">
                  <div className="row">
                    <div className="col-lg-1">
                      <div className="testimonialsImg text-left">
                        <img
                          src="./assets/images/k1.jpg"
                          className="img-fluid border-radius-55"
                          height={80}
                          width={70}
                        ></img>
                      </div>
                    </div>
                    <div className="col-lg-11">
                      <p className="testimonials-main">
                        Working with startificial has been an absolute pleasure.
                        Their team is not only talented and professional but
                        also genuinely cares about their clients' success. They
                        went above and beyond to meet our needs, and we couldn't
                        be happier with the results
                      </p>

                      <p className="white">- Mark, Right Direction Founder</p>
                    </div>
                  </div>
                </div>
                {/* <button className="bg-white-btn black mt-5"><span>Read More</span></button> */}
              </div>
            </div>
          </div>
        </div>
      </ScrollAnimation>
      {/* <img src="/assets/images/B.png" className="gradient-bg-image3"></img> */}
      {/* <img src="/assets/images/lite.png" className="gradient-bg-image1"></img> */}
    </div>
  );
}
