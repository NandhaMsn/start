import React from "react";
import Portfolio from "../../components/portfolioComponent/portfolioComponent";
import BlogComponent from "../../components/blogComponent/blogComponent";
import Contact from "../../components/conatctUSComponent/conatct";
import { useRouter } from "next/router";
function index() {
    const router = useRouter();

  const { pathname } = router;

  const breadcrumbs = pathname.split("/").filter(Boolean);
  const dark = router.pathname;
  const backgroundClassname = dark === "/portfolio" ? "aboutus-gradient" : "";
  return (
    <div className={` container-fluid content ${backgroundClassname}`}>
      <Portfolio />
      <BlogComponent />
        <Contact />
    </div>
  );
}

export default index;
