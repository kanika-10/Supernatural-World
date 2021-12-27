import React from "react";
import Particles from "react-tsparticles";
import ParticleConfig from "./particleConfig";

export default function ParticleBackground() {
  return (
    <div id="particle-js">
      <Particles params={ParticleConfig} />
    </div>
  );
}
