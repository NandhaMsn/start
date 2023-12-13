import React, { useEffect, useRef, useState } from "react";
import HomePage from "../components/homePageCompoent/homepage";
import SectionTwo from "../components/sectionTwoComponent/sectionTwo";
import SectionBlack from "../components/sectionBlackComponent/sectionBlack";
import PortFolio from "../components/portfolioComponent/homeportfolio";
import Contact from "../components/conatctUSComponent/conatct";

import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';

// Lazy load OurProcess component
const OurProcess = React.lazy(() => import("../pages/ourProcess/index"));

export default function Home() {
  const router = useRouter();
  const dark = router.pathname === "/contactUs";
  const background = router.pathname;
  const backgroundClassname = background === "/contactUs" || "/" ? "aboutus-gradient" : "";

  const white = "#070707";
  const black = "#fffff";

  return (
    <div className={`container-fluid`}>
      <HomePage databgcolor={black} />
      <SectionTwo databgcolor={white} />
      <React.Suspense fallback={<div>Loading...</div>}>
        <OurProcess />
      </React.Suspense>
     
      <PortFolio />
      <SectionBlack />
      <Contact />
    </div>
  );
}
