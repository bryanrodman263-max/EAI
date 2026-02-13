const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const canvas = document.getElementById('stars');
if (canvas) {
  const ctx = canvas.getContext('2d');
  const dpr = window.devicePixelRatio || 1;
  const resize = () => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    canvas.style.width = `${w}px`;
    canvas.style.height = `${h}px`;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    draw(w, h);
  };

  const draw = (w, h) => {
    ctx.clearRect(0, 0, w, h);
    const total = Math.floor((w * h) / 19000);
    for (let i = 0; i < total; i += 1) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      const r = Math.random() * 1.3 + 0.3;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(215,225,255,${Math.random() * 0.55})`;
      ctx.fill();
    }
  };

  window.addEventListener('resize', resize);
  resize();
}
