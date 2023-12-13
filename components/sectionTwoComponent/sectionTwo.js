import { useRef, useEffect } from "react";
import styles from "./index.module.css";
import "animate.css";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import gsap from "gsap";
import ScrollAnimation from "react-animate-on-scroll";
export default function SectionTwo(props) {
  let refs = useRef([]);
  const body = useRef(null);
  const container = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    createAnimation();
  }, []);

  const createAnimation = () => {
    gsap.to(refs.current, {
      opacity: 1,
      ease: "none",
      stagger: 0.1,
      scrollTrigger: {
        trigger: container.current,
        scrub: true,
        start: `top`,
        end: `+=${window.innerHeight / 2.5}`,
      },
    });
  };

  const splitWords = (phrase) => {
    let body = [];
    phrase.split(" ").forEach((word, i) => {
      const letters = splitLetters(word);
      body.push(<p key={word + "_" + i}>{letters}</p>);
    });
    return body;
  };

  const splitLetters = (word) => {
    let letters = [];
    word.split("").forEach((letter, i) => {
      letters.push(
        <span
          key={letter + "_" + i}
          ref={(el) => {
            refs.current.push(el);
          }}
        >
          {letter}
        </span>
      );
    });
    return letters;
  };
  const phrase =
    "We can help you reimagine your business through innovative solutions and transformative strategies.";
  return (
    <div className="bg2-black">
      <div className="container-fluid ">
        <div  className=" container section-divide-margin-second">
        
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
            <main ref={container} className={styles.main}>
            <div ref={body} className={styles.body}>
              {splitWords(phrase)}
            </div>
          </main>
          <div className="row text-left section-two-description">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12">
            <ScrollAnimation
                  duration={2}
                  delay={200}
                  animateIn="animate__fadeInUp"
                  animateOut="animate__fadeOut"
                  animateOnce={true}
                >
              <p className="section-two-grey">
                {" "}
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <div class="outer">
                    <div class="">
                      <div class="text"></div>
                    </div>
                  </div>
              </ScrollAnimation>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 padding-bottom-50">
          
            </div>
          </div>
            </div>
          </div>

          
          {/* <div className="row text-center section-two-description">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12"></div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-12 padding-bottom-50">
            <ScrollAnimation
                  duration={2}
                  delay={200}
                  animateIn="animate__fadeInUp"
                  animateOut="animate__fadeOut"
                  animateOnce={true}
                >
              <p className="section-two-grey">
                {" "}
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
              </p>
              <button className="section-two-btn">Get Started</button>
              </ScrollAnimation>
            </div>
          </div> */}
        </div>

        {/* <div className="scroll-wrap section-divide-marque-second">
        <div class="marquee footer-style">
          <div class="marquee-content scroll">
            <div class="marquee-title2">STARTIFICIAL.STARTIFICIAL</div>
          </div>
        </div>
      </div> */}
      </div>
      
    </div>
  );
}
