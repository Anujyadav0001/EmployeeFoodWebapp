import React from "react";

import Header from "../Header/Header.jsx";
import Footer from "../Footer/Footer.jsx";
import Routes from "../../routes/Routers";
import ContactForm from "../../pages/ContactForm.jsx";



const Layout = () => {
  
  return (
    <div>
      <Header />
      <div>
        <Routes />
      </div>
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Layout;
