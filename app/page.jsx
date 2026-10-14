import Header from "../components/Header";
import Hero from "../components/Hero";
import Help from "../components/Help";
import Method from "../components/Method";
import Steps from "../components/Steps";
import Prices from "../components/Prices";
import About from "../components/About";
import Certificate from "../components/Certificate";
import Reviews from "../components/Reviews";
import Faq from "../components/Faq";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Help />
        <Method />
        <Steps />
        <Prices />
        <About />
        <Certificate />
        <Reviews />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
