const year = document.getElementById('year');
if (year) {
  year.textContent = new Date().getFullYear();
}

const root = document.documentElement;
window.addEventListener('pointermove', (event) => {
  const x = event.clientX / window.innerWidth;
  const y = event.clientY / window.innerHeight;
  root.style.setProperty('--px', x.toFixed(3));
  root.style.setProperty('--py', y.toFixed(3));
});
