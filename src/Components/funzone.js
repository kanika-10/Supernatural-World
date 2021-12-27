import React from "react";
import ParticleBackground from "./funzone/particlesBackground";
import FunzoneCarousel from "./funzone/funzoneCarousel";
import "./funzone/funzone.css";

function Funzone() {
  return (
    <section>
      <ParticleBackground />
      <h1 className="funzone-title">Quiz Time </h1>
      <h3 className="funzone-subtitle">
        Lets see how much you got involved in these series...
      </h3>
      <FunzoneCarousel />
    </section>
  );
}

export default Funzone;
