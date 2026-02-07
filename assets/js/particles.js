window.initParticlesBackground = function initParticlesBackground(options) {
  const canvas = options.canvas;
  const reduceMotion = options.reduceMotion;
  const isMobile = options.isMobile;
  const rand = options.rand;
  const ctx = canvas ? canvas.getContext("2d") : null;
  if (!ctx) return null;

  const DPR = Math.min(window.devicePixelRatio || 1, 2);
  const particleCount = isMobile ? 90 : 150;
  const particles = [];
  let width = 0;
  let height = 0;
  let rafId = null;

  const onResize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    canvas.width = Math.floor(width * DPR);
    canvas.height = Math.floor(height * DPR);
    canvas.style.width = width + "px";
    canvas.style.height = height + "px";
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
  };

  for (let i = 0; i < particleCount; i += 1) {
    particles.push({
      x: rand(0, window.innerWidth),
      y: rand(0, window.innerHeight),
      r: rand(0.7, 2.2),
      vx: rand(-0.2, 0.2),
      vy: rand(-0.15, 0.15),
      a: rand(0.25, 0.7)
    });
  }

  const draw = () => {
    ctx.clearRect(0, 0, width, height);
    for (let i = 0; i < particles.length; i += 1) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < -20) p.x = width + 20;
      if (p.x > width + 20) p.x = -20;
      if (p.y < -20) p.y = height + 20;
      if (p.y > height + 20) p.y = -20;

      ctx.beginPath();
      ctx.fillStyle = "rgba(97, 218, 251, " + p.a + ")";
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fill();
    }

    for (let i = 0; i < particles.length; i += 1) {
      for (let j = i + 1; j < particles.length; j += 1) {
        const a = particles[i];
        const b = particles[j];
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        const dist = Math.hypot(dx, dy);
        if (dist > 120) continue;
        const alpha = (1 - dist / 120) * 0.2;
        ctx.strokeStyle = "rgba(97, 218, 251, " + alpha + ")";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  };

  onResize();
  window.addEventListener("resize", onResize);

  if (reduceMotion) {
    draw();
  } else {
    const tick = () => {
      draw();
      rafId = requestAnimationFrame(tick);
    };
    tick();
  }

  return {
    destroy: () => {
      if (rafId) cancelAnimationFrame(rafId);
      window.removeEventListener("resize", onResize);
    }
  };
};
