import { useEffect } from "react";
import Aos from "aos";
import "./LandingPage.css";
import Header from "./Header/Headers";
import Exercises from "./UI/Exercises";
import Footer from "./UI/Footer";
import Hero from "./UI/Hero";
import Start from "./UI/Start";
import Testimonials from "./UI/Testimonials";

function LandingPage() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <>
      <Header />
      <Hero />
      <Exercises />
      <Start />
      <Testimonials />
      <Footer />
    </>
  );
}

export default LandingPage;
