import { useEffect } from "react";
import Aos from "aos";
import "./LandingPage.css";
import Header from "./Header/Headers";
import Exercises from "./UI/Exercises";
import Footer from "./UI/Footer";
import Hero from "./UI/Hero";
import Start from "./UI/Start";
import Testimonials from "./UI/Testimonials";
import SendEmail from "./UI/SendGmail";
import CustomFeedback from "./UI/CustomFeedback";
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
      <div style={{ display: "flex" }}>
        <div style={{ margin: "auto" }}>
          <Testimonials />
        </div>
        <div style={{ margin: "auto" }}>
          <SendEmail />
        </div>
      </div>
      <div className="feeback">
        <CustomFeedback />
      </div>
      <Footer />
    </>
  );
}

export default LandingPage;
