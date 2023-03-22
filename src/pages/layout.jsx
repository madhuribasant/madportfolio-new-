import gsap from "gsap";
import React ,{useEffect} from "react";
import { Outlet } from "react-router-dom";
import { useGlobalContext } from "../components/Context";
import Footer from "../components/footer/Footer";

import Navbar from "../components/navbar/Navbar";
import { Transition } from "../components/transiton/Transition";



const Layout = () => {
  const { transition } = useGlobalContext();

 

  return (
    <>
      <main id="main">
            <Navbar />
            <Outlet />
            <Footer />
      </main>
    </>
  );
};

export default Layout;
