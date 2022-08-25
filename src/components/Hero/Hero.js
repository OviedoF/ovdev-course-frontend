import React from "react";
import styles from "./Hero.module.scss";
import Image from "next/image";
import HeroPresentation from "./HeroPresentation";
import HeroAuth from "./HeroAuth";
import { useSelector } from "react-redux";
import HeroLinks from "./HeroLinks";

const Hero = ({ setError }) => {
  const auth = useSelector((state) => state.auth);

  return (
    <section className={styles.heroSection}>
      <HeroPresentation />

      {!auth ? <HeroAuth setError={setError} /> : <HeroLinks />}
    </section>
  );
};

export default Hero;
