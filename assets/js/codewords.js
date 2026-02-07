window.initCodewordsBackground = function initCodewordsBackground(options) {
  const layer = options.layer;
  const reduceMotion = options.reduceMotion;
  const isMobile = options.isMobile;
  const rand = options.rand;
  if (!layer) return null;

  const wordCount = isMobile ? 16 : 28;
  const words = [
    "git commit -m", "npm run build", "pnpm dev", "docker compose up",
    "kubectl get pods", "terraform apply", "gh pr create", "curl -X POST",
    "SELECT id, name", "EXPLAIN ANALYZE", "redis-cli", "localhost:3000",
    "HTTP 200", "HTTP 500", "try/catch", "Promise.all()", "async/await",
    "useEffect()", "useMemo()", "refactor(core)", "feature/landing",
    "hotfix/auth", "main", "origin", "CI passed", "deploy:prod",
    "rollback", "rate_limit", "webhook", "event_bus", "queue_worker",
    "cache_hit", "edge_runtime", "observability", "tracing"
  ];
  const codewords = [];
  let width = 0;
  let height = 0;
  let rafId = null;

  const onResize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
  };

  const spawnCodeword = (word) => {
    const el = document.createElement("span");
    el.className = "codeword";
    el.textContent = word;
    el.style.fontSize = rand(12, 20) + "px";
    el.style.opacity = String(rand(0.14, 0.3));
    layer.appendChild(el);
    return {
      el,
      x: rand(0, width),
      y: rand(0, height),
      vx: rand(0.15, 0.55),
      vy: rand(-0.12, 0.12)
    };
  };

  onResize();
  window.addEventListener("resize", onResize);
  for (let i = 0; i < wordCount; i += 1) {
    codewords.push(spawnCodeword(words[i % words.length]));
  }

  const draw = () => {
    for (let i = 0; i < codewords.length; i += 1) {
      const w = codewords[i];
      w.x += w.vx;
      w.y += w.vy;
      if (w.x > width + 260) {
        w.x = -220;
        w.y = rand(0, height);
      }
      if (w.y < -30) w.y = height + 30;
      if (w.y > height + 30) w.y = -30;
      w.el.style.transform = "translate(" + w.x.toFixed(1) + "px, " + w.y.toFixed(1) + "px)";
    }
  };

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
      for (let i = 0; i < codewords.length; i += 1) {
        const w = codewords[i];
        if (w.el && w.el.parentNode === layer) {
          layer.removeChild(w.el);
        }
      }
    }
  };
};
