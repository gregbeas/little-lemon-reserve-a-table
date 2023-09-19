import React from "react";
import "./Home.scss";

import Header from "../../Components/Header/Header";
import Main from "../../Components/Main/Main"
import Footer from "../../Components/Footer/Footer"


const Home = () => {
  return <>
    <Header />
    <main>
    <Main />
    </main>
    <Footer />
  </>
}

export default Home;