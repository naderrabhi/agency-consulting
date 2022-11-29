import React from "react";
import Layout from "../../Components/Layout";
import Welcome from "../Welcome/Welcome";
import Contact from "../../Components/Contact/Contact";
import About from "../About/About";
import Services from "../Services/Services";
import Gallery from "../Gallery/Gallery";
import ContactForm from "../ContactForm/ContactForm";
import Footer from "../Footer/Footer";

const Home = () => {
  return (
    <>
      <Layout>
        <Welcome />
      </Layout>
      <About />
      <Contact />
      <Services />
      <Gallery />
      <ContactForm />
      <Footer />
    </>
  );
};

export default Home;
