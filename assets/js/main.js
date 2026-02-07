(() => {
  const bootstrap = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isMobile = window.innerWidth < 768;
    const canvas = document.getElementById("particle-bg");
    const layer = document.getElementById("codeword-layer");
    const rand = window.siteUtils && window.siteUtils.rand
      ? window.siteUtils.rand
      : ((min, max) => Math.random() * (max - min) + min);

    if (typeof window.initParticlesBackground === "function") {
      window.initParticlesBackground({ canvas, reduceMotion, isMobile, rand });
    }
    if (typeof window.initCodewordsBackground === "function") {
      window.initCodewordsBackground({ layer, reduceMotion, isMobile, rand });
    }
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", bootstrap);
  } else {
    bootstrap();
  }
})();
