import { Box, Chip, Stack, Typography, Container } from "@mui/material";
import Head from "next/head";
import NavBar from "../Navbar";

export default function Tracking() {
  return (
    <div className="">
      <div className=" pb-5 video-background">
        <video autoPlay muted loop>
          <source src="/assets/images/201.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className=" container-fluid ">
          <NavBar />
          <div className=" container mb-0 content no-gutters">
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
            <div className="row ">
              <div className="col-lg-6 homepage-text">
                <span className="side-text">Revelutionize Your</span>
                <h1 className="main-text-h1">
                  Creative Projects with <br />
                  the Ultimate AI - Powered <br />
                  Pattern
                </h1>
              </div>
              <div className="col-lg-6 homepage-text mt-5">
                <p>There is a long established fact that a reader will be
                    distracted by the readable content of a page when looking at
                    its layout.</p>
              </div>
            </div>
          </div>
        </div>

        <img src="/assets/images/R.png" className="gradient-bg-image"></img>
        <img src="/assets/images/lite.png" className="gradient-bg-image1"></img>
        {/* <div class="mouse-container ">
          <div class="field">
            <div class="mouse"></div>
          </div>
        </div> */}
      </div>
    </div>
  );
}
