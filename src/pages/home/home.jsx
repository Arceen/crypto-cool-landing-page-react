import React, { useContext } from "react";
import styles from "./home.module.css";

import Navbar from "../../components/nav/nav";
import Footer from "../../components/footer/footer";
import HeroSection from "./homeComponents/heroSection/heroSection";
import Features from "./homeComponents/features/features";
import TopCollections from "./homeComponents/topCollections/topCollections";
import CollectionFeatured from "./homeComponents/collectionFeatured/collectionFeatured";
import CallToAction from "./homeComponents/callToAction/callToAction";
import Discover from "./homeComponents/discover/discover";
import { SnackbarContext } from "../../context/snackbarContext";
import Snackbar from "../../components/overlays/snackbar/snackbar";
// Home acts as the parent container for all components
// Some Reusable Componets like `Navbar` and `Footer` is put in  src/components with other stuff like 2 generic Buttons, solid and outlined
// Other child components are put inside Home directly so not to confuse modules

const Home = () => {
  return (
    <div className={styles.home_main}>
      <Navbar />
      <HeroSection />
      <Features />
      <TopCollections />
      <CollectionFeatured />
      <CallToAction />
      <Discover />
      <Footer />
      <Snackbar />
    </div>
  );
};

export default Home;
