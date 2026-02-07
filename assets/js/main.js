import { rand } from "./utils.js";
import { initParticlesBackground } from "./particles.js";
import { initCodewordsBackground } from "./codewords.js";

const bootstrap = () => {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const isMobile = window.innerWidth < 768;
  const canvas = document.getElementById("particle-bg");
  const layer = document.getElementById("codeword-layer");

  initParticlesBackground({ canvas, reduceMotion, isMobile, rand });
  initCodewordsBackground({ layer, reduceMotion, isMobile, rand });
};

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", bootstrap);
} else {
  bootstrap();
}
