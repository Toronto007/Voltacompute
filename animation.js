
const canvas = document.getElementById("bg-canvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

function createParticle(color) {
  return {
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 3 + 1,
    speedX: Math.random() * 1 - 0.5,
    speedY: Math.random() * 1 - 0.5,
    color: color
  };
}

function initParticles() {
  const colors = ['#facc15', '#3b82f6', '#10b981'];
  for (let i = 0; i < 150; i++) {
    const color = colors[Math.floor(Math.random() * colors.length)];
    particles.push(createParticle(color));
  }
}

function handleParticles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let p of particles) {
    ctx.fillStyle = p.color;
    ctx.beginPath();
    ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
    ctx.fill();
    p.x += p.speedX;
    p.y += p.speedY;

    if (p.x < 0 || p.x > canvas.width || p.y < 0 || p.y > canvas.height) {
      p.x = Math.random() * canvas.width;
      p.y = Math.random() * canvas.height;
    }
  }
}

function animate() {
  handleParticles();
  requestAnimationFrame(animate);
}

initParticles();
animate();

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});
